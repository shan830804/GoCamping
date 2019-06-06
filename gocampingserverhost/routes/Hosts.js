const express = require("express")
const hosts = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Host = require("../models/Host")
hosts.use(cors())

process.env.SECRET_KEY = 'secret'

// 註冊-寫資料(C)
hosts.post('/register', (req, res) => {
    // const today = new Date()
    const hostData = {
        host_incName: req.body.host_incName,
        host_acc: req.body.host_acc,
        host_pwd: req.body.host_pwd
        // created: today
    }
    Host.findOne({
        where: {
            host_acc: req.body.host_acc
        }
    })
        .then(host => {
            if (!host) {
                bcrypt.hash(req.body.host_pwd, 10, (err, hash) => {
                    hostData.host_pwd = hash
                    Host.create(hostData)
                        .then(host => {
                            res.json({ status: host.host_acc + ' registered' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({ error: "User already exists" })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})
// 註冊-讀資料(R)
hosts.post('/login', (req, res) => {
    Host.findOne({
        where: {
            host_acc: req.body.host_acc
        }
    })
        .then(host => {
            if (host) {
                // bcrypt加密方法
                if (bcrypt.compareSync(req.body.host_pwd, host.host_pwd)) {
                    let token = jwt.sign(host.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
            } else {
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

module.exports = hosts
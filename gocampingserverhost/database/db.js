const Sequelize = require("sequelize")
const db = {}
/*
const sequelize = new Sequelize("nodejs_login1", "root1", "", {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})
*/
const sequelize = new Sequelize("go_camping", "sammie", "admin", {
    host: '192.168.27.37',
    // 資料庫型別
    dialect: 'mysql',
    operatorsAliases: false,
    
    // 連線池配置
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db 
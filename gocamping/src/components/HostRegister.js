import React, { Component } from 'react'
import { register } from './HostFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            host_incName: '',
            host_acc: '',
            host_pwd: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const host = {
            host_incName: this.state.host_incName,
            host_acc: this.state.host_acc,
            host_pwd: this.state.host_pwd
        }

        register(host).then(res => {
            alert('註冊成功，畫面跳轉至登入頁！')
            this.props.history.push(`/host/login`)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mt-5 mx-auto px-5 py-4 bg-white">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 fw-bold grass text-center">營地主註冊</h1>
                            <div className="form-group">
                                <label htmlFor="host_incName" className="fw-bold">公司名稱</label>
                                <input type="text"
                                    className="form-control"
                                    name="host_incName"
                                    placeholder="Enter Campany Name"
                                    value={this.state.host_incName}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="host_acc" className="fw-bold">帳戶名稱</label>
                                <input type="text"
                                    className="form-control"
                                    name="host_acc"
                                    placeholder="Enter Account"
                                    value={this.state.host_acc}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="host_pwd" className="fw-bold">帳戶密碼</label>
                                <input type="password"
                                    className="form-control"
                                    name="host_pwd"
                                    placeholder="Enter Password"
                                    value={this.state.host_pwd}
                                    onChange={this.onChange}
                                />
                            </div>
                            <p className="text-right sunshine fw-bold">
                                歡迎加入Go Camping這個大家庭！
                            </p>
                            <button type="submit"
                                className="btn btn-outline-grass btn-block">
                                註冊
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
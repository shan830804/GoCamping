import React, { Component } from 'react'
import { login } from './HostFunctions'
import "./Default.css"
import "./HostLogin.css"

class Login extends Component {
  constructor() {
    super()
    this.state = {
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
      host_acc: this.state.host_acc,
      host_pwd: this.state.host_pwd
    }

    login(host).then(res => {
      if (res) {
        alert('登入成功，畫面跳轉至歡迎頁！')
        this.props.history.push(`/host/profile`)
      } else {
        alert('帳號或密碼錯誤，請重新輸入！')
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5 mt-5 mx-auto px-5 py-4 bg-white">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 fw-bold grass text-center">營地主登入</h1>
              <div className="form-group">
                <label htmlFor="host_acc" className="fw-bold">帳戶</label>
                <input type="text"
                  className="form-control"
                  name="host_acc"
                  placeholder="Enter Acccount"
                  value={this.state.host_acc}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="host_pwd" className="fw-bold">密碼</label>
                <input type="password"
                  className="form-control"
                  name="host_pwd"
                  placeholder="Enter Password"
                  value={this.state.host_pwd}
                  onChange={this.onChange}
                />
              </div>
              <p className="text-right sunshine fw-bold">
                忘記密碼？請儘速與我們聯繫！
              </p>
              <button type="submit"
                className="btn btn-outline-grass btn-block">
                登入
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
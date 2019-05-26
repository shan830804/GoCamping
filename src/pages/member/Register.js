import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import moment from 'moment'

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            submitted: false,
            mem_account: '',
            mem_email: '',
            mem_password: '',
            password_check: '',
        }
    }

    onInputChange = (event) => {
        const { target } = event; // 抓到該<input>標籤，與const target = event.target相同
        // console.log(`target - ${target}, type[${target.type}], id[${target.id}], name[${target.name}], value[${target.value}]`);
        // target的使用方法，東西都是從該<input>標籤來的

        switch (target.name) { // 接受打字中
            case 'mem_account':
            case 'mem_password':
            case 'mem_email':
            case 'password_check':
                this.setState({ [target.name]: target.value })
                break;
            default:
                console.log(`Accept Unhandleable Type[${target.type}]`);
        }
    }

    onRegisterPageSubmit = async (event) => {
        event.preventDefault(); // 避免標籤元素預設的行為或功能(ex <input type="submit">就會送出，可是可能其他input有誤所以要alert)

        const jsonID = new Date().getTime(); // 因為json-server如果想要post東西出去，必須要有一個id值

        const signUpDate = moment().format('YYYY-MM-DD hh:mm:ss');

        if (this.state.mem_password === this.state.password_check) {
            await fetch('http://localhost:5555/members', {
                method: 'POST',
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }),
                body: JSON.stringify({
                    "id": jsonID,
                    "mem_account": this.state.mem_account,
                    "mem_password": this.state.mem_password,
                    "mem_email": this.state.mem_email,
                    "mem_avatar": "avatar_pictures/_default.jpg",
                    "mem_name": '',
                    "mem_nickname": '',
                    "mem_gender": '',
                    "mem_birthday": '',
                    "mem_mobile": '',
                    "mem_address": '',
                    "memLevel_id": "露營新手",
                    "mem_status": "valid",
                    "mem_intro": '',
                    "mem_signUpDate": signUpDate
                })
            })

            await localStorage.setItem("mem_id", jsonID);
            await localStorage.setItem("mem_account", this.state.mem_account);
            await localStorage.setItem("mem_password", this.state.mem_password);
            await localStorage.setItem("mem_email", this.state.mem_email);
            await localStorage.setItem("mem_avatar", "avatar_pictures/_default.jpg");
            await localStorage.setItem("memLevel_id", "露營新手");
            await this.setState({ submitted: true })
        } else {
            alert('與上列密碼不符')
        }
    }

    renderRegisterForm = () => {
        return (
            <div className="container-fluid login_cover d-flex align-items-center justify-content-center">
                <main className="">
                    <div className="card">
                        <div className="card-body py-4">
                            <form name="formInsert" method="POST" onSubmit={this.onRegisterPageSubmit}>
                                <h5 className="card-title text-center grass fs-24 mb-3">註冊個人帳號</h5>
                                <div className="form-group row d-flex align-items-center border rounded p-1">
                                    <div className="mx-2">
                                        <i className="fas fa-user-alt"></i>
                                    </div>
                                    <input type="text" id="mem_account" name="mem_account" className="flex-grow-1 border-0" placeholder="帳號名稱" onChange={this.onInputChange} required />
                                </div>
                                <div className="form-group row d-flex align-items-center border rounded p-1">
                                    <div className="mx-2">
                                        <i className="far fa-envelope"></i>
                                    </div>
                                    <input type="email" id="mem_email" name="mem_email" className="flex-grow-1 border-0" placeholder="帳號名稱" onChange={this.onInputChange} required />
                                </div>
                                <div className="form-group row d-flex align-items-center border rounded p-1">
                                    <div className="mx-2">
                                        <i className="fas fa-lock"></i>
                                    </div>
                                    <input type="password" id="mem_password" name="mem_password" className="flex-grow-1 border-0" placeholder="密碼" onChange={this.onInputChange} required />
                                </div>
                                <div className="form-group row d-flex align-items-center border rounded p-1">
                                    <div className="mx-2">
                                        <i className="fas fa-lock"></i>
                                    </div>
                                    <input type="password" id="password_check" name="password_check" className="flex-grow-1 border-0" placeholder="確認密碼" onChange={this.onInputChange} />
                                </div>
                                <div className="row mb-3">
                                    <small>點擊加入會員即代表您已閱讀並同意GO CAMPING的<span className="ground">會員服務條款</span>與<span className="ground">隱私權政策</span></small>
                                </div>
                                <div className="row">
                                    <button type="submit" className="btn btn-grass col-12 fs-20 mb-3" href="/Member">加入會員</button>
                                </div>
                                <p className="text-center mb-3">
                                    已經有帳號了?&nbsp;
                                    <Link className="ground register" to="/Member">馬上登入</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        )
    }

    renderMemberCenter = () => {
        return (
            <Redirect to="/Member" />
        )
    }

    render() {
        return (
            <>
                {this.state.submitted ? (this.renderMemberCenter()) : (this.renderRegisterForm())}
            </>
        )
    }
}

export default Register
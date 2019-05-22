import React from 'react'
import { Link } from 'react-router-dom'

class RegisterPage extends React.Component {
    constructor() {
        super()
        this.state = {
            submitted: false,
            submitData: {},
            mem_account: '',
            mem_email: '',
            mem_password: '',
        }
    }

    onInputChange = (event) => {
        const { target } = event; // 抓到該<input>標籤，與const target = event.target相同
        // console.log(`target - ${target}, type[${target.type}], id[${target.id}], name[${target.name}], value[${target.value}]`);
        // target的使用方法，東西都是從該<input>標籤來的

        switch (target.type) { // 接受打字中
            case 'text':
                this.setState({ mem_account: target.value })
                break;
            case 'password':
                this.setState({ mem_password: target.value })
                break;
            case 'email':
                this.setState({ mem_email: target.value }); // 讓State對應的key放入input的name和值(ex account: test)
                break;
            default:
                console.log(`Accept Unhandleable Type[${target.type}]`);
        }
    }

    onRegisterPageSubmit = (event) => {
        event.preventDefault(); // 避免標籤元素預設的行為或功能(ex <input type="submit">就會送出，可是可能其他input有誤所以要alert)
        
        this.setState({ submitted: true }); // renderMemberCenter()

        fetch('http://localhost:5555/members', {
            method: 'POST',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({ "id": 345, "mem_account": this.state.mem_account, "mem_password": this.state.mem_password, "mem_email": this.state.mem_email })
            // body: JSON.stringify({ "members": this.state.submitData })
            })
        
    }

    render() {
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
                                <div className="row mb-3">
                                    <small>點擊加入會員即代表您已閱讀並同意GO CAMPING的<span className="ground">會員服務條款</span>與<span className="ground">隱私權政策</span></small>
                                </div>
                                <div className="row">
                                    <button type="submit" className="btn btn-grass col-12 fs-20 mb-3">加入會員</button>
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
}

export default RegisterPage
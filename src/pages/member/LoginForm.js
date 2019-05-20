import React from 'react';
import MemberCenter from './MemberCenter'

class LoginForm extends React.Component {
    constructor() {
        super()
        this.state = {
            logined: false, // 預設尚未登入
            username: '',
            password: ''
        }
    }

    // 輸入帳號密碼時的EventListener
    onInputChange = (event) => {
        const { target } = event; // const target = event.target

        if (null == target) {
            console.log("Got Unknown Target!!!");
            return;
        }

        // target的東西都是抓到該<input>標籤的
        console.log(`輸入中：target - ${target}, type[${target.type}], id[${target.id}], name[${target.name}], value[${target.value}]`);

        switch (target.type) {
            case 'text':
            case 'password':
                // console.log("Accept Text");
                this.setState({ [target.name]: target.value }); // 讓State對應的key放入input的值
                break;
            default:
                console.log(`Accept Unhandleable Type[${target.type}]`);
        }
    }

    // 送出登入表單的EventListener
    onLoginFormSubmit = (event) => {
        event.preventDefault();
        console.log(`Input data - username[${this.state.username}], password[${this.state.password}]`);

        this.setState({ logined: true });
    }

    // 按下登出按鈕的EventListener
    // onLogoutFormSubmit = (event) => {
    //     event.preventDefault();
    //     alert('Do Logout!');

    //     this.setState({ logined: false });
    // }

    // 要呈現的「登入表單」畫面
    renderLoginForm = () => {
        return (
            <div className="container-fluid login_cover d-flex align-items-center justify-content-center">
                <main className="">
                    <div className="card">
                        <div className="card-body py-4">
                            <h5 className="card-title text-center grass fs-24 mb-4">會員登入</h5>
                            <form onSubmit={this.onLoginFormSubmit}>
                                <div className="form-group row d-flex align-items-center border rounded p-1">
                                    <div className="mx-2">
                                        <i className="far fa-envelope"></i>
                                    </div>
                                    <input type="text" id="username" name="username" className="flex-grow-1 border-0" placeholder="帳號名稱" onChange={this.onInputChange} />
                                </div>
                                <div className="form-group row d-flex align-items-center border rounded p-1">
                                    <div className="mx-2">
                                        <i className="fas fa-lock"></i>
                                    </div>
                                    <input type="password" id="password" name="password" className="flex-grow-1 border-0" placeholder="密碼" onChange={this.onInputChange} />
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">記住我的帳號</label>
                                    </div>
                                    <span>忘記密碼?</span>
                                </div>
                                <div className="row">
                                    <button type="submit" className="btn btn-grass col-12 fs-20">登入</button>
                                </div>
                                <p className="text-center my-3">還不是會員嗎? <span className="ground">立即免費註冊</span></p>
                                <hr />
                                <p className="text-center mb-0 camp_boss">營地主登入</p>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    // 登出表單
    // renderLogoutForm = () => {
    //     return (
    //         <form onSubmit={this.onLogoutFormSubmit}>
    //             <button type="submit" className="btn btn-grass col-12 fs-20">登出</button>
    //         </form>
    //     );
    // }

    // 登入後畫面
    renderMemberCenter = () => {
        return (
            <MemberCenter />
        );
    }

    // 預設尚未登入要呈現「登入表單」，已登入則進入會員中心
    render() {
        return (
            <div>
                {/* {this.state.logined ? (this.renderLogoutForm()) : (this.renderLoginForm())} */}
                {this.state.logined ? (this.renderMemberCenter()) : (this.renderLoginForm())}
            </div>
        );
    }
}

export default LoginForm
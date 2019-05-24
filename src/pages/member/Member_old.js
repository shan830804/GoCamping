import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// 前往頁面
import LoginPage from './LoginPage';
import MemberCenter from './MemberCenter';
import RegisterPage from './RegisterPage';
// CSS
import '../../components/Default.css';
import './Member.css';

// Route exact 代表exact=true，要求路徑與location.pathname必須完全匹配

class Member extends React.Component {
    constructor() {
        super()
        this.state = {
            logined: false,
            memberData: [],
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:5555/members', {
                method: 'GET',
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }),
            })

            if (!response.ok) throw new Error(response.statusText)

            const jsonObject = await response.json()

            // console.log(jsonObject) // 會員清單全部抓出來
            await this.setState({ memberData: jsonObject })

            const localStorageAccount = await localStorage.getItem("account");
            const localStoragePassword = await localStorage.getItem("password");
            const findMemberAccount = await this.state.memberData.find((data) => data.mem_account === localStorageAccount);
            const findMemberPassword = await this.state.memberData.find((data) => data.mem_password === localStoragePassword);

            if (findMemberAccount && findMemberPassword) {
                let pickMember = await this.state.memberData.filter((data) => data.mem_account === localStorageAccount);
                await this.setState({ memberData: pickMember, logined: true }); // renderMemberCenter()
            } else {
                // TODO: 顯示錯誤訊息(帳號或密碼錯誤)(查無此帳號，前往註冊頁?)
            }
        } catch (e) {
            console.log(e)
        }
    }
    // componentWillUnmount() {
    //     // 在componentWillUnmount中撤銷非同步請求
    // }

    renderMemberCenter = () => {
        return (
            <Router>
                {/* <Route exact path="/Member/MemberCenter" component={MemberCenter} /> */}
                <Route path="/Member"
                    render={(props) => <MemberCenter {...props} data={this.state.memberData} />}
                />
            </Router>
        )
    }

    renderLoginPage = () => {
        return (
            <Router>
                <Route path="/Member" component={LoginPage} />
                <Route exact path="/Register" component={RegisterPage} />
            </Router>
        )
    }

    render() {
        return (
            <div>
                {/* 登入沒 ? 有(會員中心頁) : 沒([預設]登入頁) */}
                {this.state.logined ? (this.renderMemberCenter()) : (this.renderLoginPage())}
            </div>
        )
    }
}

export default Member;
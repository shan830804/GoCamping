import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// 前往頁面
import LoginPage from './LoginPage';
import MemberCenter from './MemberCenter';
import RegisterPage from './RegisterPage';
// CSS
import '../../components/Default.css';
import './Member.css';


// 類別型元件，通常用在父元件身上，帶有狀態(state)；函式型元件，通常用於子元件，帶有屬性(props)
// 通常父元件不會拿來寫程式，而是引入元件(components)，也就是越上層的元件，盡量程式碼要少(能拆就拆出去)，留下排版就好，否則加上Router會太長
// 生命週期方法通常使用於類別型元件
// 畫面有改變就一定要狀態(state)有改變
// constructor是初始化用的，setState是非同步的，如果想要同步寫非同步的東西要用async await

// React Bootstrap是因為React沒有id無法做DOM處理，所以必須另外引入套件
// 如果只是需要基本的Bootstrap CSS，可以直接用官網的元件並將class改為className，比較不干擾其他套件

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

            const localStorageAccount = localStorage.getItem("account");
            const localStoragePassword = localStorage.getItem("password");
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
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
// 各種切割頁面
import Bread from '../../components/MemberBread';
import Profile from '../../components/MemberProfile';
import Aside from '../../components/MemberAside';
import Notification from '../../components/MemberNotification';
import InfoEditor from '../../components/MemberInfoEditor';
import CampingOrder from '../../components/MemberCampingOrder';
// CSS
import '../../components/Default.css';
import './Member.css';

// 類別型元件，通常用在父元件身上，帶有狀態(state)；函式型元件，通常用於子元件，帶有屬性(props)
// 通常父元件不會拿來寫程式，而是引入元件(components)，也就是越上層的元件，盡量程式碼要少(能拆就拆出去)，留下排版就好，否則加上Router會太長
// 生命週期方法通常使用於類別型元件
// 畫面有改變就一定要狀態(state)有改變
// constructor是初始化用的，setState是非同步的，如果想要同步寫非同步的東西要用async await
// Provider是最上層元件，做穿透用 (ex. icon要統一顏色)

// React Bootstrap是因為React沒有id無法做DOM處理，所以必須另外引入套件
// 如果只是需要基本的Bootstrap CSS，可以直接用官網的元件並將class改為className，比較不干擾其他套件

// Route exact 代表exact=true，要求路徑與location.pathname必須完全匹配

class Member extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <section className="my-2">
                        <Bread />
                        <Profile />
                        <div className="row">
                            <Aside />
                            <Route exact path="/Member" component={Notification} />
                            <Route path="/Member/MyInfoEditor" component={InfoEditor} />
                            <Route path="/Member/MyOrderManager" component={CampingOrder} />
                            <Route path="/Member/MyCampingOrder" component={CampingOrder} />
                        </div>
                    </section>
                </div>
            </Router>
        )
    }
}

export default Member;
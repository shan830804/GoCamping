import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Index from './pages/index/Index';
import CampSide from './pages/campSide/Camp';
import CampDetails from './pages/campSide/CampDetails';
import CampOrderP1 from './pages/campSide/CampOrderP1';
import EventInfo from './pages/event/EventInfo';
import EventApply from './pages/event/EventApply';
// import EventTest from './pages/event/EventTest';
import Event from './pages/event/Event';
import Marketing from './pages/marketing/Marketing';
import Food from './pages/food/Food';
import FoodDetails from './pages/food/FoodDetails';
import FoodOrderP1 from './pages/food/FoodOrderP1';
import ShareFun from './pages/sharefun/ShareFun';
import Article from './pages/sharefun/Article'
import Rookie from './pages/sharefun/Rookie'
import Hottest from './pages/sharefun/Hottest'
import Latest from './pages/sharefun/Latest'
import Category from './pages/sharefun/Category'
import Natural from './pages/sharefun/Natural'
import ShareProfile from './pages/sharefun/ShareProfile'
import Member from './pages/member/Member';
import Login from './pages/member/Login'
import Register from './pages/member/Register'
import Logout from './pages/member/Logout'
import MemberServiceTerms from './components/MemberServiceTerms'
import PrivacyPolicy from './components/MemberPrivacyPolicy'
import Faq from './components/Faq'
import CouponList from './pages/marketing/CouponList'
import PromoUserList from './pages/marketing/PromoUserList'
import PromoCamptypeList from './pages/marketing/PromoCamptypeList'
import PromoPriceList from './pages/marketing/PromoPriceList'
// =============== 營地主開始 ===============
import HostHeader from '../src/components/HostHeader'
import HostIndex from '../src/components/HostIndex'
import HostLogin from '../src/components/HostLogin'
import HostRegister from '../src/components/HostRegister'
import HostFooter from '../src/components/HostFooter'
// Profile
import HostProfile from '../src/components/HostProfile'
// 日曆管理
import HostCalendar from './pages/host/calendar';
import calendarDay from './pages/host/calendarDay';
import calendarDetail01 from './pages/host/calendarDetail01';
import calendarDetail02 from './pages/host/calendarDetail02';
import calendarDetail03 from './pages/host/calendarDetail03';
// 營地管理
import HostCampsite from './pages/host/campsite';
import campsiteAddCamp from './pages/host/campsiteAddCamp';
import campsiteAddArea from './pages/host/campsiteAddArea';
import campsiteInfo from './pages/host/campsiteInfo';
// 收益管理
import HostIncome from './pages/host/income';
import incomeDay from './pages/host/incomeDay';
// 管理中心
import HostAccount from './pages/host/account';
import accountEdit from './pages/host/accountEdit';
import accountEditPwd from './pages/host/accountEditPwd';
// 背景圖片
import './pages/host/hostBg.css'
import HostBackground from './pages/host/hostBg.css'
// =============== 營地主結束 ===============
import './App.css';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: false,
      isntAuthenticated: false,
      host: false,
    }
  }

  toggleLogin = () => {
    this.setState({ isAuthenticated: true })
    this.setState({ isntAuthenticated: false })
    // console.log('toggleLogin:' + this.state.isAuthenticated)
  }

  toggleLogout = () => {
    this.setState({ isAuthenticated: false })
    this.setState({ isntAuthenticated: true })
    // console.log('toggleLogout:' + this.state.isntAuthenticated)
  }

  toggleHost = () => {
    this.setState({ host: true })
  }

  render() {
    return (
      <Router>
        <>
          {this.state.host ? (<HostHeader />) : (
            <>
              <Header isAuthenticated={this.state.isAuthenticated} isntAuthenticated={this.state.isntAuthenticated} />
              <div style={{ height: "60px" }}></div>
            </>
          )}
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Index} />

              <Route path="/CampSide" component={CampSide} />
              <Route path="/Camp/CampDetails/CampOrderP1/:id" component={CampOrderP1} />
              <Route path="/Camp/CampDetails/:id" component={CampDetails} />

              <Route exact path="/Event" component={Event} />
              <Route exact path="/Event/EventInfo/:event_id" component={EventInfo} />
              <Route exact path="/Event/EventApply/:event_id" component={EventApply} />

              <Route path="/Marketing" component={Marketing} />

              <Route path="/Food/FoodDetails/FoodOrderP1/:id" component={FoodOrderP1} />
              <Route path="/Food/FoodDetails/:id" component={FoodDetails} />
              <Route path="/Food" component={Food} />

              <Route exact path="/ShareFun" component={ShareFun} />
              <Route path="/ShareFun/post/:post_id" component={Article} />
              <Route path="/ShareFun/beginnersguide" component={Rookie} />
              <Route path="/ShareFun/hottest" component={Hottest} />
              <Route path="/ShareFun/latest" component={Latest} />
              <Route path="/ShareFun/natural" component={Natural} />
              <Route path="/ShareFun/category" component={Category} />
              <Route path="/ShareFun/share-profile/:mem_id" component={ShareProfile} />

              <Route path="/Member" component={Member} />
              <Route path="/MemberServiceTerms" component={MemberServiceTerms} />
              <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
              <Route path="/Login" render={(props) => <Login toggleLogin={this.toggleLogin} toggleHost={this.toggleHost} {...props} />} />
              <Route path="/Register" render={(props) => <Register toggleLogin={this.toggleLogin} {...props} />} />
              <Route path="/Logout" render={(props) => <Logout toggleLogout={this.toggleLogout} {...props} />} />
              <Route path="/FAQ" component={Faq} />

              <Route path="/PromoUserList" component={PromoUserList} />
              <Route path="/PromoCamptypeList" component={PromoCamptypeList} />
              <Route path="/PromoPriceList" component={PromoPriceList} />
              <Route path="/CouponList" component={CouponList} />
              {/* =============== 營地主 =============== */}
              <Route exact path="/host" component={HostIndex} />
              <div className="container">
                <Route exact path="/host/register" component={HostRegister} />
                <Route exact path="/host/login" component={HostLogin} />
                <Route exact path="/host/profile" component={HostProfile} />
                {/* 日曆管理 */}
                {/* <Route exact path="/host/calendar" component={HostCalendar} /> */}
                <Route exact path="/host/calendar" component={() => <HostCalendar host={this.state.host} />} />
                <Route path="/host/calendarDay" component={calendarDay} />
                <Route path="/host/calendarDetail/01" component={calendarDetail01} />
                <Route path="/host/calendarDetail/02" component={calendarDetail02} />
                <Route path="/host/calendarDetail/03" component={calendarDetail03} />
                {/* 營地管理 */}
                <Route path="/host/campsite" component={HostCampsite} />
                <Route path="/host/campsiteAddCamp" component={campsiteAddCamp} />
                <Route path="/host/campsiteAddArea" component={campsiteAddArea} />
                <Route path="/host/campsiteInfo" component={campsiteInfo} />
                {/* 收益管理 */}
                {/* <Route path="/host/income" component={HostIncome} /> */}
                <Route exact path="/host/income" component={() => <HostIncome host={this.state.host} />} />
                <Route path="/host/incomeDay" component={incomeDay} />
                {/* 管理中心 */}
                <Route path="/host/account" component={HostAccount} />
                <Route path="/host/accountEdit" component={accountEdit} />
                <Route path="/host/accountEditPwd" component={accountEditPwd} />
              </div>
            </Switch>
          </ScrollToTop>
          {this.state.host ? (<HostFooter />) : (
            <Footer />
          )}
        </>
      </Router>
    )
  }
}
export default App;

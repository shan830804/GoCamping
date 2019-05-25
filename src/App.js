import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import Index from './pages/index/Index';
import CampSide from './pages/campSide/CampSide';
import Event from './pages/event/Event';
import Marketing from './pages/marketing/Marketing';
import Food from './pages/food/Food';
import ShareFun from './pages/sharefun/ShareFun';
import Member from './pages/member/Member';
import Login from './pages/member/Login'
import Register from './pages/member/Register'
import Logout from './pages/member/Logout'

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: false, // 登入狀態
      // loginedMemberData: [], // 登入的會員資料
    }
  }

  toggleLogin = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated })
    console.log('toggleLogin:' + this.state.isAuthenticated)
  }

  // catchMemberData = (memberData) => {
  //     this.setState({ loginedMemberData: memberData })
      
  //     console.log('App抓到會員資料中的帳號: ' + this.state.loginedMemberData.mem_account)
  // }

  render() {
    return (
      <Router>
        <>
          <Header />

          <Switch>
            {/* <Route exact path="/" component={Index} /> */}
            <Route exact path="/" render={(props) => <Index linkLocation={this.state.linkFrom} {...props} />} />
            <Route exact path="/CampSide" component={CampSide} />
            <Route path="/Event" component={Event} />
            <Route path="/Marketing" component={Marketing} />
            <Route path="/Food" component={Food} />
            <Route path="/ShareFun" component={ShareFun} />
            <Route path="/Member" component={Member} />
            {/* <Route path="/Login" render={(props) => <Login toggleLogin={this.toggleLogin} catchMemberData={this.catchMemberData} {...props} />} /> */}
            <Route path="/Login" render={(props) => <Login toggleLogin={this.toggleLogin} {...props} />} />
            <Route path="/Register" component={Register} />
            <Route path="/Logout" component={Logout} />
          </Switch>

          <Footer />
        </>
      </Router>
    )
  }
}

export default App;

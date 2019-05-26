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
      isAuthenticated: false,
      isntAuthenticated: false,
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

  render() {
    return (
      <Router>
        <>
          <Header isAuthenticated={this.state.isAuthenticated} isntAuthenticated={this.state.isntAuthenticated}  />

          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/CampSide" component={CampSide} />
            <Route path="/Event" component={Event} />
            <Route path="/Marketing" component={Marketing} />
            <Route path="/Food" component={Food} />
            <Route path="/ShareFun" component={ShareFun} />
            <Route path="/Member" component={Member} />
            <Route path="/Login" render={(props) => <Login toggleLogin={this.toggleLogin} {...props} />} />
            <Route path="/Register" render={(props) => <Register toggleLogin={this.toggleLogin} {...props} />} />
            <Route path="/Logout" render={(props) => <Logout toggleLogout={this.toggleLogout} {...props} />} />
          </Switch>

          <Footer />
        </>
      </Router>
    )
  }
}

export default App;

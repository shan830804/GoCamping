import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { FaUserAlt, FaSearch } from "react-icons/fa";
import './Default.css'
import './HostHeader.css'
import logo from '../logo.svg'

class HostHeader extends Component {
    constructor(props) {
        super(props)
        this.selectHostProfile = this.selectHostProfile.bind(this);
        this.selectHostCalendar = this.selectHostCalendar.bind(this);
        this.selectHostCampsite = this.selectHostCampsite.bind(this);
        this.selectHostIncome = this.selectHostIncome.bind(this);
        this.selectHostAccount = this.selectHostAccount.bind(this);
        this.state = {
            HostProfile: '',
            HostCalendar: '',
            HostCampsite: '',
            HostIncome: '',
            HostAccount: '',
        }
    }

    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('hosttoken')
        this.props.history.push(`/host`)
    }

    selectHostProfile(event) {
        this.setState({
            HostProfile: 'showLine',
            HostCalendar: '',
            HostCampsite: '',
            HostIncome: '',
            HostAccount: ''
        })
    }
    selectHostCalendar(event) {
        this.setState({
            HostProfile: '',
            HostCalendar: 'showLine',
            HostCampsite: '',
            HostIncome: '',
            HostAccount: ''
        })
    }
    selectHostCampsite(event) {
        this.setState({
            HostProfile: '',
            HostCalendar: '',
            HostCampsite: 'showLine',
            HostIncome: '',
            HostAccount: ''
        })
    }
    selectHostIncome(event) {
        this.setState({
            HostProfile: '',
            HostCalendar: '',
            HostCampsite: '',
            HostIncome: 'showLine',
            HostAccount: ''
        })
    }
    selectHostAccount(event) {
        this.setState({
            HostProfile: '',
            HostCalendar: '',
            HostCampsite: '',
            HostIncome: '',
            HostAccount: 'showLine'
        })
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/host/login" className="nav-link btn-outline-grass px-3">
                        <i className="fas fa-user"></i> 登入
                    </Link>
                </li>
                {/* <li className="nav-item ml-3">
                    <Link to="/host/register" className="nav-link btn-outline-grass px-3">
                        <i className="fas fa-registered"></i> 註冊
                    </Link>
                </li> */}
            </ul>
        )
        const hostLink = (
            <ul className="navbar-nav">
                {/* <li className={"nav-item position-relative " + this.state.HostProfile}>
                    <Link to="/host/profile" className="nav-link main_color px-3" onClick={this.selectHostProfile}>
                        Profile
                    </Link>
                </li> */}
                <li className={"nav-item position-relative " + this.state.HostCalendar}>
                    <Link to="/host/calendar" className="nav-link main_color px-3" onClick={this.selectHostCalendar}>
                        日曆管理
                    </Link>
                </li>
                <li className={"nav-item position-relative " + this.state.HostCampsite}>
                    <Link to="/host/campsite" className="nav-link main_color px-3" onClick={this.selectHostCampsite}>
                        營地管理
                    </Link>
                </li>
                <li className={"nav-item position-relative " + this.state.HostIncome}>
                    <Link to="/host/income" className="nav-link main_color px-3" onClick={this.selectHostIncome}>
                        收益管理
                    </Link>
                </li>
                <li className={"nav-item position-relative " + this.state.HostAccount}>
                    <Link to="/host/account" className="nav-link main_color px-3" onClick={this.selectHostAccount}>
                        管理中心
                    </Link>
                </li>
                <li className="nav-item pl-4">
                    <Link onClick={this.logOut.bind(this)} className="nav-link btn-outline-watermelon px-3">
                        <i className="fas fa-sign-out-alt"></i> 登出
                    </Link>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg bg-white rounded sticky-top">
                <div className="container">
                    {/* RWD */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/host" className="navbar-brand logo_box">
                                <img src={logo} alt="" />
                            </Link>
                        </li>
                    </ul>
                    <button className="navbar-toggler border"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbar1"
                        aria-controls="navbar1"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        {/* <span className="navbar-toggle-icon"></span> */}
                        <span><i className="fas fa-bars gray"></i></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbar1">
                        {/* <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/host" className="navbar-brand logo_box">
                                <img src={logo} alt="" />
                            </Link>
                        </li>
                    </ul> */}
                        {localStorage.hosttoken ? hostLink : loginRegLink}
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(HostHeader)
import React from 'react';
import Profile from '../../components/MemberProfile';
import Aside from '../../components/MemberAside';
import Notification from '../../components/MemberNotification';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import '../../components/default.css';
import './Member.css';

class Member extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <section className="my-2">

                        <div className="row">
                            <nav className="col-12 p-0">
                                <ul className="breadcrumb m-0">
                                    {/* a要改成link to */}
                                    <li className="breadcrumb-item"><i className="fas fa-home"></i></li>
                                    <li className="breadcrumb-item">會員</li>
                                    <li className="breadcrumb-item active">個人頁面</li>
                                </ul>
                            </nav>
                        </div>

                        <Profile />

                        <div className="row">
                            <Aside />
                            <Notification />
                        </div>

                    </section>
                </div>
            </Router>
        )
    }
}

export default Member;
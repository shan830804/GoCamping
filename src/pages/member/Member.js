import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// 切割頁面
import Bread from '../../components/MemberBread';
import Profile from '../../components/MemberProfile';
import Aside from '../../components/MemberAside';
import Notification from '../../components/MemberNotification';
import InfoEditor from '../../components/MemberInfoEditor';
import CampingOrder from '../../components/MemberCampingOrder';
import FoodOrder from '../../components/MemberFoodOrder';
import EventOrder from '../../components/MemberEventOrder';
import Coupon from '../../components/MemberCoupon';
import PostEditor from '../../components/MemberPostEditor';
import Level from '../../components/MemberLevel';
// CSS
import '../../components/Default.css'
import './Member.css'

class Member extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


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
                            <Route exact path="/Member/MyInfoEditor" render={(props) => (<InfoEditor data={this.state.memberData} {...props} />)} />
                            <Route exact path="/Member/MyOrderManager" component={CampingOrder} />
                            <Route exact path="/Member/MyCampingOrder" component={CampingOrder} />
                            <Route exact path="/Member/MyFoodOrder" component={FoodOrder} />
                            <Route exact path="/Member/MyEventOrder" component={EventOrder} />
                            <Route exact path="/Member/MyCoupon" component={Coupon} />
                            <Route exact path="/Member/MyPostEditor" component={PostEditor} />
                            <Route exact path="/Member/MemberLevel" component={Level} />
                        </div>
                    </section>
                </div>
            </Router>
        )
    }
}

export default Member
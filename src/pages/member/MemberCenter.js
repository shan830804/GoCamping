import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// 各種切割頁面
import Bread from '../../components/MemberBread';
import Profile from '../../components/MemberProfile';
import Aside from '../../components/MemberAside';
import Notification from '../../components/MemberNotification';
import InfoEditor from '../../components/MemberInfoEditor';
import CampingOrder from '../../components/MemberCampingOrder';
import FoodOrder from '../../components/MemberFoodOrder';
import EventOrder from '../../components/MemberEventOrder';
import Coupon from '../../components/MemberCoupon';
import Level from '../../components/MemberLevel';

class MemberCenter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            memberData: props.data,
        }
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <section className="my-2">
                        <Bread />
                        <Profile data={this.state.memberData} />
                        <div className="row">
                            <Aside />
                            <Route exact path="/Member" component={Notification} />
                            <Route exact path="/Member/MyInfoEditor" render={(props)=><InfoEditor {...props} data={this.state.memberData} />} />
                            <Route exact path="/Member/MyOrderManager" component={CampingOrder} />
                            <Route exact path="/Member/MyCampingOrder" component={CampingOrder} />
                            <Route exact path="/Member/MyFoodOrder" component={FoodOrder} />
                            <Route exact path="/Member/MyEventOrder" component={EventOrder} />
                            <Route exact path="/Member/MyCoupon" component={Coupon} />
                            <Route exact path="/Member/MemberLevel" component={Level} />
                        </div>
                    </section>
                </div>
            </Router>
        )
    }
}

export default MemberCenter
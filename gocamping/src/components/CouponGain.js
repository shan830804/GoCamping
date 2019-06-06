import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch,Link,Redirect,withRouter } from 'react-router-dom'
import { Nav, Tab, Card, Button } from 'react-bootstrap';

import './Coupon.css'


class CouponGain extends Component {
  constructor(props) {
    super(props)

    this.state = {
      disabled: false,
    }
  }

  // componentDidUpdate(oldProps) {
  //   const newProps = this.props
  //   if(oldProps.field !== newProps.field) {
  //     this.setState({})
  //   }
  // }
  toDateString=()=>{
    let d = new Date(this.props.record.coupon_expire+'').toLocaleDateString().split('/')
    console.log(d)
    let s = d[0]+"年"+d[1]+"月"+d[2]+"日"
    return s
  }
  

  render() {
    return (
      
      <div className=" flex-column d-flex flex-md-row mt-3">
        <>
          <div className="coupon mb-2">
            <div className="coupon_img_wrap  ">
              <img
                src={
                  this.props.record
                    ? '/campImg/' + this.props.record.camp_img
                    : ''
                }
                alt=""
              />
            </div>
            <div className="coupon_info  ">
              <div className="coupon_info_main">
                <ul className="d-flex">
                  <li className="fw-bold fs-24">
                    {this.props.record
                      ? this.props.record.coupon_name
                      : ''}
                  </li>
                  <li className="fs-20">
                    <i className="far fa-clock" />
                    {this.props.record
                      ?"適用日期: "+ this.toDateString()+"前"
                      : ''}
                  </li>
                  <li className="fw-bold fs-24">
                    {this.props.record
                      ? this.props.record.camp_name
                      : ''}
                  </li>
                  <li className="fs-20">
                    {this.props.record
                      ? this.props.record.discription
                      : ''}
                  </li>
                  <li className="campsite_link">
                    {/* <span className="fs-20 fw-medium" onClick={()=>this.props.history.push("/Camp/CampDetails/" + this.props.record.camp_id)}>
                      前往相關營地
                    </span> */}
                    <Button className="fs-20 fw-medium" href={"/Camp/CampDetails/" + this.props.record.camp_id}>
                      &gt;&gt;&gt;前往相關營地
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="coupon_info_sec">
                <span className={this.props.disabled?"discount_disabled":"discount"}>
                {
                  this.props.record
                      ? this.props.record.discount_unit
                      : ''
                      }
                      {
                        this.props.record
                      ? this.props.record.discount_type=='percentage'?"折":"元"
                      : ''
                      }
                </span>
                <div className="coupon_code">
                      {this.props.record?this.props.record.coupon_code:''}
                </div>
              </div>
            </div>
          </div>
        </>
      </div>

      // console.log(this.props.coupon_data)
    )
  }
}

export default withRouter(CouponGain)

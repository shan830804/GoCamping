import React from 'react';
import { BrowserRouter as Router, Route, Switch,Link,Redirect } from 'react-router-dom'
import Coupon from './Coupon'
import './CouponListModal.css';

const CouponListModal = (props) => {
    // console.log(props)
    return (
        <div>
            <div className="couponListModal-wrapper"
                style={{
                    transform: props.show_modal ? 'translate(-50% ,-50%)' : 'translate(-50%, -100vh)',
                    top:'50%',
                    left:'50%',
                    opacity: props.show_modal ? '1' : '0'
                }}>
                <span className="close-modal-btn" onClick={props.close}>×</span>
               {
                
                 props.coupon_avaliable.length>0?props.coupon_avaliable.map(coupon=>{
                   console.log(coupon)
                   return <Coupon handleClick={()=>props.handleObtainCouponClick(coupon)} coupon_data={coupon}/>
                 }):<div className="forest fs-32" style={{textAlign:'center',verticalAlign:'middle'}}>目前無可領取之優惠券</div>
               }
                {/* <div className="modal_content">
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                    <div className="dialogue_content">
                      <div className="dialogue_head">優惠券已領取</div>
                      <div className="dialogue">您的優惠券代碼為</div>
                      <div className="coupon_code">{props.coupon_code_obtained}</div>
                      <div>
                        <span className="btn_stay" onClick={props.close}>留在此頁面</span>
                        <span> or </span>
                        <Link to="/Member" className="btn_go_center">前往會員專區查看</Link>
                      </div>
                    </div>
                </div> */}
                
            </div>
        </div>
    )
}

export default CouponListModal;
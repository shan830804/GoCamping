import React from 'react';
import { BrowserRouter as Router, Route, Switch,Link,Redirect } from 'react-router-dom'
import './CouponModal.css';

const CouponModal = (props) => {
    // console.log(props)
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show_modal ? 'translate(-50% ,-50%)' : 'translate(-50%, -100vh)',
                    top:'50%',
                    left:'50%',
                    opacity: props.show_modal ? '1' : '0'
                }}>
               
                <div className="modal_content">
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
                </div>
                
            </div>
        </div>
    )
}

export default CouponModal;
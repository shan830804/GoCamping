import React from 'react';
import { Link } from 'react-router-dom'
import { FaRegCheckCircle } from "react-icons/fa";

function EventApplyOk(props){
    return(
        <>
        
        <div className={"mar-center my-5 "+ props.display} style={{maxWidth: '600px'}}>
            <h4 className="grass fw-bold text-center"><FaRegCheckCircle /> 報名成功</h4>
            <div className="card px-5 py-3" style={{ boxShadow: '5px 5px 10px #ccc'}}>
                <div className="card-body">
                    <div className="row py-2">
                        <h6 className=" col-5">訂單編號：</h6>
                        <h6 className=" col-7">{props.resJson_apply_id}</h6>
                    </div>
                    <div className="row py-2">
                        <h6 className=" col-5">活動名稱：</h6>
                        <h6 className=" col-7">{props.event_name}</h6>
                    </div>
                    <div className="row py-2">
                        <h6 className=" col-5">訂單金額：</h6>
                        <h6 className=" col-7">NT$ <span className="watermelon fw-bold">{props.total}</span>元</h6>
                    </div>
                    <div className="row py-2">
                        <h6 className=" col-5">付款方式：</h6>
                        <h6 className=" col-7">ATM 轉帳繳費</h6>
                    </div>
                    <div className="row py-2">
                        <h6 className=" col-5">銀行代碼：</h6>
                        <h6 className=" col-7">168(大富翁銀行)</h6>
                    </div>
                    <div className="row py-2">
                        <h6 className="col-5">繳費帳號：</h6>
                        <h6 className="col-7">1234567890987</h6>
                    </div>
                    <div className="row py-2">
                        <h6 className="col-5">繳費截止日期：</h6>
                        <h6 className="col-7"><span className="watermelon fw-bold">2019/06/08 23:59:59</span></h6>
                    </div>
                    <div className="row py-2">
                        <p className="fs-14 col">請於繳費截止日期前完成繳款，<span className="watermelon fw-bold"
                                style={{textDecoration:'underline'}}>逾期未繳費代碼失效，訂單即自動取消</span>。
                            若您仍想參加活動，請您重新報名，
                            並儘量在繳費期限內完成付款，因為訂單一經取消即無法為您保留名額留，
                            屆時活動可能額滿無法報名。</p>
                    </div>
                </div>
            </div>
            <div className="my-5 d-flex justify-content-center" style={{maxWidth: '960px'}}>
                <button className="btn btn-gray mr-3 py-2 transition">
                    <Link to="/Member/MyEventOrder" className="p-3 color_gray transition">查看訂單</Link>
                </button>
                <button className="btn btn-Esunshine transition px-5">
                    <Link to="/Event" className="p-3 color-ccc transition">看更多活動</Link>
                </button>
            </div>
        </div>
        </>
    )
  }
  export default EventApplyOk;
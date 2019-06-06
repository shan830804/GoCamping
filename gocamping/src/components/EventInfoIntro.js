import React from 'react';
// import PathNow from './PathNow'
import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import EventApplyBtn from './EventApplyBtn'

function EventInfoIntro(props){
    let data = props.dataMethod;
    // console.log(data);
    return(
        <>
        {/* <PathNow /> */}
        {data.map(item => (
        <div className="maxWidth mar-center my-5 position-relative" key={item.event_id}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <div className="img_box">
                        <img src={"/eventImg/" + item.event_img} className="card-img img" alt="..." />
                    </div>
                </div>
                <div className="col-md-7 position-relative sep_line">
                    <div className="card-body">
                        <div className="row sep_line position-relative my-md-3 pb-2">
                            <div className="col-md-8">
                                <h4 className="card-title fw-bold">{item.event_name} </h4>
                                <p className="text-secondary ml-4"><small>報名期間：<br />{item.event_applyStart2}   起至  {item.event_applyEnd2} 止(或額滿為止)</small>
                                </p>
                            </div>
                            <div className="col-md-4 text-right">
                                <p>NT<span className="watermelon">$  {item.event_price} </span> /人</p>
                                <EventApplyBtn event_id={item.event_id} apply_uplimit={item.event_upLimit}/>
                            </div>
                        </div>
                        <div className="row position-relative pt-2">
                            <div className="col-md-6">
                                <div className="row wood">
                                    <div className="col-2 text-right" style={{fontSize:'32px'}}><FaRegCalendarAlt /></div>
                                    <p className="col-10">活動日期：<br /> {item.event_dateStart2}  ~  {item.event_dateEnd2}</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div to="" className="row forest">
                                    <div className="col-2 text-right" style={{fontSize:'32px'}}><FaMapMarkerAlt/></div>
                                    <p className="col-10">活動地點：<br /> {item.camp_name} <br /><small> {item.camp_address} </small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5 position-relative">
                <div className="card-body text-center container sep_line" style={{maxWidth:'760px'}}>
                    <h5 className="card-title my-md-5">
                    {item.event_intro} 
                    </h5>
                    <h6 className="card-subtitle my-5 text-muted">
                    {item.event_intro2} 
                    </h6>
                    <p className="card-text my-5">
                    {item.event_intro3} 
                    </p>
                </div>
            </div>
        </div>
        ))}
        </>
    )
  }
  export default EventInfoIntro;
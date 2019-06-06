import React from 'react';
import { FaAngleDoubleDown } from "react-icons/fa";

function EventBanner(){
    return(
        <>
        <div className="banner position-relative text-white d-flex align-items-center justify-content-center flex-column">
            <div className="banner_text text-center">
                <h1 className="fw-bold">快來預約你的露營假期吧！</h1>
                <h5>ー 免新手裝備，說走就走 ー</h5>
            </div>
            <div className="banner_down position-absolute text-center text-white">
                <FaAngleDoubleDown/>
            </div>
        </div>   
        </>
    )
  }
  export default EventBanner;
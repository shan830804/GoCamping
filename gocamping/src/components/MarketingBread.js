import React from "react";
import { BrowserRouter,Router,Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

const MarketingBread = props => (
    <>
    <div className="container">
      <div className="row">
      <>
         <div className="row col-12 f-web">
            <div className="col-12 p-0">
                <ul className="food_bread breadcrumb m-0">
                    <li className="breadcrumb-item"><Link to='/'><i className="fas fa-home"></i></Link></li>
                    <li className="breadcrumb-item active">搶優惠</li>
                </ul>
            </div>
        </div>
       
  
    </>
        </div>
      </div>
    </>
  );

export default MarketingBread;
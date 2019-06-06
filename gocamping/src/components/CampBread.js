import React from "react";
import { BrowserRouter as NavLink } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
/* 麵包屑 */
const CampBread = props => (
    <>
    <div className="">
    <div className="col-12 p-0 f-Breadcrumb">
            <ul className="breadcrumb f-ulBreadcrumb m-0">
                <li className="breadcrumb-item f-liBreadcrumb myBreadcrumb"><i className="fas fa-home"></i></li>
                <li className="breadcrumb-item f-liBreadcrumb active myBreadcrumb">訂營地</li>
            </ul>
        </div>
    </div>
     
    </>
  );

export default CampBread;
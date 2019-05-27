import React from "react";
import { BrowserRouter as NavLink } from "react-router-dom";

/* 麵包屑 */
const FoodBread = props => (
    <>
        <div className="col-12 p-0">
            <ul className="breadcrumb f-ulBreadcrumb m-0">
                <li className="breadcrumb-item f-liBreadcrumb myBreadcrumb"><i className="fas fa-home"></i></li>
                <li className="breadcrumb-item f-liBreadcrumb active myBreadcrumb">買食材</li>
            </ul>
        </div>
    </>
  );

export default FoodBread;
import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
// import { FaHome } from 'react-icons/fa';
// import { Breadcrumb } from "react-bootstrap";

/* Food詳細頁麵包屑 */
const FoodDetailsBread = props => (
    <>
        <div className="col-12 p-0">
            <ul className="breadcrumb f-ulBreadcrumb m-0">
                <li className="breadcrumb-item f-liBreadcrumb myBreadcrumb"><i className="fas fa-home"></i></li>
                <li className="breadcrumb-item f-liBreadcrumb active myBreadcrumb">買食材</li>
            </ul>
        </div>
    </>
  );

export default FoodDetailsBread;
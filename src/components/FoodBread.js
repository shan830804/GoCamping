import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";

/* 麵包屑 */
const FoodBread = props => (
    <>
         <div className="row col-12">
            <nav className="col-12 p-0">
                <ul className="food_bread breadcrumb m-0">
                    <li className="breadcrumb-item"><i className="fas fa-home"></i></li>
                    <li className="breadcrumb-item active">買食材</li>
                </ul>
            </nav>
        </div>
    </>
  );

export default FoodBread;
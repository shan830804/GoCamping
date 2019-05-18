import React from "react";
import { BrowserRouter as NavLink } from "react-router-dom";
import "./Food.css";
import FoodSlider from '../../components/FoodSlider'
import FoodLeftside from '../../components/FoodLeftside'

function Food() {
  return (
    <>
      <div className="container">
        <session className="container">
          {/* 麵包屑 */}
          {/* <div className="row" > */}
          <nav className="col-12 p-0 breadcrumbNav">
            <ol class="breadcrumb m-0">
              <li className="breadcrumb-item">
                <NavLink className="nav-link" to="/CampSide">
                  <i className="fas fa-home" />
                </NavLink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                買食材
              </li>
            </ol>
          </nav>
          {/* </div> */}
          {/* 輪播 */}
           <FoodSlider />
           <div className="row">
               <FoodLeftside />
           </div>
        </session>
      </div>
    </>
  );
}
export default Food;

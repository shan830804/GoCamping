import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
import "./Food.css";
import "../../components/Default.css";
import FoodSlider from '../../components/FoodSlider'
import FoodLeftside from '../../components/FoodLeftside'
import FoodBread from '../../components/FoodBread'
import FoodList from '../../components/FoodList'

function Food() {
  return (
    <>
      <div className="container">
        <session className="container">
          {/* 麵包屑 */}
          <FoodBread />
          {/* 輪播 */}
           <FoodSlider />
           <div className="row">
               <FoodLeftside />
               <FoodList />
           </div>
        </session>
      </div>
    </>
  );
}
export default Food;

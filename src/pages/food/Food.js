import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Food.css";
import "../../components/Default.css";
import FoodSlider from "../../components/FoodSlider";
import FoodLeftside from "../../components/FoodLeftside";
import FoodBread from "../../components/FoodBread";
import FoodList from "../../components/FoodList";
import FoodDetails from "./pages/food/FoodDetails";

function Food() {
  return (
    <>
      <div className="container">
        <session className="container">
          {/* 麵包屑 */}
          <FoodBread />
          {/* 輪播 */}
          <FoodSlider />
          <div className="row ">
            <FoodLeftside />

            <Router>
              <>
                <FoodList />
                <Switch>
                  <Route path="/Food/FoodDetails" component={FoodDetails} />{" "}
                </Switch>
              </>
            </Router>
          </div>
        </session>
      </div>
    </>
  );
}
export default Food;

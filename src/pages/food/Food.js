import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./Food.css";
import "../../components/Default.css";
import {
  Row,
  Col,
  Container
} from "react-bootstrap";
//各種頁面
import FoodSlider from "../../components/FoodSlider";
import FoodLeftside from "../../components/FoodLeftside";
import FoodBread from "../../components/FoodBread";
import FoodList from "../../components/FoodList";
import FoodDetails from "./FoodDetails";

function Food() {
  return (
    <Router>
      <Container>
        <Row>
          <FoodBread />
          <FoodSlider />
        </Row>
        <Row>
          <FoodLeftside />
          <FoodList />
          <Route exact path="/FoodDetails" component={FoodDetails} />
        </Row>
      </Container>
    </Router>
  );
}
export default Food;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Food.css";
import "../../components/Default.css";
import { Row, Col, Container } from "react-bootstrap";
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
      </Container>

      <Container>
        <Row>
          <Col md={2}>
            {" "}
            <FoodLeftside />
          </Col>
          <Col md={9}>
            <FoodList />
          </Col>
        </Row>
      </Container>
    </Router>
  );
}
export default Food;

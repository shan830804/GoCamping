import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
import "./Food.css";
import "../../components/Default.css";
import { Container, Row, Col } from "react-bootstrap";
import FoodDetailsBread from "../../components/FoodDetailsBread";
import FoodDetailsTop from "../../components/FoodDetailsTop";
import FoodDetailsMd from "../../components/FoodDetailsMd";
import FoodDetailsBt from "../../components/FoodDetailsBt";

function FoodDetails() {
  return (
    <>
      <Container className="FoodDetails">
        <Row className="container">
          <Col>
            <FoodDetailsBread />
            <FoodDetailsTop />
          </Col>
        </Row>
        <Row className="container">
          <Col>
            <FoodDetailsMd />
            <FoodDetailsBt />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default FoodDetails;

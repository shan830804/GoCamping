import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
import "./Food.css";
import "../../components/Default.css";
import { Container, Row, Col } from 'react-bootstrap'
import FoodDetailsBread from "../../components/FoodDetailsBread";
import FoodDetailsTop from "../../components/FoodDetailsTop";

function FoodDetails() {
  return (
    <>
      <Container className="FoodDetails-bread">
      <Row className="container">
      <Col>
        <FoodDetailsBread />
         <FoodDetailsTop />
         </Col>
        </Row>
      </Container>
    </>
  );
}
export default FoodDetails;

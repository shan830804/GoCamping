import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FoodDetailsTopLeft from "/FoodDetailsLeft";

function FoodDetailsTop() {
  return (
    <>
      <Container className="FoodDetails-bread">
      <Row className="container">
      <Col>
         <FoodDetailsTopLeft />
         </Col>
        </Row>
      </Container>
    </>
  );
}
export default FoodDetailsTop;
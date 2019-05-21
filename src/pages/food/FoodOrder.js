import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
import "./Food.css";
import "../../components/Default.css";
import { Container, Row, Col } from "react-bootstrap";
import FoodOrder01 from "../../components/FoodOrder01";


function FoodOrder() {
  return (
    <>
      <Container className="">
       <FoodOrder01 />
      </Container>
    </>
  );
}
export default FoodOrder;

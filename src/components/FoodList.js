import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as NavLink } from "react-router-dom";
// import { FaHome } from 'react-icons/fa';
import { Card, Img, Row, Col, Container } from "react-bootstrap";
import FoodDetails from "../pages/food/FoodDetails";

class FoodList extends React.Component {
  constructor() {
    super();
    this.state = {
      salepageData: []
    };
  }

  // 元件 "已經" 呈現在網頁上
  componentDidMount() {
    fetch("http://localhost:5555/salepage", {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json"
      })
    })
      .then(response => {
        //ok 代表狀態碼在範圍 200‐299
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then(jsonObject => {
        console.log(jsonObject);
        this.setState({ salepageData: jsonObject });
      })
      .catch(function (err) {
        // Error :(
      });
  }

  render() {
    return (
      <>
       
          {/* <Row>
          <Col sm={10}> */}
            {this.state.salepageData.map(item => (
              <Card.Link  href="/FoodDetails">
                <Card className="" style={{ width: "100%" }}>
                  <Card.Img
                    variant="top"
                    src={item.salepage_image}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Card.Body style={{ width: "100%" }} >
                    <Card.Title>{item.salepage_name}</Card.Title>
                    <Card.Text> {item.salepage_suggestprice}</Card.Text>
                    <Card.Text> {item.salepage_price}</Card.Text>
                  </Card.Body>
                </Card>
              </Card.Link>
            ))}
            {/* </Col >
          </Row> */}
      
      </>
    );
  }
}

export default FoodList;

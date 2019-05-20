import React from "react";
import { BrowserRouter as NavLink } from "react-router-dom";
// import { FaHome } from 'react-icons/fa';
import { Card, Img, Row, Col } from "react-bootstrap";

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
      .catch(function(err) {
        // Error :(
      });
  }

  render() {
    return (
      <>
        {this.state.salepageData.map(item => (
          <Card style={{ width: "13rem" }}>
            <Card.Img
              variant="top"
              src={item.salepage_image}
              style={{ width: 208, height: "auto" }}
            />
            <Card.Body>
              <Card.Title>{item.salepage_name}</Card.Title>
              <Card.Text> {item.salepage_suggestprice}</Card.Text>
              <Card.Text> {item.salepage_price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
}

export default FoodList;

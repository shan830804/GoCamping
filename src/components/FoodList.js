import React from "react";
import { Card, Img, Row, Col, Container } from "react-bootstrap";

class FoodList extends React.Component {
  constructor() {
    super();
    this.state = {
       // 食物的資料，注意應該預設值是空陣列，而不是null或空物件
      salepageData: [],
      filterData: []
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
        // console.log(jsonObject);
        this.setState({ salepageData: jsonObject, 
                        filterData: jsonObject });
      })
      .catch(function(err) {
        // Error :(
      });
  }

  componentWillReceiveProps(nextProps)
  {
    if(nextProps.salebrand > 0){
      this.setState({
        filterData: this.state.salepageData.filter(function(data) {
          return data.salepage_salebrand == nextProps.salebrand;
        })
      });
    }
    
    if(nextProps.salecateid > 0){
      this.setState({
        filterData: this.state.salepageData.filter(function(data) {
          return data.salepage_salecateid == nextProps.salecateid;
        })
      });
    }

    if(nextProps.salebrand == 0 && nextProps.salecateid == 0){
      this.setState({
        filterData: this.state.salepageData
      });
    }
  }

  render() {
    return (
      <>
        <Row className="justify-content-md-center fs-32">
          <Col md="auto">
            <p>全站商品</p>
          </Col>
        </Row>

        <Col>
          <div className="d-flex col-big">
            {this.state.filterData.map(item => (
              <Card.Link key={item.id} href={"/Food/FoodDetails/" + item.id} >
                <Card className="" style={{ width: "211px", height: "283px" }}>
                  <Card.Img
                    variant="top"
                    src={item.salepage_image}
                    style={{ width: "211px", height: "143px" }}
                  />
                  <Card.Body style={{ width: "100%" }}>
                    <Card.Title className="fs-14 food-default">
                      {item.salepage_name}
                    </Card.Title>
                    <Card.Text className="fs-12 food-default text-right">
                      {item.salepage_suggestprice}
                    </Card.Text>
                    <Card.Text className="fs-20 forest text-right">                      
                      {item.salepage_price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Card.Link>
            ))}
          </div>
        </Col>
      </>
    );
  }
}

export default FoodList;

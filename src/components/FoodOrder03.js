import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
// import { FaHome } from 'react-icons/fa';
import { Row, Col, Container, ButtonToolbar, Button, InputGroup, FormControl } from "react-bootstrap";

class FoodOrder03 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "買食材-訂購明細",
      saleorder_id : props.orderid,
      saleorderData : {}
    };
  }
  
  // 網頁標題
  componentDidMount() {    
    document.title = this.state.title;
    this.fetchData();
  }

  fetchData() {
    const url = "http://localhost:5555/saleorder/" + this.state.saleorder_id;
    return fetch(url)
      .then(response => response.json())
      .then(parsedJSON => this.setState({ 
                                          saleorderData: parsedJSON,                                          
                                        }))
      .catch(error => console.log(error));
  }

  render() {
    const { index, direction } = this.state;
    // console.log(this.props.order.salepage_name)
    // console.log(this.state.salepageData)
    return (
      <>
        {/* 進入訂單第一步 訂單明細*/}
        <Container className="mt-1">
          <Row className="mt-5 text-center">
            <Col className="text-center">
              <div className="forder03-title fs-32">訂購完成</div>
            </Col>
          </Row>
        </Container>
        {/* 訂購明細 */}
        <Container className="mt-5 mb-5 text-center">
          <Row className="mt-3">
            <Col>
              <div className="fs-24 grass fw-bold">訂單明細</div>
            </Col>
          </Row>
          <Row className="justify-content-center forder03-con mb-3 text-center">
            <Col className="forder03-border col-md-6 text-left">
              <Col className="p-3">
                <div className="text-left">
                    <label className="fs-16 pr-0 col-md-3" htmlFor="">訂單編號：</label>
                    <span className="fs-16 pl-0 col-md-8">{this.state.saleorderData.id}</span>
                </div>
                <div className="text-left">
                    <label className="fs-16 pr-0 col-md-3" htmlFor="">收件人姓名：</label>
                    <span className="fs-16 pl-0 col-md-8">{this.state.saleorderData.saleorder_memname}</span>
                </div>
                <div className="text-left">
                    <label className="fs-16 pr-0 col-md-3" htmlFor="">商品名稱：</label>
                    <span className="fs-16 pl-0 col-md-8">{this.state.saleorderData.saleorder_salepagename}</span>
                </div>
                <div className="text-left">
                    <label className="fs-16 pr-0 col-md-3" htmlFor="">商品數量：</label>
                    <span className="fs-16 pl-0 col-md-8">{this.state.saleorderData.saleorder_number}</span>
                </div>
                <div className="text-left">
                    <label className="fs-16 pr-0 col-md-3" htmlFor="">訂單金額：</label>
                    <span className="fs-16 pl-0 col-md-8">{this.state.saleorderData.saleorder_total}</span>
                </div>
                <div className="text-left">
                    <label className="fs-16 pr-0 col-md-3" htmlFor="">付款方式：</label>
                  <span className="fs-16 pl-0 col-md-8">ibon代碼付款</span>
                </div>
                <div className="text-left">
                    <label className="fs-16 pr-0 col-md-3" htmlFor="">ibon代碼：</label>
                    <span className="fs-16 pl-0 col-md-8">144 850 392 495</span>
                </div>
                <div className="text-left">
                    <label className="fs-16 pr-0 col-md-3" htmlFor="">繳費截止日：</label>
                    <span className="fs-16 pl-0 col-md-8">2019-06-10 00:00:00</span>
                </div>
                </Col>
            </Col>
          </Row>
           <Row>
            <Col>
              {/* justify-content-between */}
              <ButtonToolbar className="justify-content-end mt-3">                
                <Button
                  className="bg-sunshine food-default forder-btnNext"
                  variant="link"
                  style={{ width: "30%" }}
                  sm={"block"}                  
                  href={"/Member/MyFoodOrder/"}
                >
                  查看訂單
                </Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </Container>
        {/* <Container className="mt-2 forder03-con text-center">
          <Row className="justify-content-center forder03-con">
            <div className="row col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">訂單編號：</label>
                <p>{this.state.saleorderData.id}</p>
            </div>
            <div className="row col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">收件人姓名：</label>
                <p>{this.state.saleorderData.saleorder_memname}</p>
            </div>
            <div className="row col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">商品名稱：</label>
                <p>{this.state.saleorderData.saleorder_salepagename}</p>
            </div>
            <div className="row col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">商品數量：</label>
                <p>{this.state.saleorderData.saleorder_number}</p>
            </div>
            <div className="row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">訂單金額：</label>
                <p>{this.state.saleorderData.saleorder_total}</p>
            </div>
            <div className="row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">付款方式：</label>
               <p>ibon代碼付款</p>
            </div>
            <div className="row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">ibon代碼：</label>
                <p>144 850 392 495</p>
            </div>
            <div className="row col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">繳費截止日：</label>
                <p>2019-06-10 00:00:00</p>
            </div>
          </Row>
        </Container> */}
       
        {/* 送出或返回button */}
        {/* <Container className="forder01-btncon">
          {/* <Row>
            <Col>
              {/* justify-content-between */}
              {/* <ButtonToolbar className="justify-content-end mt-3">                
                <Button
                  className="bg-sunshine food-default forder-btnNext"
                  variant="link"
                  style={{ width: "30%" }}
                  sm={"block"}                  
                  href={"/Member/MyFoodOrder/"}
                >
                  查看訂單
                </Button>
              </ButtonToolbar> */}
            {/* </Col> */}
          {/* </Row> */} 
        {/* </Container> */}
      </>
    );
  }
}
export default FoodOrder03;

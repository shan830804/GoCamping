import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
// import { FaHome } from 'react-icons/fa';
import { Row, Col, Container, ButtonToolbar, Button, InputGroup, FormControl } from "react-bootstrap";

class CampOrder04 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderlist_id : props.orderid,
      orderlistData : {}
    };
  }
  
  // 網頁標題
  componentDidMount() {    
    // document.title = this.state.title;
    this.fetchData();
  }

  fetchData() {
    const url = "http://localhost:5555/orderlist/" + this.state.orderlist_id;
    return fetch(url)
      .then(response => response.json())
      .then(parsedJSON => this.setState({ 
                                          orderlistData: parsedJSON,                                          
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
          <Row className="mt-5">
            <Col>
              <div className=" title fs-32">訂購完成</div>
            </Col>
          </Row>
        </Container>
        {/* 訂購明細 */}
        <Container className="mt-1">
          <Row className="mt-3">
            <Col>
              <div className="ground fs-24">訂單明細</div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-2 forder03-con">
          <Row className="justify-content-center forder03-con">
            <div className="row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">訂單編號：</label>
                <p>{this.state.orderlistData.id}</p>
            </div>
            <div className="row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">訂購人姓名：</label>
                <p>{this.state.orderlistData.orderlist_memname}</p>
            </div>
            <div className="row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">營地名稱：</label>
                <p>{this.state.orderlistData.orderlist_camplistname}</p>
            </div>
            <div className="row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">營位明細</label>
                <p>營位帳數*{this.state.orderlistData.orderlist_number}</p>
            </div>
            <div className="row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">訂單金額：</label>
                <p>NT${this.state.orderlistData.orderlist_total}</p>
            </div>
            <div className="row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">付款方式：</label>
               <p>ibon代碼付款</p>
            </div>
            <div className="row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">ibon代碼：</label>
                <p>144 850 392 495</p>
            </div>
            <div className="row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">繳費截止日：</label>
                <p>2019-06-10 00:00:00</p>
            </div>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <ButtonToolbar className="justify-content-end mt-3">    
              <Button
                  className="goback-btn mr-2"
                  variant="link"
                  style={{ width: "30%" }}
                  sm={"block"}
                  href={"/CampSide/Camp/"}
                >
                  返回營地列表
                </Button>            
                <Button
                  variant="link" 
                  className="bg-sunshine next-btn"
                  style={{ width: "30%" }}
                  sm={"block"}                  
                  href={"/Member"}
                >
                  查看訂單
                </Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default CampOrder04;

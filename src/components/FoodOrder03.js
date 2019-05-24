import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
// import { FaHome } from 'react-icons/fa';
import { Row, Col, Container, ButtonToolbar, Button, InputGroup, FormControl } from "react-bootstrap";

class FoodOrder03 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "買食材-訂購明細"
    };
  }

  goP2 = () => {
        this.props.goP2();
    }
  // 網頁標題
  componentDidMount() {
    document.title = this.state.title;
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
              <div className=" forder01-title fs-32">訂購完成</div>
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
            <div className="row col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">訂單編號：</label>
                <p>20190524</p>
            </div>
            <div className="row col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">收件人姓名：</label>
                <p>小牛蒡</p>
            </div>
            <div className="row col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">商品名稱：</label>
                <p>小牛蒡</p>
            </div>
            <div className="row col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">商品數量：</label>
                <p>小牛蒡火鍋</p>
            </div>
            <div className="row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">訂單金額：</label>
                <p>999,55</p>
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
        </Container>
       
        {/* 送出或返回button */}
        <Container className="forder01-btncon">
          <Row>
            <Col>
              {/* justify-content-between */}
              <ButtonToolbar className="justify-content-end mt-3">
                <Button
                  className="bg-food-default forder-btn mr-2 "
                  style={{ width: "30%" }}
                  sm={"block"}
                  onClick={this.goP2}
                >
                  上一步
                </Button>
                <Button
                  className="bg-sunshine food-default forder-btn"
                  style={{ width: "30%" }}
                  sm={"block"}
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
export default FoodOrder03;

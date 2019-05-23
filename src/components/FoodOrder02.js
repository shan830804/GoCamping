import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
// import { FaHome } from 'react-icons/fa';
import { Row, Col, Container, ButtonToolbar, Button, InputGroup, FormControl } from "react-bootstrap";

class FoodOrder02 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "買食材-訂購明細"
    };
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
              <div className=" forder01-title fs-32">填寫訂購人資訊</div>
            </Col>
          </Row>
        </Container>
        {/* 訂購清單 */}
        <Container className="mt-1">
          <Row className="mt-5">
            <Col>
              <div className="ground fs-24">收件人資訊</div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-1">
          <Row className="mt-5">
            <Col>
              <div className="ground fs-24">選擇付款方式</div>
            </Col>
          </Row>
        </Container>

        {/* 送出或返回button */}
        <Container className="forder01-btncon">
          <Row>
            <Col>
              {/* justify-content-between */}
              <ButtonToolbar className="justify-content-end">
                <Button
                  className="bg-food-default forder-btn mr-2 "
                  style={{ width: "30%" }}
                  sm={"block"}
                >
                  返回食材列表
                </Button>
                <Button
                  className="bg-sunshine food-default forder-btn"
                  style={{ width: "30%" }}
                  sm={"block"}
                >
                  下一步，填寫資訊
                </Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default FoodOrder02;

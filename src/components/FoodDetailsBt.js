import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
import { Image, Row, Col, Table, Container, Card } from "react-bootstrap";

class FoodDetailsMd extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: "買食材"
    };
  }

  // 網頁標題
  componentDidMount() {
    document.title = this.state.title;
  }

  render() {
    const { index, direction } = this.state;
    return (
      <>
        {/* 相關推薦 */}
        <Row className="mt-5">
          <Col>
            <div className="dt-border">
              <p className="fs-32 fw-light dt-title">相關推薦</p>
            </div>
          </Col>
        </Row>
        <Container className="mt-1">
          <Row className="mt-1">
            <div>
              <Row>
                <Col xs="auto" className="comment-bd comment-active">
                  本站分類熱銷
                </Col>
                <Col xs="auto" className="comment-bd">
                  全站排行
                </Col>
              </Row>
              {/* 食物卡片顯示區 */}
              <Row>
                <Col xs={6} md={3} className="mt-2">
                  <Card style={{ width: "80%" }}>
                    <Card.Img variant="top" src="../images/f1-1.jpg" />
                    <Card.Body className="p-0">
                      <Card.Title className="fs-13 ">烤肉香香der</Card.Title>
                      <Card.Text className="pr-1 fs-14 forest text-right">
                        NT$999
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} md={3} className="mt-2">
                  <Card style={{ width: "80%" }}>
                    <Card.Img
                      style={{ width: "100%", height: "auto" }}
                      variant="top"
                      src="../images/f1-1.jpg"
                    />
                    <Card.Body className="p-0">
                      <Card.Title className="fs-13">烤肉香香der</Card.Title>
                      <Card.Text className="pr-1 fs-14 forest text-right">
                        NT$999
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} md={3} className="mt-2">
                  <Card style={{ width: "80%" }}>
                    <Card.Img variant="top" src="../images/f1-1.jpg" />
                    <Card.Body className="p-0">
                      <Card.Title className="fs-13">烤肉香香der</Card.Title>
                      <Card.Text className="pr-1 fs-14 forest text-right">
                        NT$999
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} md={3}>
                  <Card style={{ width: "80%" }} className="mt-2">
                    <Card.Img variant="top" src="../images/f1-1.jpg" />
                    <Card.Body className="p-0">
                      <Card.Title className="fs-13">烤肉香香der</Card.Title>
                      <Card.Text
                        className="pr-1 fs-14 forest text-right"
                      >
                        NT$999
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Container>
                <Row>
                  {/* <Col md={4}></Col> */}
                  <Col className="mt-2 fs-13 text-right"
                    md={{ span: 12, offset: 12 }}
                  >
                  <Card.Link className="food-default" href="#">更多</Card.Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </Row>
          <Row>
            <div />
          </Row>
        </Container>
      </>
    );
  }
}
export default FoodDetailsMd;

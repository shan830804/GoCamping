import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import {
  Image,
  Row,
  Col,
  Carousel,
  InputGroup,
  Button,
  FormControl,
  ButtonToolbar,
  Accordion,
  Card
} from "react-bootstrap";

/* Food詳細頁的圖*/
class FoodDetailsTop extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
      title: "買食材"
    };
  }

  // 網頁標題
  componentDidMount() {
    document.title = this.state.title;
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <>
        {/* Food Top開始 */}
        <Row className="d-flex">
          {/* Food Left開始  */}
          <Col xs={6}>
            <Carousel
              activeIndex={index}
              direction={direction}
              onSelect={this.handleSelect}
            >
              <Carousel.Item>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  className="d-block w-100"
                  src="http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5313015/0/084456?v=1?text=First slide&bg=373940"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  className="d-block w-100"
                  src="http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5313015/1/084456?v=1?text=Second slide&bg=282c34"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  className="d-block w-100"
                  src="http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5312987/0/084544?v=1?text=Third slide&bg=20232a"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
            {/* 小圖示 */}
            <Row>
              <Col xs={3} className="fl-imgSm">
                <Image
                  variant="top"
                  className="mt-1"
                  src="http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5313015/0/084456?v=1"
                  style={{ width: "100%", height: "100%" }}
                  rounded
                />
              </Col>
              <Col xs={3} className="fl-imgSm">
                <Image
                  variant="top"
                  className="mt-1"
                  src="http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5313015/0/084456?v=1"
                  style={{ width: "100%", height: "100%" }}
                  rounded
                />
              </Col>
              <Col xs={3} className="fl-imgSm">
                <Image
                  variant="top"
                  className="mt-1"
                  src="http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5313015/0/084456?v=1"
                  style={{ width: "100%", height: "100%" }}
                  rounded
                />
              </Col>
            </Row>
            {/* <Col xs={3} >
              <Image
                variant="top"
                className="m-2 "
                src="http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5313015/0/084456?v=1"
                style={{ width: "100%", height: "100%" }}
                rounded
              />
              <Image
                variant="top"
                className="m-2"
                src="http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5312987/0/084544?v=1"
                style={{ width: "100%", height: "100%"}}
                rounded
              />
            </Col> */}
          </Col>
          {/* Food Left結束 */}

          {/* TopRight */}
          <Col xs={6}>
            <h4 className="fs-24">
              【 冷凍店取-陳記好味】東北酸菜鴨(固形物300克、湯500cc)
            </h4>
            <p className="fs-16 su-price">1000</p>
            <p className="fs-24 forest price">NT$1500</p>
            {/* 選擇數量 */}
            <p className="fs-16">數量</p>
            <InputGroup size="sm" className="mb-3 col-6 group-number">
              <InputGroup.Prepend>
                <Button variant="" className="btn-number">
                  <span className="fs-20">–</span>
                </Button>
              </InputGroup.Prepend>
              <FormControl aria-describedby="" className="btn-number" />
              <InputGroup.Append>
                <Button variant="" className="btn-number">
                  <span className="fs-20">+</span>
                </Button>
              </InputGroup.Append>
            </InputGroup>
            {/* 加入收藏&放購物車 */}
            <ButtonToolbar className="btn-add btn-add  ">
              <Button className="col-md-5 btn-addheart" href="#">
                {" "}
                <FaHeart /> 加入收藏
              </Button>
              <Button className="col-md-5 ml-2 btn-grass" href="#">
                放入購物車
              </Button>
            </ButtonToolbar>
            {/* 付款及運送方式 */}
            <Accordion className="mt-4">
              <Card>
                <Card.Header>
                  <Accordion className="fs-16">付款與運送</Accordion>
                </Card.Header>
                <Accordion>
                  <Card.Body className="pay-cardbody">
                    <div>
                      <p className="fs-20 pay-title"> 付款方式</p>
                      <p className="fs-14 pay-dt">信用卡</p>
                      <p className="fs-14 pay-dt">ATM轉帳</p>
                      <p className="fs-14">ibon代碼繳帳</p>
                    </div>
                    <div>
                      <p className="fs-20 pay-title"> 運送方式</p>
                      <p className="fs-14">
                        宅配，從備貨到寄出商品為 3 個工作天。（不包含假日）
                      </p>
                    </div>
                  </Card.Body>
                </Accordion>
              </Card>
              <Card />
            </Accordion>
          </Col>
        </Row>
      </>
    );
  }
}
export default FoodDetailsTop;

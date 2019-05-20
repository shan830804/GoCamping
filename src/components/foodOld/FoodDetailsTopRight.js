import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
import { Image, Row, Col, Carousel } from "react-bootstrap";

class FoodDetailsTop extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  /* Food詳細頁的圖*/
  render() {
    const { index, direction } = this.state;

    return (
      <Row>
        <Col xs={6}>
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
          >
            <Carousel.Item>
              <Image style={{ width: "30rem", height: "26rem"}}
                className="d-block w-100"
                src="http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5313015/0/084456?v=1?text=First slide&bg=373940"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image style={{ width: "30rem", height: "26rem"}}
                className="d-block w-100"
                src="http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5313015/1/084456?v=1?text=Second slide&bg=282c34"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image style={{ width: "30rem", height: "26rem"}}
                className="d-block w-100"
                src="http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5312987/0/084544?v=1?text=Third slide&bg=20232a"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <Image variant="top"
                className="m-2 "
              src="http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5313015/0/084456?v=1"
              style={{ width: "5.6rem", height: "4.6rem" }} rounded />
              <Image variant="top" 
                className="m-2"
              src="http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5313015/1/084456?v=1"
              style={{ width: "5.6rem", height: "4.6rem" }} rounded />
              <Image variant="top"
                className="m-2"
              src="http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5312987/0/084544?v=1"
              style={{ width: "5.6rem", height: "4.6rem" }} rounded />
        </Col>
      </Row>
    );
  }
}

export default FoodDetailsTop;

/* <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image variant="top"
              src="http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5313015/0/084456?v=1"
              style={{ width: "35rem", height: "30rem" }} rounded />
            <Image variant="top"
              src="http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/5313015/0/084456?v=1"
              style={{ width: "5.6rem", height: "4.6rem" }} rounded />
        </Col>
      </Row>
    </Container> */

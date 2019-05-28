import React from "react";
import NumberFormat from 'react-number-format';
import { FaHeart } from "react-icons/fa";
import {
  Image,
  Row,
  Col,
  Carousel,
  Button,
  Form,
  ButtonToolbar,
  Accordion,
  Card
} from "react-bootstrap";

/* Food詳細頁的圖*/
class FoodDetailsTop extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      index: 0,
      direction: null,
      title: "買食材",
      //props.data父層命名的名字
      salepageData: props.data, 
      //選擇商品數量
      // optionNumber:"2"     
    };
  }

  // https://stackoverflow.com/questions/37058533/passing-updated-state-as-props
  componentWillReceiveProps(nextProps) {
    this.setState({ salepageData: nextProps.data});    
  }  

  // 網頁標題
  componentDidMount() {
    document.title = this.state.title;      
  }  

  render() {
    return (       
      <>        
        {/* Food Top開始 */}
        <Row className="d-flex">
          {/* Food Left開始  */}
          <Col xs={12} md={6}>
            <Carousel>
              <Carousel.Item>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  className="d-block w-100"
                  src={this.state.salepageData.salepage_image}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  className="d-block w-100"
                  src={this.state.salepageData.salepage_image2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  className="d-block w-100"
                  src={this.state.salepageData.salepage_image3}
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
                  src={this.state.salepageData.salepage_image}
                  style={{ width: "100%", height: "100%" }}
                  rounded
                />
              </Col>
              <Col xs={3} className="fl-imgSm">
                <Image
                  variant="top"
                  className="mt-1"
                  src={this.state.salepageData.salepage_image2}
                  style={{ width: "100%", height: "100%" }}
                  rounded
                />
              </Col>
              <Col xs={3} className="fl-imgSm">
                <Image
                  variant="top"
                  className="mt-1"
                  src={this.state.salepageData.salepage_image3}
                  style={{ width: "100%", height: "100%" }}
                  rounded
                />
              </Col>
            </Row>
          </Col>
          {/* Food Left結束 */}

          {/* TopRight */}
          <Col xs={12} md={6}>
            <h4 className="fs-24 mt-2">
              {this.state.salepageData.salepage_name}
            </h4>
            <p className="fs-16 su-price">
            <NumberFormat value={this.state.salepageData.salepage_suggestprice} displayType={'text'} thousandSeparator={true} prefix={'NT$'} />
            </p>
            <p className="fs-24 forest price">
            <NumberFormat value={this.state.salepageData.salepage_price} displayType={'text'} thousandSeparator={true} prefix={'NT$'} />
            </p>
            {/* 選擇數量 */}
            <Form>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>數量</Form.Label>
                <Form.Control as="select" defaultValue={this.props.optionNumber} >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </Form.Control>
              </Form.Group>
            </Form>
            {/* 加入收藏&放購物車 */}
            <ButtonToolbar className="btn-add ">
              <Col  xs={12} md={6} className="btn-addcol">
                {/*收藏--> 用JSON判斷此salelove裡面是否有此會員的資料,再用三元運算子判斷是否要顯示以加入收藏的CSS  */}
                <Button className={this.props.saleloveData.length > 0 ? "btn-addlove-active" : "btn-addlove"}
                        onClick={this.props.AddSaleLove}>
                  {" "}
                  <FaHeart /> 加入收藏
                </Button>
              </Col>
              <Col  xs={12} md={6} className="btn-addcol pr-0">
                <Button  className="btn-grass btn-order"
                        variant="link" 
                        href={"/Food/FoodDetails/FoodOrderP1/" + this.state.salepageData.id} >
                  立即預定
                </Button>
              </Col>
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
                      <p className="pay-title"> 付款方式</p>
                      <p className="fs-14 pay-dt">信用卡</p>
                      <p className="fs-14 pay-dt">ATM轉帳</p>
                      <p className="fs-14">ibon代碼繳帳</p>
                    </div>
                    <div>
                      <p className="pay-title"> 運送方式</p>
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

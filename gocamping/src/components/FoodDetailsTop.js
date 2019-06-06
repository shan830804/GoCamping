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
      // title: "買食材",
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

  // // 網頁標題
  // componentDidMount() {
  //   document.title = this.state.title;      
  // }  

  render() {
    return (       
      <>        
        {/* Food Top開始 */}
        <Row className="d-flex">
          {/* Food Left開始  */}
          <Col xs={12} md={6}>
            <Carousel className="f-carousel">
              <Carousel.Item className="f-carousel-item">
              <figure>
                <Image
                  className="d-block w-100"
                  src={this.state.salepageData.salepage_image}
                  alt="First "
                />
                </figure>
              </Carousel.Item>
              <Carousel.Item className="f-carousel-item">
                <figure>
                <Image
                  className="d-block w-100"
                  src={this.state.salepageData.salepage_image2}
                  alt="First"
                />
                </figure>
              </Carousel.Item>
               <Carousel.Item className="f-carousel-item">
                <figure>
                <Image
                  className="d-block w-100"
                  src={this.state.salepageData.salepage_image3}
                  alt="First"
                />
                </figure>
              </Carousel.Item>
            </Carousel>
            {/* 小圖示 */}
            <Row>
              <Col xs={3} className="fl-imgSm mt-2">
                <figure className="f-smimg">
                  <Image
                    variant="top"
                    className=""
                    src={this.state.salepageData.salepage_image}
                    style={{ width: "100%"}}
                    rounded
                  />
                </figure>
              </Col>
              <Col xs={3} className="fl-imgSm mt-2">
                <figure className="f-smimg">
                  <Image
                    variant="top"
                    className=""
                    src={this.state.salepageData.salepage_image2}
                    style={{ width: "100%" }}
                    rounded
                  />
                </figure>
              </Col>
              <Col xs={3} className="fl-imgSm mt-2">
                <figure className="f-smimg">
                  <Image
                    variant="top"
                    className=""
                    src={this.state.salepageData.salepage_image3}
                    style={{ width: "100%"}}
                    rounded
                  />
                </figure>
              </Col>
            </Row>
          </Col>
          {/* Food Left結束 */}

          {/* Food Right開始 */}
          <Col xs={12} sm={6} md={6}>
            {/* 商品名稱 */}
            <Row className="mb-4 mt-2 mb-5">
              <Col className="d-flex pl-0 pr-0">
                <h4 className="fs-24">{this.state.salepageData.salepage_name}</h4>
              {/* 加入收藏 */}
                <span className={this.props.saleloveData.length > 0 ? "btn-addlove-active" : "btn-addlove"}
                    onClick={this.props.AddSaleLove}>
                  <i className="fas fa-heart f-heart px-2"></i>
                </span>
              </Col>
            </Row>
            <p className="fs-16 su-price">
              <NumberFormat value={this.state.salepageData.salepage_suggestprice} displayType={'text'} thousandSeparator={true} prefix={'NT$'} /></p>
            <p className="fs-24 forest price">
              <NumberFormat value={this.state.salepageData.salepage_price} displayType={'text'} thousandSeparator={true} prefix={'NT$'} /></p>
            {/* <Row className="align-items-end">
              <Col sm={10} className="pl-0">
                <p className="fs-24 forest price">
                  <NumberFormat value={this.state.salepageData.salepage_price} displayType={'text'} thousandSeparator={true} prefix={'NT$'} />
                </p>
              </Col>
              <Col className="text-align-right">
              {/* 加入收藏 */}
              {/* <li className="d-flex my-1 mb-2 d-flex">
                <div className={this.props.saleloveData.length > 0 ? "btn-addlove-active" : "btn-addlove"}
                              onClick={this.props.AddSaleLove}>
                   <i className="fas fa-heart f-heart"></i>
                </div>
            </li>
              </Col>
            </Row>  */}
            
            {/* 選擇數量&立即預訂 */}
            <Row className="pl-0 pr-0 align-items-end">
              <Col className="pl-0 pr-0">
                <span>數量</span>
                  <span className="" />
                  <input
                    min="1"                                                    
                    value={this.state.order_num}
                    onChange={this.changeNum}
                    id="order_num"
                    type="number"
                    className="form-control text-center"
                    placeholder="1"
                  />                                        
               
              </Col>
              <Col>
                <Button className="btn-grass btn-order"
                          variant="link" 
                          onClick={this.props.toFoodOrderP1} >
                    立即預訂
                  </Button>
              </Col>
            </Row>
            
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

import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Slider from "react-slick";
import NumberFormat from 'react-number-format';
import {
  Image,
  Row,
  Col,
  Button,
  Form,
  ButtonToolbar,
  Link,
} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import { FaMapMarkerAlt, FaPhone, FaEye } from 'react-icons/fa'

/* Camp詳細頁的圖*/
class CampDetailsTop extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
      camplistData: props.data,
      nav1: null,
      nav2: null,
    };
  }

  // https://stackoverflow.com/questions/37058533/passing-updated-state-as-props
  componentWillReceiveProps(nextProps) {
    this.setState({ camplistData: nextProps.data });
  }

  // 網頁標題
  componentDidMount() {
    // document.title = this.state.title;
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
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
        
        <div>
          <h2 className="fs-32"> {this.state.camplistData.camplist_name}</h2>
          <div className="d-flex fs-18">
            <FaMapMarkerAlt className="grass mr-2" />
            <p className="mr-2">{this.state.camplistData.camplist_address}</p>
            <FaPhone className="grass rotate mr-2" />
            <p>{this.state.camplistData.camplist_tel}</p>
          </div>
        </div>
       <Row>
       <div className="campimg col-md-8 col-sm-12" >
       <Slider
              arrows={false}
              asNavFor={this.state.nav2}
              ref={slider => (this.slider1 = slider)}
            >
              <div>
                <img
                  className="d-block"
                  src={this.state.camplistData.camplist_image}
                  alt="First slide"
                />
              </div>
              <div>
                <img
                  className="d-block"
                  src={this.state.camplistData.camplist_image2}
                  alt="Second slide"
                />
              </div>
              <div>
                <img
                  className="d-block"
                  src={this.state.camplistData.camplist_image3}
                  alt="Third slide"
                />
              </div>
              <div>
                <img
                  className="d-block"
                  src={this.state.camplistData.camplist_image4}
                  alt="First slide"
                />
              </div>
              <div>
                <img
                  className="d-block"
                  src={this.state.camplistData.camplist_image5}
                  alt="First slide"
                />
              </div>
            </Slider>
            <Slider
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
              arrows={true}
            >
              <div>
                <img
                  className="d-block"
                  src={this.state.camplistData.camplist_image}
                  alt="First slide"
                />
              </div>
              <div>
                <img
                  className="d-block"
                  src={this.state.camplistData.camplist_image2}
                  alt="First slide"
                />
              </div>
              <div>
                <img
                  className="d-block"
                  src={this.state.camplistData.camplist_image3}
                  alt="First slide"
                />
              </div>
              <div>
                <img
                  className="d-block"
                  src={this.state.camplistData.camplist_image4}
                  alt="First slide"
                />
              </div>
              <div>
                <img
                  className="d-block"
                  src={this.state.camplistData.camplist_image5}
                  alt="First slide"
                />
              </div>
            </Slider>

       </div>
     
        
            

          {/* TopRight */}
          <div className="col-md-4 col-sm-12 ">
            <p className="wood fs-24 fw-medium fw-bold mb-4 ">營區資訊</p>
            <div>
              <div className="d-flex">
                <div>營區簡介</div>
                <p className="col-9 fw-medium">
                 {this.state.camplistData.camplist_feature}
                </p>
              </div>
              <div className="d-flex">
                <div>提供設施</div>
                <div className="col-9 fw-medium">
                {this.state.camplistData.camplist_device}
                </div>
              </div>
              <div className="d-flex">
                <div>附屬服務</div>
                <p className="col-9 fw-medium">
                {this.state.camplistData.camplist_service}
                </p>
              </div>
              <div className="d-flex">
                <div>開放時間</div>
                <p className="col-9 fw-medium">
                {this.state.camplistData.camplist_open}
                </p>
              </div>
              <div className="d-flex">
                <div>適合對象</div>
                <p className="col-9 fw-medium">
                {this.state.camplistData.camplist_targetname}
                </p>
              </div>
            </div>
            
            <div className="d-flex mt-3">
              <h4 className="d-flex forest ">
              <NumberFormat value={this.state.camplistData.camplist_price} displayType={'text'} thousandSeparator={true} prefix={'NT$'} />
               <span className="fs-14 align-self-center">起</span>
              </h4>
              <div className="col-md-4">
                  <Button onClick={this.props.openCouponListModalHandler} className="sale-btn">領取優惠券</Button>
                  </div>
         
            </div>
              
                {/* <Button variant="link" className="select-btn mt-2" >
                  <FaHeart /> 加入收藏
                </Button> */}
                
                  
                  <div  className="col-md-8 col-sm-12">
                  <Button variant="link" className="btn-grass order-btn fs-20 mt-3" 
                          onClick={this.props.toCampOrderP1} 
                          // href={"/Camp/CampDetails/CampOrderP1/" + this.state.camplistData.id} 
                          >
                    立即預訂
                  </Button>
                  </div>
          </div>
            
        </Row>
        </>
    );
  }
}
export default CampDetailsTop;

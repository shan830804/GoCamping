import React, { Component } from 'react'
import './PromoCampCard.css'
import { BrowserRouter as Router, Route, Switch, Link, Redirect,withRouter } from 'react-router-dom'
import { Nav, Tab, Card, Col, CardDeck, Row } from 'react-bootstrap';

 class MemberCampCard extends Component {
   constructor(props){
     super(props)
     this.state={
      liked:this.props.camp_liked,
      // rating_avg:this.props.campsite_data.rating_avg,
     }
   }

   
  render() {
    console.log(this.props)
    return (
      <Col lg={6}>
            <Link to={"/Camp/CampDetails/" + this.props.campsite_data.camp_id}>
            
              <div className=" camp_card my-2 " style={{borderRadius:"10px"}}>
                <div className='campsite_img_wrap d-flex'>
                  <span  className="like_btn" onClick={this.props.handle_like_btn_click}><i className="fas fa-heart" style={this.state.liked?{color:'#f26666'}:{color:'rgba(0,0,0,0.2)'}}></i></span>
                  <div className="img_main">
                    <img style={{borderRadius:"10px 0 0 0"}} src={this.props.camp_img?'/campImg/'+this.props.camp_img[0].camp_image:''} alt=""/>
                  </div>
                  <div className="img_sec_wrap">
                    <div className="img_sec">
                      <img style={{borderRadius:"0 10px 0 0"}} src={this.props.camp_img?'/campImg/'+this.props.camp_img[1].camp_image:''} alt=""/>
                    </div>
                    <div className="img_sec">
                      <img src={this.props.camp_img?'/campImg/'+this.props.camp_img[2].camp_image:''} alt=""/>
                    </div>
                  </div>
                </div>
                <div className='campsite_info d-flex'>
                  <div className="campsite_info_main">
                    <ul style={{maxWidth:'100%'}}>
                      <li className="camp_loca"><i className="fas fa-map-marker-alt"></i>{this.props.campsite_data?this.props.campsite_data.city:''},{this.props.campsite_data?this.props.campsite_data.dist:''}</li>
                      <li className="camp_name">{this.props.campsite_data?this.props.campsite_data.camp_name:''}</li>
                      {/* <li>
                        <div className="stars-outer">
                          <div className="stars-inner" style={{width:this.state.rating_avg?this.getRatingsWidth():'0'}}></div>
                          <span style={{color:"#f2ce63"}}> {this.getRating()}</span>
                        </div>
                      </li> */}
                      <li className="camp_feature">{this.props.campsite_data?this.props.campsite_data.camp_intro:''}</li>
                      {/* <li className="camp_feature">{this.props.camp_feature?this.props.camp_feature.map(feature=><><i className="fas fa-hashtag"></i><span>{feature.camp_type}</span></>):''}</li> */}
                      
                    </ul>
                  </div>
                  <div className='campsite_info_price'>
                    <ul className="d-flex align-items-end" style={{height:'100%'}}>
                      <li className="fs-20 forest" >
                        {this.props.camp_feature?"NT$"+this.props.getMinPriceBeforeDiscount(this.props.camp_feature):''}<span style={{fontSize:'16px'}}>起</span>
                      </li>
                      {/* <li className="price_sec">
                        <del>{this.props.camp_feature?"NT$"+this.props.getMinPriceBeforeDiscount(this.props.camp_feature):''}</del>
                      </li> */}
                      {/* <li className="price_main">
                        {this.props.camp_feature?"NT$"+this.props.getMinPriceAfterDiscount(this.props.camp_feature,this.props.Member_rules):''}
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              
              </Link>     
          </Col>
    )
  }
}
export default MemberCampCard
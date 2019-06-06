import React, { Component } from 'react'
import './PromoCampCard.css'
import { BrowserRouter as Router, Route, Switch, Link, Redirect,withRouter } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'

class PromoCampCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: this.props.camp_liked,
      // rating_avg:this.props.campsite_data.rating_avg,
    }
  }


  getRatingsWidth = () => {
    let starsTotal = 5
    const starPercentage = `${Math.round(this.props.campsite_data.rating_avg * 10) / 10}` / starsTotal * 100;
    const starPercentageRounded = `${starPercentage}%`;
    return starPercentageRounded
    // document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
    // document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
  }
  getRating = () => {
    let starsTotal = 5
    const starRounded = `${Math.round(this.props.campsite_data.rating_avg * 10) / 10}`;
    return starRounded
  }




  handle_like_btn_click = async () => {

    let mem_account = localStorage.getItem('mem_account')
    if (mem_account) {
      if (!this.state.liked) {
        let data = {
          account: localStorage.getItem('mem_account') ? localStorage.getItem('mem_account') : false,
          camp_id: this.props.campsite_data.camp_id
        }
        const response = await fetch("http://localhost:5000/insertcampliked", {
          method: "POST",
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify(data)
        })

        if (!response.ok) throw new Error(response.statusText)


        const responseJsonObject = await response.json()
        if (responseJsonObject.success) {
          this.setState({ liked: true })
        }

      } else {
        let data = {
          account: localStorage.getItem('mem_account') ? localStorage.getItem('mem_account') : false,
          camp_id: this.props.campsite_data.camp_id
        }
        const response = await fetch("http://localhost:5000/deletecampliked", {
          method: "POST",
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify(data)
        })

        if (!response.ok) throw new Error(response.statusText)


        const responseJsonObject = await response.json()
        if (responseJsonObject.success) {
          this.setState({ liked: false })
        }

      }
    } else {
      this.props.history.push('/Login')
    }
  }
  render() {
    // console.log(this.props)
    return (
      <Link className="camp_card my-2 " to={"/Camp/CampDetails/" + this.props.campsite_data.camp_id}>
        <div className=" " style={{ borderRadius: "10px" }}>
          <div className='campsite_img_wrap d-flex'>
            <span className="like_btn" onClick={(e) => {
              e.preventDefault()
              return this.handle_like_btn_click()
            }}><i className="fas fa-heart" style={this.state.liked ? { color: '#f26666' } : { color: 'rgba(0,0,0,0.2)' }}></i></span>
            <div className="img_main">
              <img style={{ borderRadius: "10px 0 0 0" }} src={this.props.camp_img ? '/campImg/' + this.props.camp_img[0].camp_image : ''} alt="" />
            </div>
            <div className="img_sec_wrap">
              <div className="img_sec">
                <img style={{ borderRadius: "0 10px 0 0" }} src={this.props.camp_img ? '/campImg/' + this.props.camp_img[1].camp_image : ''} alt="" />
              </div>
              <div className="img_sec">
                <img src={this.props.camp_img ? '/campImg/' + this.props.camp_img[2].camp_image : ''} alt="" />
              </div>
            </div>
          </div>
          <div className='campsite_info d-flex flex-column'>
            <div className="campsite_info_main" >
              <ul style={{ maxWidth: '100%',display:'flex',flexDirection:'column' }}>
                <li className="camp_loca"><i className="fas fa-map-marker-alt"></i>{this.props.campsite_data ? this.props.campsite_data.city : ''},{this.props.campsite_data ? this.props.campsite_data.dist : ''}</li>
                <li className="camp_name">{this.props.campsite_data ? this.props.campsite_data.camp_name : ''}</li>
                <li className="camp_feature">{this.props.campsite_data ? this.props.campsite_data.camp_intro : ''}</li>
                

              </ul>
            </div>
            <div className='campsite_info_price'>
              <ul className="d-flex justify-content-end">
              <li className="camp_feature  ground fw-bold"><i class="fas fa-hashtag"></i>{this.props.campsite_data ? this.props.campsite_data.camp_target : ''}</li>
                <li className="fs-20 ml-auto forest">
                  {this.props.camp_feature ? "NT$" + this.props.getMinPriceBeforeDiscount(this.props.camp_feature) : ''}<span style={{ fontSize: '16px' }}>起</span>
                </li>
                {/* <li className="price_sec">
                        <del>{this.props.camp_feature?"NT$"+this.props.getMinPriceBeforeDiscount(this.props.camp_feature):''}</del>
                      </li> */}
                {/* <li className="price_main">
                        {this.props.camp_feature?"NT$"+this.props.getMinPriceAfterDiscount(this.props.camp_feature,this.props.promo_rules):''}
                      </li> */}
              </ul>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
export default withRouter(PromoCampCard)
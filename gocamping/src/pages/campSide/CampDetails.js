import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
import "./Camp.css";
import "../../components/Default.css";
// import { BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import CampDetailsBread from "../../components/CampDetailsBread";
import CampDetailsTop from "../../components/CampDetailsTop";
import CampDetailsMd from "../../components/CampDetailsMd";
import CampDetailsBt from "../../components/CampDetailsBt";
import CouponListModal from "../../components/CouponListModal";
import CouponModal from "../../components/CouponModal";

class CampDetails extends React.Component {
  // TODO: 接收傳進來的該筆資料(ex const {match} = this.props)
  constructor(props) {
    super(props);
    this.state = {
      camplist_id: props.match.params.id,
      camplistData: [],
      camptypeData: [],
      show: false,
      typeDate: [],
      coupon_avaliable: [],
      showCouponListModal: false,
      showCouponModal: false,
      coupon_code_obtained: []
    };
  }

  componentDidMount() {
    this.fetchData();
    this.fetchCamptypeData();
    this.fetchCouponForCamp();
  }

  fetchData() {
    const url = "http://localhost:5555/camplist/" + this.state.camplist_id;
    return fetch(url)
      .then(response => response.json())
      .then(parsedJSON => this.setState({ camplistData: parsedJSON }))
      .catch(error => console.log(error));
  }

  //比對營區資料與營位資料
  fetchCamptypeData() {
    const url = "http://localhost:5555/camptype";
    return fetch(url)
      .then(response => response.json())
      .then(parsedJSON =>
        this.setState((state, props) => ({
          // 收藏--> 3.取得 salelove 的資料後用filter比對 mem_id 與 salepage_id
          camptypeData: parsedJSON.filter(function(data) {
            return data.camp_id === state.camplist_id;
          })
        }))
      )
      .catch(error => console.log(error));
  }

  fetchCouponForCamp = async () => {
    const response = await fetch(
      "http://localhost:5000/getcouponsofcamp/" + this.state.camplist_id,
      {
        method: "POST",
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({
          mem_account: localStorage.getItem("mem_account")
        })
      }
    );

    if (!response.ok) throw new Error(response.statusText);
    console.log(response);
    const jsonObject = await response.json();

    await this.setState({
      coupon_avaliable: jsonObject.coupon_avaliable
        ? jsonObject.coupon_avaliable
        : []
    });
  };
  //預訂前跳到登入畫面
  toCampOrderP1 = () => {
    var memid = localStorage.getItem("mem_id");
    // 先用一般的 if else 判斷是否登入, 再簡化成三元運算子作判斷
    let path = memid
      ? "/Camp/CampDetails/CampOrderP1/" + this.state.camplistData.id
      : "/Login";
    this.props.history.push(path);
  };

  openCouponListModalHandler = () => {
    let mem_account = localStorage.getItem("mem_account");
    if (mem_account) {
      this.setState({
        showCouponListModal: true
      });
    } else {
      this.props.history.push("/Login");
    }
  };

  closeCouponListModalHandler = () => {
    this.setState({
      showCouponListModal: false
    });
  };

  openCouponModalHandler = () => {
    this.setState({
      showCouponModal: true
    });
  };

  closeCouponModalHandler = () => {
    this.setState({
      showCouponModal: false
    });
  };

  handleObtainCouponClick = async coupon_data => {
    let mem_account = localStorage.getItem("mem_account");
    let coupon_genre = coupon_data.coupon_genre_id;
    if (mem_account) {
      let data = {
        mem_account: mem_account,
        coupon_genre: coupon_genre
      };
      const response = await fetch("http://localhost:5000/obtaincoupon", {
        method: "POST",
        // credentials: 'include',
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(data)
      });
      console.log(response);
      if (!response.ok) throw new Error(response.statusText);

      const responseJsonObject = await response.json();

      console.log(responseJsonObject);
      await this.setState({
        coupon_code_obtained: responseJsonObject[0].coupon_code
          ? responseJsonObject[0].coupon_code
          : "",
        showCouponModal: true,
        showCouponListModal: false,
        coupon_avaliable: this.state.coupon_avaliable.filter(
          coupon =>
            coupon.coupon_genre_id != responseJsonObject[0].coupon_genre_id
        )
      });
    } else {
      this.props.history.push("/Login");
    }
  };

  //宣染開始
  render() {
    console.log(this.state.camptypeData);
    // console.log(this.state.camplist_id)
    return (
      <>
        {this.state.showCouponListModal ? (
          <div onClick={this.closeModalHandler} className="back-drop" />
        ) : null}
        <CouponListModal
          show_modal={this.state.showCouponListModal}
          handleObtainCouponClick={this.handleObtainCouponClick}
          close={this.closeCouponListModalHandler}
          coupon_avaliable={this.state.coupon_avaliable}
        />

        {this.state.showCouponModal ? (
          <div onClick={this.closeModalHandler} className="back-drop" />
        ) : null}
        <CouponModal
          show_modal={this.state.showCouponModal}
          close={this.closeCouponModalHandler}
          coupon_code_obtained={
            this.state.coupon_code_obtained
              ? this.state.coupon_code_obtained
              : ""
          }
        />
        {/* {this.state.camplistData.camplist_name} */}
        <Container className="CampDetails">
          <Row className="container">
            <Col>
              <CampDetailsBread  data={this.state.camplistData} />
              {/* data是自己命名,是要給子層沿用下去的 */}
              <CampDetailsTop
                data={this.state.camplistData}
                toCampOrderP1={this.toCampOrderP1}
                openCouponListModalHandler={this.openCouponListModalHandler}
              />
            </Col>
          </Row>
          <Row className="container">
            <Col>
              <CampDetailsMd
                camptypeData={this.state.camptypeData}
                camplistData={this.state.camplistData}
              />
              <CampDetailsBt data={this.state.camplistData} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default CampDetails;

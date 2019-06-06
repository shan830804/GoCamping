import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./Camp.css";
import "../../components/Default.css";
import {
  Row,
  Col,
  Container,
  Table,
  Form,
  Image,
  Button
} from "react-bootstrap";
import CampOrder02 from "../../components/CampOrder02";
import CampOrder03 from "../../components/CampOrder03";
import CampOrder04 from "../../components/CampOrder04";

class CampOrderP1 extends React.Component {
  // TODO: 接收傳進來的該筆資料(ex const {match} = this.props)
  constructor(props) {
    super(props);
    this.state = {
      camplist_id: props.match.params.id,
      //這裡還要用fetch拿到的是物件,所以預設就是{},不是[]
      camplistData: [],
      camptypeData: [],
      numtotal: 0,
      numall: [],
      num: 0,
      date: "",
      day: 0,
      price: 0,
      total: [],
      sum: 0,
      area: [],
      // 頁數
      showOrder: 1,
      //送出的資料
      orderlist_id: 0,
      orderlist_memid: 0,
      orderlist_memname: "",
      orderlist_memtel: "",
      orderlist_memmail: "",
      orderlist_memtaddress: "",
      orderlist_camplistimage: "",
      orderlist_camplistid: "",
      orderlist_camplistname: "",
      orderlist_number: 0,
      orderlist_total: 0,
      orderlist_payment: "",
      orderlist_paycode: "121-252-333-162",
      orderlist_paydate: "",
      //
      sum_before_discount: 0,
      promo_type: "",
      promo_rules: [],
      rule_applicable: [],
      usable_coupon: [],
      coupon_applicable: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    // this.changeNum = this.changeNum.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeday = this.handleChangeday.bind(this);
    this.goP1 = this.goP1.bind(this);
    this.goP2 = this.goP2.bind(this);
    this.goP3 = this.goP3.bind(this);
    this.goP4 = this.goP4.bind(this);
  }
  handleChange = (id, price) => async e => {
    let num = e.currentTarget.value;
    let numall = this.state.numall;
    numall[id] = +num;
    const total = this.state.total;
    total[id] = num * price;
    // console.log("total", total);
    // console.log("numall", numall);
    let subtotal = total.reduce(function(a, b) {
      return a + b;
    }, 0);
    let sum_before_discount = this.state.day ? subtotal * this.state.day : 0;
    await this.setState({ sum_before_discount: sum_before_discount });

    if (this.state.promo_type == "promo_price") {
      let valid_rules = this.state.promo_rules.filter(rule => {
        return sum_before_discount >= rule.requirement;
      });
      let rule_applicable = [];
      // console.log('valid_rule',valid_rules)
      if (valid_rules.length > 0) {
        rule_applicable = valid_rules.reduce((prev, next) => {
          // console.log('prev',prev.requirement)
          // console.log('next',next.requirement)

          return prev.requirement > next.requirement ? prev : next;
        });
        await this.setState({ rule_applicable: [rule_applicable] });
      }
      console.log("rule applicable", rule_applicable);
    }

    let sum = 0;
    if (this.state.rule_applicable.length > 0) {
      console.log("promo");
      console.log(this.state.rule_applicable);
      let p_discount_type =
        this.state.rule_applicable.length > 0
          ? this.state.rule_applicable[0].discount_type
          : "";
      let p_discount_unit =
        this.state.rule_applicable.length > 0
          ? this.state.rule_applicable[0].discount_unit
          : "";

      console.log("discount_type", p_discount_type);
      if (p_discount_type == "percentage") {
        sum = sum_before_discount * ("0." + p_discount_unit);
        console.log("sum", sum);
      } else if (p_discount_type == "currency") {
        sum = sum_before_discount - p_discount_unit;
      } else {
        sum = sum_before_discount;
      }
      if (this.state.coupon_applicable.length>0) {
        console.log("promo and coupon");
        let c_discount_type =
          this.state.coupon_applicable.length > 0
            ? this.state.coupon_applicable[0].discount_type
            : "";
        let c_discount_unit =
          this.state.coupon_applicable.length > 0
            ? this.state.coupon_applicable[0].discount_unit
            : "";
        if (c_discount_type == "percentage") {
          sum = sum * ("0." + c_discount_unit);
        } else if (c_discount_type == "currency") {
          sum = sum - c_discount_unit;
        } else {
          sum = sum;
        }
      } else {
        sum = sum;
      }
    } else {
      console.log("no promo");
      if (this.state.coupon_applicable.length>0) {
        console.log("no promo but coupon");
        let c_discount_type =
          this.state.coupon_applicable.length > 0
            ? this.state.coupon_applicable[0].discount_type
            : "";
        let c_discount_unit =
          this.state.coupon_applicable.length > 0
            ? this.state.coupon_applicable[0].discount_unit
            : "";
        if (c_discount_type == "percentage") {
          sum = sum_before_discount * ("0." + c_discount_unit);
        } else if (c_discount_type == "currency") {
          sum = sum_before_discount - c_discount_unit;
        } else {
          sum = sum_before_discount;
        }
      } else {
        sum = sum_before_discount;
      }
    }

    let numtotal = numall.reduce(function(a, b) {
      return a + b;
    }, 0);

    // const areaname = []
    // areaname[id] = area
    // let sum = num * total
    document.querySelector("#m" + id).innerHTML = total[id];
    console.log(`onChange fired with value: '${e.currentTarget.value}'`);
    console.log(this.state.num);
    console.log(this.state.total);
    console.log(this.state.areaname);
    this.setState({ total: total });
    this.setState({ sum: sum });
    this.setState({ num: num });
    // this.setState({areaname:areaname})
    this.setState({ numall: numall });
    this.setState({ numtotal: numtotal });
    // this.setState({type:this.state.type + areaname})
    // this.setState({type:this.state.areaname + areaname[id]})
  };

  // handleInput(e) {
  //   console.log(`onInput fired with value: '${e.currentTarget.value}'`);
  // }

  handleChangeday = async event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    await this.setState({
      [name]: value
    });
    const total = this.state.total;
    let subtotal =
      total.length > 0
        ? total.reduce(function(a, b) {
            return a + b;
          }, 0)
        : 0;
    let sum_before_discount = this.state.day ? subtotal * this.state.day : 0;
    await this.setState({ sum_before_discount: sum_before_discount });

    if (this.state.promo_type == "promo_price") {
      let valid_rules = this.state.promo_rules.filter(rule => {
        return sum_before_discount >= rule.requirement;
      });
      let rule_applicable = [];
      // console.log('valid_rule',valid_rules)
      if (valid_rules.length > 0) {
        rule_applicable = valid_rules.reduce((prev, next) => {
          // console.log('prev',prev.requirement)
          // console.log('next',next.requirement)

          return prev.requirement > next.requirement ? prev : next;
        });
        await this.setState({ rule_applicable: [rule_applicable] });
      }
      console.log("rule applicable", rule_applicable);
    }

    let sum = 0;
    if (this.state.rule_applicable.length > 0) {
      console.log("promo");
      console.log(this.state.rule_applicable);
      let p_discount_type =
        this.state.rule_applicable.length > 0
          ? this.state.rule_applicable[0].discount_type
          : "";
      let p_discount_unit =
        this.state.rule_applicable.length > 0
          ? this.state.rule_applicable[0].discount_unit
          : "";

      console.log("discount_type", p_discount_type);
      if (p_discount_type == "percentage") {
        sum = sum_before_discount * ("0." + p_discount_unit);
        console.log("sum", sum);
      } else if (p_discount_type == "currency") {
        sum = sum_before_discount - p_discount_unit;
      } else {
        sum = sum_before_discount;
      }
      if (this.state.coupon_applicable.length>0) {
        console.log("promo and coupon");
        let c_discount_type =
          this.state.coupon_applicable.length > 0
            ? this.state.coupon_applicable[0].discount_type
            : "";
        let c_discount_unit =
          this.state.coupon_applicable.length > 0
            ? this.state.coupon_applicable[0].discount_unit
            : "";
        if (c_discount_type == "percentage") {
          sum = sum * ("0." + c_discount_unit);
        } else if (c_discount_type == "currency") {
          sum = sum - c_discount_unit;
        } else {
          sum = sum;
        }
      } else {
        sum = sum;
      }
    } else {
      console.log("no promo");
      if (this.state.coupon_applicable.length>0) {
        console.log("no promo but coupon");
        let c_discount_type =
          this.state.coupon_applicable.length > 0
            ? this.state.coupon_applicable[0].discount_type
            : "";
        let c_discount_unit =
          this.state.coupon_applicable.length > 0
            ? this.state.coupon_applicable[0].discount_unit
            : "";
        if (c_discount_type == "percentage") {
          sum = sum_before_discount * ("0." + c_discount_unit);
        } else if (c_discount_type == "currency") {
          sum = sum_before_discount - c_discount_unit;
        } else {
          sum = sum_before_discount;
        }
      } else {
        sum = sum_before_discount;
      }
    }
    await this.setState({ sum: sum });
  };
  // numberChange(event) {
  //   const value = event.target.value;
  //   this.setState({financialGoal: value});
  // }
  // changeNum(event) {
  //   this.setState({
  //   num: event.target.value,
  //   total: event.target.value * this.state.price
  //   })
  // };

  // 在父層宣告 Method 可供下面的子層傳入, 讓子層可以呼叫到父層的 Method
  goP1() {
    this.setState({
      showOrder: 1
    });
  }
  goP2() {
    this.setState((state, props) => ({
      showOrder: 2,
      date: state.date,
      day: state.day,
      sum: state.sum,
      orderlist_camplistid: state.camplist_id,
      orderlist_camplistimage: state.camplistData.camplist_image,
      orderlist_camplistname: state.camplistData.camplist_name,
      orderlist_number: state.numtotal,
      //全部總計
      orderlist_total: state.sum
    }));
  }

  goP3() {
    this.setState((state, props) => ({
      showOrder: 3,
      sum: state.sum,
      orderlist_camplistid: state.camplist_id,
      orderlist_camplistimage: state.camplistData.camplist_image,
      orderlist_camplistname: state.camplistData.camplist_name,
      orderlist_number: state.numtotal,
      orderlist_total: state.sum
    }));
  }

  goP4() {
    this.postOrderData();
    if(this.state.coupon_applicable.length>0){
      this.updateCouponValid(3)
    }
  }

  componentDidMount() {
    this.fetchData();
    // this.fetchCamptypeData();
    console.log(this.state.price);
    this.fetchPromoAndUsableCoupon();
  }

  async fetchData() {
    const url = "http://localhost:5555/camplist/" + this.state.camplist_id;
    await fetch(url)
      .then(response => response.json())
      .then(parsedJSON =>
        this.setState({
          camplistData: parsedJSON
        })
      );
    // .catch(error => console.log(error));
    const url2 = "http://localhost:5555/camptype";
    await fetch(url2)
      .then(response => response.json())
      .then(parsedJSON => {
        console.log(parsedJSON);

        let camptypeData = parsedJSON.filter(
          data => data.camp_id === this.state.camplist_id
        );

        // console.log("camptypeData");
        // console.log(camptypeData);
        // console.log(camptypeData.camp_pricew);
        this.setState(
          { camptypeData: camptypeData, price: camptypeData.camp_pricew },
          () => {
            console.log(this.state.price);
          }
        );
      })
      .catch(error => console.log(error));
  }

  fetchPromoAndUsableCoupon = async () => {
    let response = await fetch(
      "http://localhost:5000/getpromoandusablecoupon",
      {
        method: "POST",
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({
          mem_account: localStorage.getItem("mem_account"),
          camp_id: this.state.camplist_id
        })
      }
    );

    if (!response.ok) throw new Error(response.statusText);
    const responseJsonObject = await response.json();
    console.log(responseJsonObject);
    await this.setState({
      promo_type: responseJsonObject.promo_type,
      promo_rules: responseJsonObject.promo_rules
        ? responseJsonObject.promo_rules
        : [],
      usable_coupon: responseJsonObject.usable_coupons
        ? responseJsonObject.usable_coupons
        : []
    });
    switch (this.state.promo_type) {
      case "promo_user":
        let mem_level = localStorage.getItem("memLevel_id");
        switch (mem_level) {
          case "露營新手":
            mem_level = 1;
            break;
          case "業餘露營家":
            mem_level = 2;
            break;
          case "露營達人":
            mem_level = 3;
            break;
        }
        this.setState({
          rule_applicable: this.state.promo_rules.filter(rule => {
            console.log(rule, mem_level);
            return rule.requirement == mem_level;
          })
        });
        break;
      case "promo_campType":
        let camplist_targetname = this.state.camplistData.camplist_targetname;
        console.log(camplist_targetname);
        this.setState({
          rule_applicable: this.state.promo_rules.filter(rule => {
            return rule.requirement == camplist_targetname;
          })
        });
        break;
    }
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log("getDerivedStateFromProps");
    // console.log(nextProps);
    // console.log(prevState);
  }

  // fetchCamptypeData() {
  //   const url = "http://localhost:5555/camptype";
  //   return fetch(url)
  //     .then(response => response.json())
  //     .then(parsedJSON => {

  //       let camptypeData = parsedJSON.filter(function (data) {
  //         return (
  //           data.camp_id === this.state.camplist_id
  //         )
  //       })
  //       console.log('camptypeData')
  //       console.log(camptypeData)
  //       return this.setState({ camptypeData: camptypeData, price: camptypeData.camp_pricew })
  //     }
  //     )
  //     .catch(error => console.log(error));
  // }

  postOrderData() {
    this.setState({ orderlist_id: new Date().getTime() }, function() {
      var orderData = {
        id: this.state.orderlist_id,
        orderlist_memid: localStorage.getItem("mem_id"),
        orderlist_memname: localStorage.getItem("mem_account"),
        orderlist_memtel: this.state.orderlist_memtel,
        orderlist_memmail: this.state.orderlist_memmail,
        orderlist_memtaddress: localStorage.getItem("mem_address"),
        orderlist_camplistid: this.state.orderlist_camplistid,
        orderlist_camplistimage: this.state.orderlist_camplistimage,
        orderlist_camplistname: this.state.orderlist_camplistname,
        orderlist_number: this.state.orderlist_number,
        orderlist_total: this.state.orderlist_total,
        orderlist_payment: this.state.orderlist_payment,
        orderlist_paycode: this.state.orderlist_paycode,
        orderlist_paydate: this.state.orderlist_paydate
      };

      const url = "http://localhost:5555/orderlist";
      return (
        fetch(url, {
          method: "POST",
          headers: new Headers({
            Accept: "application/json",
            "Content-Type": "application/json"
          }),
          body: JSON.stringify(orderData)
        })
          .then(response => response.json())
          // 確定已經新增訂單進 json 後再轉到第三步驟 (callback function)
          .then(parsedJSON => this.setState({ showOrder: 4 }))
          .catch(error => console.log(error))
      );
    });
  }

  updateCouponValid= async(valid_status)=>{
      let gain_record_id = this.state.coupon_applicable[0].gain_record_id
      const response = await fetch('http://localhost:5000/updatecouponvalid', {
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        body:JSON.stringify({mem_account:localStorage.getItem('mem_account'),coupon_valid:valid_status,gain_record_id:gain_record_id})
      })
      if (!response.ok) throw new Error(response.statusText)
      const responseJsonObject = await response.json()
      console.log(responseJsonObject)
  }

  handleCouponFieldChange = async e => {
    let coupon_code = e.target.value;
    let coupon_applicable = this.state.usable_coupon.filter(coupon => {
      return coupon_code == coupon.coupon_code;
    });
    await this.setState({ coupon_applicable: coupon_applicable });

    const total = this.state.total;
    let subtotal =
      total.length > 0
        ? total.reduce(function(a, b) {
            return a + b;
          }, 0)
        : 0;
    let sum_before_discount = this.state.day ? subtotal * this.state.day : 0;
    await this.setState({ sum_before_discount: sum_before_discount });

    if (this.state.promo_type == "promo_price") {
      let valid_rules = this.state.promo_rules.filter(rule => {
        return sum_before_discount >= rule.requirement;
      });
      let rule_applicable = [];
      // console.log('valid_rule',valid_rules)
      if (valid_rules.length > 0) {
        rule_applicable = valid_rules.reduce((prev, next) => {
          // console.log('prev',prev.requirement)
          // console.log('next',next.requirement)

          return prev.requirement > next.requirement ? prev : next;
        });
        await this.setState({ rule_applicable: [rule_applicable] });
      }
      console.log("rule applicable", rule_applicable);
    }

    let sum = 0;
    if (this.state.rule_applicable.length > 0) {
      console.log("promo");
      console.log(this.state.rule_applicable);
      let p_discount_type =
        this.state.rule_applicable.length > 0
          ? this.state.rule_applicable[0].discount_type
          : "";
      let p_discount_unit =
        this.state.rule_applicable.length > 0
          ? this.state.rule_applicable[0].discount_unit
          : "";

      console.log("discount_type", p_discount_type);
      if (p_discount_type == "percentage") {
        sum = sum_before_discount * ("0." + p_discount_unit);
        console.log("sum", sum);
      } else if (p_discount_type == "currency") {
        sum = sum_before_discount - p_discount_unit;
      } else {
        sum = sum_before_discount;
      }
      if (this.state.coupon_applicable.length>0) {
        console.log("promo and coupon");
        let c_discount_type =
          this.state.coupon_applicable.length > 0
            ? this.state.coupon_applicable[0].discount_type
            : "";
        let c_discount_unit =
          this.state.coupon_applicable.length > 0
            ? this.state.coupon_applicable[0].discount_unit
            : "";
        if (c_discount_type == "percentage") {
          sum = sum * ("0." + c_discount_unit);
        } else if (c_discount_type == "currency") {
          sum = sum - c_discount_unit;
        } else {
          sum = sum;
        }
      } else {
        sum = sum;
      }
    } else {
      console.log("no promo");
      if (this.state.coupon_applicable.length>0) {
        console.log("no promo but coupon");
        let c_discount_type =
          this.state.coupon_applicable.length > 0
            ? this.state.coupon_applicable[0].discount_type
            : "";
        let c_discount_unit =
          this.state.coupon_applicable.length > 0
            ? this.state.coupon_applicable[0].discount_unit
            : "";
        if (c_discount_type == "percentage") {
          sum = sum_before_discount * ("0." + c_discount_unit);
        } else if (c_discount_type == "currency") {
          sum = sum_before_discount - c_discount_unit;
        } else {
          sum = sum_before_discount;
        }
      } else {
        sum = sum_before_discount;
      }
    }
    await this.setState({ sum: sum });
  };

  render() {
    // console.log(this.state.camptypeData);
    // console.log(this.state.numall);
    // console.log(this.state.areaname);
    // console.log(this.state.camptypeData.total)
    // console.log(this.state.camptypeData.camp_pricew)
    return (
      <>
        {this.state.showOrder === 1 && (
          <Container className="">
            <Row className="mt-3">
              <Col sm={9}>
                <div className="ground fs-24 fw-bold">營位預訂</div>
                <h3 className="fs-20 grass">時間</h3>
                <Form.Group className="row" controlId="formGridState">
                  <div className="col-md-5">
                    <Form.Label>
                      選擇入住日期
                      <span className="fs-14 watermelon">(營位只開放預訂兩個月內)</span>
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="date"
                      value={this.state.date}
                      onChange={this.handleChangeday}
                      min="2019-06-05"
                      max="2019-08-05"
                    />
                  </div>
                  <div className="col-md-5">
                    <Form.Label>選擇天數</Form.Label>
                    <Form.Control
                      as="select"
                      name="day"
                      value={this.state.day}
                      onChange={this.handleChangeday}
                    >
                      <option value="0">請選擇天數</option>
                      <option value="1">1晚</option>
                      <option value="2">2晚</option>
                      <option value="3">3晚</option>
                      <option value="4">4晚</option>
                    </Form.Control>
                  </div>
                </Form.Group>
                <h3 className="fs-20 grass">營區</h3>
                <Table responsive>
                  <thead
                    className="bg-sunshine"
                    style={{ textAlign: "center" }}
                  >
                    <tr className="text-center">
                      <th>圖片</th>
                      <th>區域 </th>
                      <th>日期/每帳價格</th>
                      <th>帳數</th>
                      <th>小計</th>
                    </tr>
                  </thead>
                  {this.state.camptypeData.map(item => (
                    <tbody key={item.id}>
                      <tr className="text-center justify-content-center">
                        <td>
                          <Image
                            style={{ width: "150px" }}
                            src={item.camp_areapic}
                            rounded
                          />
                        </td>
                        <td>{item.camp_area}</td>
                        <td style={{ width: "150px" }}>
                          <p>{item.camp_pricew}</p>
                        </td>
                        <td style={{ width: "150px" }}>
                          <div className="">
                            <Form.Control
                              type="number"
                              name="num"
                              min="0"
                              max="6"
                              id={`custom-${item.id}`}
                              onChange={this.handleChange(
                                item.id,
                                item.camp_pricew,
                                item.camp_area
                              )}
                              onInput={this.handleInput}
                              // value={this.state.num}
                              // onChange={this.handleChange}
                            />
                          </div>
                        </td>
                        <td>
                          <p
                            id={"m" + item.id}
                            value={item.camp_pricew * this.state.num }
                          >
                            0
                          </p>
                          {/* <p><NumberFormat id={'m' + item.id} className="forest" value={item.camp_pricew * this.state.num} displayType={'text'} thousandSeparator={true} prefix={'NT$'} /></p> */}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </Table>

                
                  <h3 className="fs-20 grass">使用折扣</h3>

                  <Form>
                    <Form.Group className="d-flex">
                      <Form.Label className="col-md-2">折扣券代碼</Form.Label>
                      <input
                        type="text"
                        list="coupons"
                        onChange={this.handleCouponFieldChange}
                      />
                      <datalist id="coupons">
                        {this.state.usable_coupon.map(coupon => {
                          return (
                            <option value={coupon.coupon_code}>
                              優惠券:{coupon.coupon_name}{" "}
                            </option>
                          );
                        })}
                      </datalist>

                      {/* <Button className="btn-grass" type="button" onClick={this.handleSubmitCoupon}>
                      輸入
                    </Button> */}
                    </Form.Group>
                  </Form>
                </Col>
              
              <div>
                <Col
                  sm={2}
                  className="orderlist"
                  style={{ textAlign: "center" }}
                >
                  <div>
                    <p>訂購清單</p>
                    <div className="d-flex my-3">
                      日期
                      <div className="ml-3 grass">
                        <p>{this.state.date}</p>
                      </div>
                    </div>
                    <div className="d-flex my-3">
                      天數
                      <div className="ml-3 grass">
                        <p>{this.state.day}晚</p>
                      </div>
                    </div>
                    <div className="d-flex my-3">
                      帳數
                      <div className="ml-3 grass">
                        <p>{this.state.numtotal}帳</p>
                      </div>
                    </div>
                    {this.state.rule_applicable.length > 0 ? (
                      <div className="d-flex my-3">
                        <span>{this.state.rule_applicable[0].promo_name}</span>
                        <span className="watermelon ml-3">
                          {this.state.rule_applicable[0].discount_unit}
                          {this.state.rule_applicable[0].discount_type ==
                          "percentage" ? (
                            "折"
                          ) : this.state.rule_applicable[0].discount_type ==
                            "currency" ? (
                            "元"
                          ) : (
                            <></>
                          )}
                        </span>
                      </div>
                    ) : (
                      <></>
                    )}
                    {this.state.coupon_applicable.length > 0 ? (
                      <div className="d-flex my-3">
                        <span>
                          {this.state.coupon_applicable[0].coupon_name}
                        </span>
                        <span className="watermelon ml-3">
                          -{this.state.coupon_applicable[0].discount_unit}
                          {this.state.coupon_applicable[0].discount_type ==
                          "percentage" ? (
                            "折"
                          ) : this.state.coupon_applicable[0].discount_type ==
                            "currency" ? (
                            "元"
                          ) : (
                            <></>
                          )}
                        </span>
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="d-flex total my-3 pt-3">
                      總計
                      <div className="forest ml-3">
                        <p>{this.state.sum}</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="link"
                    className="btn-grass search_button"
                    onClick={this.goP2}
                  >
                    立即結帳
                  </Button>
                </Col>
              </div>
            </Row>
          </Container>
        )}
        {this.state.showOrder === 2 && (
          <CampOrder02
            num={this.state.numtotal}
            sum={this.state.sum}
            date={this.state.date}
            day={this.state.day}
            order={this.state.camplistData}
            goP1={this.goP1}
            goP3={this.goP3}
            handleInputChange={this.handleInputChange}
          />
        )}
        {this.state.showOrder === 3 && (
          <CampOrder03
            order={this.state.camplistData}
            goP2={this.goP2}
            goP4={this.goP4}
            handleInputChange={this.handleInputChange}
          />
        )}
        {this.state.showOrder === 4 && (
          <CampOrder04 orderid={this.state.orderlist_id} />
        )}
      </>
    );
  }
}

export default CampOrderP1;

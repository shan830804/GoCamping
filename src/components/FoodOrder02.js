import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
// import { FaHome } from 'react-icons/fa';
import { Row, Col, Container, ButtonToolbar, Button, InputGroup, FormControl } from "react-bootstrap";

class FoodOrder02 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "買食材-訂購明細",
      //新增用的預設值
      id: new Date().getTime(),
      saleorder_memid: "",
      saleorder_id: "",
      saleorder_memname: "lolll",
      saleorder_memtel: "",
      saleorder_memmail: "",
      saleorder_memtaddress: "",
      saleorder_foodname: "",
      saleorder_number: "",
      saleorder_total: "",
      saleorder_payment: "",
      saleorder_paycode: "",
      saleorder_paydate: "2019-03-04"
    };
  }
  //上一頁下一頁
  goP1 = () => {
      this.props.goP1();
  }
  goP3 = () => {
    this.props.goP3();
  }

  // 網頁標題
  componentDidMount() {
    document.title = this.state.title;
  }
  render() {
    const { index, direction } = this.state;
    // console.log(this.props.order.salepage_name)
    // console.log(this.state.salepageData)
    const mem_account = localStorage.getItem("mem_account")
    const mem_id = localStorage.getItem("mem_id")
    const mem_address = localStorage.getItem("mem_address")
    return (
      <>
        {/* 進入訂單第一步 訂單明細*/}
        <Container className="mt-1">
          <Row className="mt-5">
            <Col>
              <div className=" forder01-title fs-32">填寫訂購人資訊</div>
            </Col>
          </Row>
        </Container>
        {/* 訂購清單 */}
        <Container className="mt-1">
          <Row className="mt-3">
            <Col>
              <div className="ground fs-24"><span className="watermelon">*</span>收件人資訊</div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-1">
          <Row className="mt-3">            
            <div className="forder02-dn row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">訂單編號：</label>
                <input defaultValue={this.state.id} type="text" className="form-control col-md-7 col-sm-12 bg-white" placeholder="" />
            </div>
            <div className="forder02-dn row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">會員編號：</label>
                <input defaultValue={mem_id} type="text" className="form-control col-md-7 col-sm-12 bg-white" placeholder="" />
            </div>
            <div className="row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">收件人姓名：</label>
                <input defaultValue={mem_account}
                       type="text" 
                       className="form-control col-md-7 col-sm-12 bg-white" 
                       placeholder="" 
                       onChange={this.props.handleInputChange} 
                       name="saleorder_memname" />
            </div>
            <div className="row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">收件人手機：</label>
                <input defaultValue=""
                       type="tel" 
                       className="form-control col-md-7 col-sm-12 bg-white" 
                       pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" 
                       placeholder="" 
                       onChange={this.props.handleInputChange} 
                       name="saleorder_memtel" />
            </div>
            <div className="row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">收件人信箱：</label>
                <input defaultValue="" 
                       type="email" 
                       className="form-control col-md-7 col-sm-12 bg-white" 
                       placeholder="" 
                       onChange={this.props.handleInputChange} 
                       name="saleorder_memmail"/>
            </div>
            <div className="row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">收件人地址：</label>
                <input defaultValue={mem_address} 
                       type="text" 
                       className="form-control col-md-7 col-sm-12 bg-white" 
                       placeholder="" 
                       onChange={this.props.handleInputChange} 
                       name="saleorder_memtaddress"/>
            </div>
            <div className="row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">配送日期：</label>
                <input defaultValue="" 
                       type="date" 
                       className="form-control col-md-7 col-sm-12 bg-white" 
                       placeholder="" 
                       onChange={this.props.handleInputChange} 
                       name="saleorder_paydate"/>
            </div>
          </Row>
        </Container>
        <Container className="mt-1">
          <Row className="mt-3">
            <Col>
              <div className="ground fs-24"><span className="watermelon">*</span>選擇付款方式</div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-1">
          <Row className="mt-3">
            <Col>
            <div className="border mar-center p-5 ml-5" style={{maxWidth: '960px'}}>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="apply_payment" id="apply_payment2"
                            value="1" defaultChecked/>
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            ATM 轉帳
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="apply_payment" id="apply_payment3"
                            value="2"/>
                        <label className="form-check-label" htmlFor="exampleRadios3">
                            ibon 付款
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="apply_payment" id="apply_payment"
                            value="3"/>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            信用卡付款(可接受VISA, Master, JCB, 聯合信用卡)
                        </label>
                    </div>
                </div>
            </Col>
          </Row>
        </Container>

        {/* 送出或返回button */}
        <Container className="forder01-btncon">
          <Row className="mt-2">
            <Col>
              {/* justify-content-between */}
              <ButtonToolbar className="justify-content-end">
                <Button
                  className="bg-food-default forder-btn mr-2 "
                  style={{ width: "30%" }}
                  sm={"block"}
                  onClick={this.goP1}
                >
                  上一步
                </Button>
                <Button
                  className="bg-sunshine food-default forder-btn"
                  style={{ width: "30%" }}
                  sm={"block"}
                  onClick={this.goP3}
                >
                  下一步，前往結帳
                </Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default FoodOrder02;

import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
// import { FaHome } from 'react-icons/fa';
import { Row, Col, Container, ButtonToolbar, Button,Form } from "react-bootstrap";

class CampOrder03 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //新增用的預設值
      id: new Date().getTime(),
      orderlist_memid: "",
      orderlist_id: "",
      orderlist_memname: "lolll",
      orderlist_memtel: "",
      orderlist_memmail: "",
      orderlist_memtaddress: "",
      orderlist_foodname: "",
      orderlist_number: "",
      orderlist_total: "",
      orderlist_payment: "",
      orderlist_paycode: "",
      orderlist_paydate: "2019-03-04"
    };
  }
  //上一頁下一頁
  goP2 = () => {
      this.props.goP2();
  }
  //跳出alert
  goP4 = () => {
    var form = document.forms["theForm"];
    if(form.orderlist_memtel.value == "" | form.orderlist_memmail.value == "")
    {
      alert("請填入完整資料");
    }else{
      alert("訂單已送出")
      this.props.goP4();
    }
    
  }
  // 網頁標題
  // componentDidMount() {
  //   document.title = this.state.title;
  // }
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
              <div className=" title fs-32">填寫訂購人資訊</div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-1">
        <Row className="mt-3">
            <Col>
            <form name="theForm" id="theForm" method="post" > 
            <div className="forder02-dn row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">訂單編號：</label>
                <input defaultValue={this.state.id} type="text" className="form-control col-md-7 col-sm-12 bg-white" placeholder="" />
            </div>
            <div className="forder02-dn row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">會員編號：</label>
                <input defaultValue={mem_id} type="text" className="form-control col-md-7 col-sm-12 bg-white" placeholder="" />
            </div>
            <h3 className="fs-24 grass">預訂人資訊
            <span className="fs-14 watermelon ml-3">(以下皆為必填欄位)</span>
            </h3>
            <div className="row form-group col-md-8 mt-5">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">預訂人姓名：</label>
                <input defaultValue={mem_account}
                       type="text" 
                       className="form-control col-md-7 col-sm-12 bg-white" 
                       placeholder="" 
                       onChange={this.props.handleInputChange} 
                       name="orderlist_memname" />
            </div>
            <div className="row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">預訂人手機：</label>
                <input defaultValue=""
                       type="tel" 
                       className="form-control col-md-7 col-sm-12 bg-white" 
                       pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" 
                       placeholder="" 
                       onChange={this.props.handleInputChange} 
                       name="orderlist_memtel" />
            </div>
            <div className="row form-group col-md-8">
                <label className="fs-16 col-md-3 col-sm-12" htmlFor="">預訂人信箱：</label>
                <input defaultValue="" 
                       type="email" 
                       className="form-control col-md-7 col-sm-12 bg-white" 
                       placeholder="" 
                       onChange={this.props.handleInputChange} 
                       name="orderlist_memmail"/>
            </div>
          
            </form>

            </Col>
          </Row>
        </Container>
        
        <Container className="mt-1">
          <Row className="mt-3">
            <Col>
              <div className="grass fs-24"><span className="watermelon"></span>選擇付款方式</div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-1">
          <Row className="mt-3">
            <Col>
           
            <div className="m-3">
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

        <Container>
          <Row className="mt-2">
            <Col>
              <ButtonToolbar className="justify-content-end">
                <Button
                  variant="link" 
                  className="goback-btn  mr-2 "
                  style={{ width: "30%" }}
                  sm={"block"}
                  onClick={this.goP2}
                >
                  上一步
                </Button>
                <Button
                  variant="link" 
                  className="bg-sunshine next-btn "
                  style={{ width: "30%" }}
                  sm={"block"}
                  onClick={this.goP4}
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
export default CampOrder03;

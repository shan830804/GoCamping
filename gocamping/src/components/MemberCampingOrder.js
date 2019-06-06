import React from 'react';
import { Nav, Image, Tab, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

class MemberCampingOrder extends React.Component {
    constructor() {
        super()
        this.state = {  
            orderlistData: [] 
        }
    }

    componentDidMount() {
        fetch("http://localhost:5555/orderlist", {
            method: "GET",
            headers: new Headers({
            Accept: "application/json",
            "Content-Type": "application/json"
            })
        })
        .then(response => {
            //ok 代表狀態碼在範圍 200‐299
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(jsonObject => {
            // console.log(jsonObject);
            this.setState({ orderlistData: jsonObject.filter(function(data) {
                return data.orderlist_memid == localStorage.getItem("mem_id");
              })                          
            });
        })
        .catch(function(err) {
            // Error :(
        });
    }    

    render() {    
    return (
        <main className="col-md-10 col-sm-12 my-2">
            <h5 className="text-center rwd_title">營地訂單</h5>
            <Tab.Container defaultActiveKey="coming">
                <Nav variant="tabs" defaultActiveKey="coming">
                    <Nav.Item>
                        <Nav.Link eventKey="coming" href="#">即將到來</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="finished">已完成</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="cancelled">已取消</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="coming">
                        {this.state.orderlistData.map(item => (
                        <div key={item.id} className="row border p-sm-3 mt-3">
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 rwd_orderavatar">
                                <figure className="order_avatar m-0">
                                    <Image src={item.orderlist_camplistimage} />
                                </figure>
                                <div className="d-flex flex-column justify-content-center align-items-start m-2 rwd_details_top">
                                <div className="text-right">
                                    <Button className="btn btn-grass details" href="#">查看細節</Button>
                                </div>
                                <span className="text-right fs-18 fw-light">總金額 NT${item.orderlist_total} </span>
                            </div>
                            </div>
                            <div className="col-sm-12 seperate_line m-2 mb-0"></div>
                            <div className="col-xl-8 col-lg-7 col-md-8 col-sm-12 d-flex rwd_ordercontent">
                                <div className="d-flex flex-column justify-content-center">                                    
                                    <span className="fw-light mb-sm-1">營地名稱：{item.orderlist_camplistname}</span>                                    
                                    <span className="fw-light mb-sm-1">帳數：{item.orderlist_number}</span>
                                    {/* <span className="fw-light mb-sm-1">配送日期：{item.orderlist_paydate}</span> */}
                                    <span className="fw-light">訂單編號：{item.id}</span>
                                </div>
                            </div>    
                                <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 p-0 d-flex justify-content-end align-content-between flex-wrap rwd_details_bottom">
                                    <div className="text-right">
                                        <Button className="btn btn-grass details" href="#">查看細節</Button>
                                    </div>
                                    {/* <span className="text-right fs-18 fw-light">總金額 <NumberFormat className="watermelon" value={item.orderlist_total} displayType={'text'} thousandSeparator={true} prefix={'NT$'} /></span> */}
                                      <span className="text-right fs-18 fw-light" >總金額 NT${item.orderlist_total} </span>
                                </div>
                            
                        </div>
                        ))}
                    </Tab.Pane>
                    <Tab.Pane eventKey="finished">
                        <div>
                            <p className="text-center my-3 p-3 fs-20 fw-light border">尚無訂單</p>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cancelled">
                        <div>
                            <p className="text-center my-3 p-3 fs-20 fw-light border">尚無訂單</p>
                        </div>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </main>
    )}
}    

export default MemberCampingOrder
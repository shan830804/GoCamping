import React from 'react';
import { Nav, Image, Tab, Button } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

class MemberFoodOrder extends React.Component {
    constructor() {
        super()
        this.state = {
            saleorderData: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:5555/saleorder", {
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
                this.setState({
                    saleorderData: jsonObject.filter(function (data) {
                        return data.saleorder_memid == localStorage.getItem("mem_id");
                    })
                });
            })
            .catch(function (err) {
                // Error :(
            });
    }

    render() {
        return (
            <main className="col-sm-10 my-2">
                <Tab.Container defaultActiveKey="pending">
                    <Nav variant="tabs" defaultActiveKey="pending">
                        <Nav.Item>
                            <Nav.Link eventKey="pending" href="#">尚未付款</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="paid">待出貨</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="finished">已完成</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="cancelled">已取消</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content >
                        <Tab.Pane eventKey="pending">
                            {this.state.saleorderData.map(item => (
                                <div key={item.id} className="row border p-sm-3 mt-3">
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 rwd_orderavatar">
                                        <figure className="order_avatar m-0">
                                            <Image src={item.saleorder_salepageimage} />
                                        </figure>
                                        <div className="d-flex flex-column justify-content-center align-items-start m-2 rwd_details_top">
                                            {/* <div className="text-right">
                                                <Button className="btn btn-grass" href="#">查看細節</Button>
                                            </div> */}
                                            <span className="text-right fs-18 fw-light">總金額 <NumberFormat className="watermelon" value={item.saleorder_total} displayType={'text'} thousandSeparator={true} prefix={'NT$'} /></span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 seperate_line m-2 mb-0"></div>
                                    <div className="col-xl-8 col-lg-7 col-md-8 col-sm-12 d-flex rwd_ordercontent">
                                        <div className="d-flex flex-column justify-content-center">
                                            <span className="fw-light mb-sm-1">商品名稱：{item.saleorder_salepagename}</span>
                                            <span className="fw-light mb-sm-1">數量：{item.saleorder_number}</span>
                                            <span className="fw-light mb-sm-1">單價：{item.saleorder_price}</span>
                                            <span className="fw-light mb-sm-1">ibon代碼：144 850 392 495</span>
                                            <span className="fw-light mb-sm-1">繳費截止日期：2019-06-08 23:59:59</span>
                                            <span className="fw-light mb-sm-1">配送日期：{item.saleorder_paydate}</span>
                                            <span className="fw-light">訂單編號：{item.id}</span>
                                        </div>
                                    </div>    
                                        <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 p-0 d-flex justify-content-end align-content-between flex-wrap rwd_details_bottom">
                                            <div className="text-right">
                                                <Button className="btn btn-grass details" href="#">查看細節</Button>
                                            </div>
                                            <span className="text-right fs-18 fw-light">總金額 <NumberFormat className="watermelon" value={item.saleorder_total} displayType={'text'} thousandSeparator={true} prefix={'NT$'} /></span>
                                        </div>
                                    
                                </div>
                            ))}
                        </Tab.Pane>
                        <Tab.Pane eventKey="paid">
                            <div>
                                <p className="text-center my-3 p-3 fs-20 fw-light border">尚無訂單</p>
                            </div>
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
        )
    }
}

export default MemberFoodOrder
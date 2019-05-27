import React from 'react';
import { Nav, Image, Tab, Button } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

class MemberFavorite extends React.Component {
    constructor() {
        super()
        this.state = {  
            saleloveData: [] 
        }
    }

    componentDidMount() {
        fetch("http://localhost:5555/salelove", {
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
            this.setState({ saleloveData: jsonObject.filter(function(data) {
                return data.salelove_memid == localStorage.getItem("mem_id");
              })                          
            });
        })
        .catch(function(err) {
            // Error :(
        });
    }    

    render() {    
    return (
        <main className="col-sm-10 my-2">
            <Tab.Container defaultActiveKey="pending">
                <Nav variant="tabs" defaultActiveKey="pending">
                    <Nav.Item>
                        <Nav.Link eventKey="pending" href="#">我的願望清單</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                        <Nav.Link eventKey="paid">待出貨</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="finished">已完成</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="cancelled">已取消</Nav.Link>
                    </Nav.Item> */}
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="pending">
                        {this.state.saleloveData.map(item => (
                        <div key={item.id} className="d-flex row border p-sm-3 mt-3">
                            <div className="col-sm-2 d-flex align-items-center p-sm-0">
                                <figure className="order_avatar m-0">
                                    <Image src={item.salelove_salepageimage} />
                                </figure>
                            </div>
                            <div className="col-sm-10 d-flex justify-content-between">
                                <div className="d-flex flex-column justify-content-center">                                    
                                    <span className="fw-light mb-sm-1">商品名稱：{item.salelove_salepagename}</span>                                                                        
                                    <span className="fw-light mb-sm-1">商品售價：{item.salelove_salepageprice}</span>                                    
                                </div>
                                <div className="d-flex flex-column justify-content-between">
                                    <div className="text-right">
                                        <Button className="btn btn-grass" href={"/Food/FoodDetails/" + item.salelove_salepageid}>查看細節</Button>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        ))}
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="paid">
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
                    </Tab.Pane> */}
                </Tab.Content>
            </Tab.Container>
        </main>
    )}
}    

export default MemberFavorite
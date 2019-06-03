import React from 'react';
import { Nav, Tab, Card, Row, Col, CardDeck } from 'react-bootstrap';
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
                return data.salelove_memid === localStorage.getItem("mem_id");
              })                          
            });
        })
        .catch(function(err) {
            // Error 
        });
    }    

    render() {    
    return (
        <main className="col-sm-10 my-2">
            <Tab.Container defaultActiveKey="pending">
                <Nav variant="tabs" defaultActiveKey="pending">
                    <Nav.Item>
                        <Nav.Link eventKey="pending" href="#">我收藏的食材</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="paid">我收藏的營地</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="finished">我收藏的活動</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Tab.Container>
              <Row >
            {this.state.saleloveData.map(item => (
              <Col lg={3} md={4} sm={6} xs={6} key={item.id} className="flist-col">
              <CardDeck>    
              <Card.Link className="py-1" href={"/Food/FoodDetails/" + item.salelove_salepageid} >
                <Card className="ml-0 flist-card">
                  <figure className="m-0">
                    <Card.Img className="flist-cardImg" variant="top" src={item.salelove_salepageimage} />
                  </figure>
                  <Card.Body className="p-1 flist-cardBody">
                    <Card.Text className="food-default px-1 flist-cardName">{item.salelove_salepagename}</Card.Text>
                    <Card.Text className="text-right food-ccc food-fs12 mb-0">
                      <NumberFormat className="" value={item.salelove_salepagesuggestprice} displayType={'text'} thousandSeparator={true} prefix={'NT$'} />
                    </Card.Text>
                    <Card.Text className="text-right food-default forest fw-bold flist-price" >
                      <NumberFormat value={item.salelove_salepageprice} displayType={'text'} thousandSeparator={true} prefix={'NT$'} />
                    </Card.Text>
                  </Card.Body>                  
                </Card>
              </Card.Link> 
              </CardDeck>                                   
              </Col>
            ))}
            </Row>    
             {/* <div className="d-flex flex-wrap pl-4">
                {this.state.saleloveData.map(item => (
                <Card.Link className="ml-0 mr-3" key={item.id} href={"/Food/FoodDetails/" + item.salelove_salepageid}>
                  <Card className="mt-3 flist-card"  style={{ width: "180px", height: "280px" }}>
                  <figure>
                    <Card.Img
                      variant="top"
                      className="flist-img"
                      src={item.salelove_salepageimage}
                      style={{ width: "178px"}}
                    />
                  </figure>
                    <Card.Body style={{ width: "100%"}} className="p-1">
                      <Card.Title className="fs-16 food-default">
                        {item.salelove_salepagename}
                      </Card.Title>
                      <div className="" style={{ width: "100%"}}>
                        <Card.Text className="flist-suggestprice flist-cardText fs-12 food-default text-right flist-cardMargin mt-3">
                          <NumberFormat value={item.salelove_salepagesuggestprice} displayType={'text'} thousandSeparator={true} prefix={'NT$'} />
                        </Card.Text>
                        <Card.Text className="flist-cardText fs-20 forest text-right flist-cardMargin">                      
                          <NumberFormat value={item.salelove_salepageprice} displayType={'text'} thousandSeparator={true} prefix={'NT$'} />
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Card.Link>
              ))}
            </div> */}
        </main>
    )}
}    

export default MemberFavorite
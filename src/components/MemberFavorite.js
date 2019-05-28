import React from 'react';
import { Nav, Tab, Card } from 'react-bootstrap';
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
             <div className="d-flex flex-wrap pl-4">
                {this.state.saleloveData.map(item => (
                <Card.Link className="ml-0 mr-3" key={item.id} href={"/Food/FoodDetails/" + item.salelove_salepageid}>
                  <Card className="mt-3 flist-card"  style={{ width: "200px", height: "283px" }}>
                    <Card.Img
                      variant="top"
                      className="flist-img"
                      src={item.salelove_salepageimage}
                      style={{ width: "198px", height: "143px" }}
                    />
                    <Card.Body style={{ width: "100%"}} className="p-2">
                      <Card.Title className="fs-16 food-default">
                        {item.salelove_salepagename}
                      </Card.Title>
                      <div className="mt-5 " style={{ width: "100%"}}>
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
            </div>
        </main>
    )}
}    

export default MemberFavorite
import React from 'react';
import { Nav, Tab, Card, Col, CardDeck, Row } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import MemberCampCard from './MemberCampCard'

class MemberFavorite extends React.Component {
  constructor() {
    super()
    this.state = {
      saleloveData: [],
      camp_collects: [],
      camp_imgs: []
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
        this.setState({
          saleloveData: jsonObject.filter(function (data) {
            return data.salelove_memid === localStorage.getItem("mem_id");
          })
        });
      })
      .catch(function (err) {
        // Error 
      });

    fetch("http://localhost:5000/getcampcollect", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({ mem_account: localStorage.getItem('mem_account') })
    }).then(response => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    }).then(jsonObject => {
      this.setState({ camp_collects: jsonObject.camp_collects, camp_features: jsonObject.camp_features, camp_imgs: jsonObject.camp_imgs })
    })
  }

  getMinPriceBeforeDiscount = (camp_feature) => {
    let minPrice = camp_feature.reduce((prev, curr) => {
      return prev.camp_pricew < curr.camp_pricew ? prev.camp_pricew : curr.camp_pricew
    })
    return minPrice
  }

  handle_like_btn_click = async (liked, camp_id) => {
    if (!liked) {
      let data = {
        account: localStorage.getItem('mem_account') ? localStorage.getItem('mem_account') : false,
        camp_id: camp_id
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
        camp_id: camp_id
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
        this.setState({ camp_collects: this.state.camp_collects.filter(camp => camp.camp_id != camp_id) })
      }

    }
  }

  render() {
    return (
      <main className="col-sm-10 my-2">
        <Tab.Container defaultActiveKey="food_collect">
          <Nav variant="tabs" defaultActiveKey="food_collect">
            <Nav.Item>
              <Nav.Link eventKey="food_collect" href="#">我收藏的食材</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="camp_collect">我收藏的營地</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="food_collect">
            <Row>
            {this.state.saleloveData.map(item =>(
              <Col lg={3} md={4} sm={6} xs={6} key={item.id} className="flist-col">
              <CardDeck>    
              <Card.Link className="py-1 mt-2" href={"/Food/FoodDetails/" + item.salelove_salepageid} >
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

              {/* <div className="d-flex flex-wrap">
                {this.state.saleloveData.map(item => (
                  <Card.Link className="ml-0 mr-3" key={item.id} href={"/Food/FoodDetails/" + item.salelove_salepageid}>
                    <Card className="mt-3 flist-card" style={{ width: "180px", height: "280px" }}>
                      <Card.Img
                        variant="top"
                        className="flist-img"
                        src={item.salelove_salepageimage}
                        style={{ width: "178px", height: "143px" }}
                      />
                      <Card.Body style={{ width: "100%" }} className="p-2">
                        <Card.Title className="food-default">
                          {item.salelove_salepagename}
                        </Card.Title>
                        <div className="mt-4" style={{ width: "100%" }}>
                          <Card.Text className="flist-suggestprice flist-cardText food-default text-right flist-cardMargin mt-3">
                            <NumberFormat value={item.salelove_salepagesuggestprice} displayType={'text'} thousandSeparator={true} prefix={'NT$'} />
                          </Card.Text>
                          <Card.Text className="flist-cardText forest text-right flist-cardMargin">
                            <NumberFormat value={item.salelove_salepageprice} displayType={'text'} thousandSeparator={true} prefix={'NT$'} />
                          </Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  </Card.Link>
                ))}
              </div> */}
            </Tab.Pane>
            <Tab.Pane eventKey="camp_collect">
            <Row>
              {
                this.state.camp_collects.map(camp => {
                  return (

                    <MemberCampCard campsite_data={camp} camp_liked={camp.liked} camp_img={this.state.camp_imgs.filter(img => img.camp_id == camp.camp_id)} camp_feature={this.state.camp_features.filter(feature => feature.camp_id == camp.camp_id)} getMinPriceBeforeDiscount={this.getMinPriceBeforeDiscount} handle_like_btn_click={(e) => { e.preventDefault(); return this.handle_like_btn_click(camp.liked, camp.camp_id) }} />
                  )
                })
              }
              </Row>
            </Tab.Pane>

          </Tab.Content>
        </Tab.Container>

      </main>
    )
  }
}

export default MemberFavorite
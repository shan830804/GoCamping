import React from "react";
import { Card, CardDeck, Col, Row } from "react-bootstrap";
import NumberFormat from 'react-number-format';

class FoodList extends React.Component {
  constructor() {
    super();
    this.state = {
      // 食物的資料，注意應該預設值是空陣列，而不是null或空物件
      salepageData: [],
      filterData: []
    };
  }

  // 元件 "已經" 呈現在網頁上
  componentDidMount() {
    fetch("http://localhost:5555/salepage", {
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
          salepageData: jsonObject,
          filterData: jsonObject
        });
      })
      .catch(function (err) {
        // Error :(
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.salebrand > 0) {
      this.setState({
        filterData: this.state.salepageData.filter(function (data) {
          return data.salepage_salebrand == nextProps.salebrand;
        })
      });
    }

    if (nextProps.salecateid > 0) {
      this.setState({
        filterData: this.state.salepageData.filter(function (data) {
          return data.salepage_salecateid == nextProps.salecateid;
        })
      });
    }

    if (nextProps.salebrand == 0 && nextProps.salecateid == 0) {
      this.setState({
        filterData: this.state.salepageData
      });
    }
  }

  render() {
    return (
      <>
        
        <Col md={10} className="p-0">
        <Row >
            {this.state.filterData.map(item =>(
              <Col md={3} xs={6} key={item.id} className="">
              <CardDeck>    
              <Card.Link className="py-1" href={"/Food/FoodDetails/" + item.id} >
                <Card className="ml-0 flist-card">
                  <figure className="m-0">
                    <Card.Img className="flist-cardImg" variant="top" src={item.salepage_image} />
                  </figure>
                  <Card.Body className="p-1 flist-cardBody">
                    <Card.Text className="food-default food-fs16 p-1 flist-cardName">{item.salepage_name}</Card.Text>
                    <Card.Text className="text-right food-ccc fs-12 mb-0">
                      <NumberFormat value={item.salepage_suggestprice} displayType={'text'} thousandSeparator={true} prefix={'NT$'} />
                    </Card.Text>
                    <Card.Text className="text-right food-default forest fw-bold" >
                      <NumberFormat value={item.salepage_price} displayType={'text'} thousandSeparator={true} prefix={'NT$'} />
                    </Card.Text>
                  </Card.Body>                  
                </Card>
              </Card.Link> 
              </CardDeck>                                   
              </Col>
            ))}
            </Row>                        
        </Col>
      </>
    );
  }
}

export default FoodList;

// 先註解
// <Card.Link className="ml-0 mr-3" key={item.id} href={"/Food/FoodDetails/" + item.id} >
//   <Card className="mt-3 flist-card"  style={{ width: "180px", height: "280px" }}>
//     <figure>
//     <Card.Img
//       variant="top"
//       className="flist-img"
//       src={item.salepage_image}
//       style={{ width: "178px", height: "143px" }}
//     />
//     </figure>
//     <Card.Body style={{ width: "100%"}} className="p-2">
//       <Card.Title className="food-default">
//         {item.salepage_name}
//       </Card.Title>
//       <div className="mt-2" style={{ width: "100%"}}>
//         <Card.Text className="flist-suggestprice flist-cardText fs-12 text-right flist-cardMargin mt-3">
//           <NumberFormat value={item.salepage_suggestprice} displayType={'text'} thousandSeparator={true} prefix={'NT$'} />
//         </Card.Text>
//         <Card.Text className="flist-cardText fs-20 forest text-right flist-cardMargin">                      
//           <NumberFormat value={item.salepage_price} displayType={'text'} thousandSeparator={true} prefix={'NT$'} />
//         </Card.Text>
//       </div>
//     </Card.Body>
//   </Card>
// </Card.Link>

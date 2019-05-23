import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
import "./Food.css";
import "../../components/Default.css";
import { Container, Row, Col } from "react-bootstrap";
import FoodOrder01 from "../../components/FoodOrder01";
import FoodOrder02 from "../../components/FoodOrder02";

class FoodOrderP1 extends React.Component {
  // TODO: 接收傳進來的該筆資料(ex const {match} = this.props)
  constructor(props) {
    super(props);
    this.state = {
      //props.match.params.id抓Router的ID
      salepage_id: props.match.params.id,
      //這裡還要用fetch拿到的是物件,所以預設就是{},不是[]
      salepageData: {},
    }
  }
  //因為程式太多,所以在這裡簡化（原本的在下面fetchData(){}）
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const url = "http://localhost:5555/salepage/" + this.state.salepage_id;
    return fetch(url)
      .then(response => response.json())
      .then(parsedJSON => this.setState({ salepageData: parsedJSON }))
      .catch(error => console.log(error));
  }
  //宣染開始 <FoodDetailsBt data={this.state.salepageData} />
  render() {
    return (
      <>
      {/* {this.state.salepage_id} */}
      {/* {this.state.salepageData.salepage_name} */}
      <Container className="">
        <FoodOrder01 order={this.state.salepageData} />
     
       </Container>

           <FoodOrder02 order={this.state.salepageData} />
      </>
    );
  }
}

export default FoodOrderP1;


import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
import "./Food.css";
import "../../components/Default.css";
import { Container, Row, Col } from "react-bootstrap";
import FoodOrder01 from "../../components/FoodOrder01";
import FoodOrder02 from "../../components/FoodOrder02";
import FoodOrder03 from "../../components/FoodOrder03";

class FoodOrderP1 extends React.Component {
  // TODO: 接收傳進來的該筆資料(ex const {match} = this.props)
  constructor(props) {
    super(props);
    this.state = {
      //props.match.params.id抓Router的ID
      salepage_id: props.match.params.id,
      //這裡還要用fetch拿到的是物件,所以預設就是{},不是[]
      salepageData: {},
      //
      showOrder: 1,
    }

    this.goP1 = this.goP1.bind(this);
    this.goP2 = this.goP2.bind(this);
    this.goP3 = this.goP3.bind(this);
  }

  // 在父層宣告 Method 可供下面的子層傳入, 讓子層可以呼叫到父層的 Method 
  goP1() {
    this.setState({
      showOrder: 1,
    })
  }

  goP2() {
    this.setState({
      showOrder: 2,
    })
  }
  goP3() {
    this.setState({
      showOrder: 3,
    })
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
      {/* 判斷 showOrder 來顯示要秀哪一頁 */}
      {/* 父層的 this.state.showP2 來判斷要不要顯示 FoodOrder01 或是 FoodOrder02 */}
      {this.state.showOrder === 1 && 
       <Container className="">
        <FoodOrder01 order={this.state.salepageData} goP2={this.goP2}/>     
       </Container>
      }
      {this.state.showOrder === 2 &&  
       <FoodOrder02 order={this.state.salepageData} goP1={this.goP1} goP3={this.goP3}/>
      }
      {this.state.showOrder === 3 &&  
       <FoodOrder03 order={this.state.salepageData} goP2={this.goP2}/>
      }
      </>
    );
  }
}

export default FoodOrderP1;


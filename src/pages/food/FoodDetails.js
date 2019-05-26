import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
import "./Food.css";
import "../../components/Default.css";
// import { BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import FoodDetailsBread from "../../components/FoodDetailsBread";
import FoodDetailsTop from "../../components/FoodDetailsTop";
import FoodDetailsMd from "../../components/FoodDetailsMd";
import FoodDetailsBt from "../../components/FoodDetailsBt";

class FoodDetails extends React.Component {
    // TODO: 接收傳進來的該筆資料(ex const {match} = this.props)
    constructor(props) {
        super(props)
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

    fetchData(){
        const url = "http://localhost:5555/salepage/" + this.state.salepage_id;
        return fetch(url)
            .then(response => response.json())
            .then(parsedJSON => this.setState({salepageData: parsedJSON}))
            .catch(error => console.log(error));
    }
//宣染開始
    render() {
      // console.log(this.state.salepage_id)
      return (
        <>         
        {/* {this.state.salepageData.salepage_name} */}
          <Container className="FoodDetails">
          <Row className="container">
            <Col>
              <FoodDetailsBread />
              {/* data是自己命名,是要給子層沿用下去的 */}
              <FoodDetailsTop data={this.state.salepageData} />
            </Col>
          </Row>
          <Row className="container">
            <Col>
              <FoodDetailsMd data={this.state.salepageData} />
              <FoodDetailsBt data={this.state.salepageData} />
            </Col>
          </Row>
        </Container>
        </>
      )
    }
}

export default FoodDetails;

// const FoodDetails = props => {
//   const salepage_id = props.match.params.id;
//   var salepage = {};
//   console.log(salepage_id);
//   //const foodData = camping_sale.find(item => item.salepage_id === +props.match.params.id)
//   fetch("http://localhost:5555/salepage/" + salepage_id, {
//         method: "GET",
//         headers: new Headers({
//           Accept: "application/json",
//           "Content-Type": "application/json"
//         })
//       })
//       .then(response => {
//         //ok 代表狀態碼在範圍 200‐299
//         if (!response.ok) throw new Error(response.statusText);
//         return response.json();
//       })
//       .then(jsonObject => {        
//         salepage = jsonObject ;
//         console.log(salepage);        
//       })      
//       .catch(function(err) {
//         // Error :(
//       });
      
//       return (
//         <>
//           <h1>食材詳細頁面</h1>
//           <h1>{salepage.salepage_name}</h1>
//         </>
//       )
// };  

// export default FoodDetails;

// class FoodDetails extends React.Component {
//     // TODO: 接收傳進來的該筆會員資料(ex const {match} = this.props)
//     constructor(props) {
//         super(props)
//         this.state = {
//             salepageData: props.data,
//         }
//     }

//     render() {
//         return (
//             <Router>

//                   <Card.Text data={this.state.salepageData}>

//                     </Card.Text>
//             </Router>
//         )
//     }
// }

// export default FoodDetails

// function FoodDetails() {
//   return (
//     <>
//       <Container className="FoodDetails">
//         <Row className="container">
//           <Col>
//             <FoodDetailsBread />
//             <FoodDetailsTop />
//           </Col>
//         </Row>
//         <Row className="container">
//           <Col>
//             <FoodDetailsMd />
//             <FoodDetailsBt />
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }
// export default FoodDetails;

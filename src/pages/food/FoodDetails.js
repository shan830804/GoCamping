import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
import "./Food.css";
import "../../components/Default.css";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import FoodDetailsBread from "../../components/FoodDetailsBread";
// import FoodDetailsTop from "../../components/FoodDetailsTop";
// import FoodDetailsMd from "../../components/FoodDetailsMd";
// import FoodDetailsBt from "../../components/FoodDetailsBt";

const FoodDetails = props => {
  console.log(props.match.params.id);
  // const foodData = camping_sale.find(item => item.salepage_id === +props.match.params.id)

  return (
    <>
      <h1>食材詳細頁面</h1>
    </>
  );
};

export default FoodDetails;

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

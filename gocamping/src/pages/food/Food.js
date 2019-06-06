import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Food.css";
import "../../components/Default.css";
import { Row, Col, Container } from "react-bootstrap";
//各種頁面
import FoodSlider from "../../components/FoodSlider";
import FoodLeftside from "../../components/FoodLeftside";
import FoodBread from "../../components/FoodBread";
import FoodList from "../../components/FoodList";
import FoodDetails from "./FoodDetails";

class Food extends React.Component {  
  constructor(props) {
      super(props)
      this.state = { 
        // title: "買食材",                   
        salebrand: 0,  
        salecateid: 0,          
      }

      this.handleSaleAll = this.handleSaleAll.bind(this);
      this.handleSalebrand = this.handleSalebrand.bind(this);
      this.handleSalecateid = this.handleSalecateid.bind(this);
  }
  //   //網頁標題
  //   componentDidMount() {
  //   document.title = this.state.title;
  // }

  handleSaleAll()
  {    
    this.setState({ 
                    salecateid: 0,
                    salebrand: 0, 
                  });
  }

  handleSalebrand(item)
  {
    this.setState({ 
                    salecateid: 0,
                    salebrand: item, 
                  });
  }

  handleSalecateid(item)
  {
    this.setState({ 
                    salecateid: item,
                    salebrand: 0, 
                  });
  }

  render(){
    return (
      <Router>
        <Container className="my-2 f-web f-margin-bottom">
          <Row className="d-flex"> 
            <FoodBread />
            <FoodSlider />
            </Row>
        </Container>
        {/* 網頁版的選單 */}
        <Container className="my-2 f-margin-bottom f-web">
        <p className="fs-32 text-center mt-2 f-web">買食材</p>  
          <Row className="d-flex f-web"> 
            <FoodLeftside handleSalebrand={this.handleSalebrand}
                          handleSalecateid={this.handleSalecateid}
                          handleSaleAll={this.handleSaleAll}
                          salebrand={this.state.salebrand}
                          salecateid={this.state.salecateid}
                            />
            <FoodList salebrand={this.state.salebrand}
                      salecateid={this.state.salecateid}
            /> 
          </Row>
        </Container>
        {/* 手機板選單 */}
        <Container className="px-0 mb-2 f-rwd">
          <Row className="d-flex f-rwd"> 
            <FoodLeftside handleSalebrand={this.handleSalebrand}
                          handleSalecateid={this.handleSalecateid}
                          handleSaleAll={this.handleSaleAll}
                          salebrand={this.state.salebrand}
                          salecateid={this.state.salecateid}
                            />
            
              <FoodList salebrand={this.state.salebrand}
                        salecateid={this.state.salecateid}
              /> 
          </Row>
        </Container>

        {/* <Container className="my-2 f-margin-bottom">
          <Row className="d-flex"> 
            <FoodList salebrand={this.state.salebrand}
                      salecateid={this.state.salecateid}
            /> 
          </Row>
        </Container> */}
      </Router>
    );
  }
}

export default Food;

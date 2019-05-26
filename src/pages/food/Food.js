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
        salebrand: 0,  
        salecateid: 0,          
      }

      this.handleSaleAll = this.handleSaleAll.bind(this);
      this.handleSalebrand = this.handleSalebrand.bind(this);
      this.handleSalecateid = this.handleSalecateid.bind(this);
  }

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
        <Container>
          <Row>
            <FoodBread />
            <FoodSlider />
          </Row>
        </Container>

        <Container>
          <Row>
            <Col md={2}>
              {" "}
              <FoodLeftside handleSalebrand={this.handleSalebrand}
                            handleSalecateid={this.handleSalecateid}
                            handleSaleAll={this.handleSaleAll}/>
            </Col>
            <Col md={10}>
              <FoodList salebrand={this.state.salebrand}
                        salecateid={this.state.salecateid}
              />
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default Food;

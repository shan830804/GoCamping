import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Camp.css";
import "../../components/Default.css";
import { Row, Col, Container } from "react-bootstrap";
//各種頁面
import CampSlider from "../../components/CampSlider";
import CampLeftside from "../../components/CampLeftside";
import CampBread from "../../components/CampBread";
import CampList from "../../components/CampList";
import CampLeftside02 from "../../components/CampLeftside02";

class Camp extends React.Component {  
  constructor(props) {
      super(props)
      this.state = {                 
        city: 0,  
        target: 0,             
      }

      this.handleAll = this.handleAll.bind(this);
      this.handleCity = this.handleCity.bind(this);
      this.handleTarget = this.handleTarget.bind(this);
  }
  //   //網頁標題
  //   componentDidMount() {
  //   document.title = this.state.title;
  // }

  handleAll()
  {    
    this.setState({ 
                    city: 0,  
                    target: 0, 
                  });
  }

  handleCity(item)
  {
    this.setState({ 
                    city: item,  
                    target: 0, 
                  });
  }

  handleTarget(item)
  {
    this.setState({ 
                    city: 0,  
                    target: item, 
                  });
  }

  render(){
    return (
      <Router>
        <Container className="f-margin-bottom">
          <Row>
            <CampBread />
            <CampSlider />
          </Row>

          <Row className="d-flex"> 
          <Col sm={2}>
             <CampLeftside02 handleCity={this.handleCity}
                          handleTarget={this.handleTarget}
                          handleAll={this.handleAll}
                          city={this.state.city}
                          target={this.state.target}/>
          </Col>
          
             <CampList city={this.state.city}
                      target={this.state.target}
            /> 
         
           
          </Row>
        </Container>
      </Router>
    );
  }
}

export default Camp;

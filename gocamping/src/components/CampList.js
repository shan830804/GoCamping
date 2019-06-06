import React from "react";
import NumberFormat from 'react-number-format';
import { Col, Button, Card } from 'react-bootstrap'
import { FaMapMarkerAlt, FaHeart } from 'react-icons/fa'

class CampList extends React.Component {
  constructor() {
    super();
    this.state = {
      camplistData: [],
      filterData: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5555/camplist", {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json"
      })
    })
      .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then(jsonObject => {
        // console.log(jsonObject);
        this.setState({
          camplistData: jsonObject,
          filterData: jsonObject
        });
      })
      .catch(function (err) {
        // Error :(
      });
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.city > 0) {
      this.setState({
        filterData: this.state.camplistData.filter(function (data) {
          return data.camplist_city == nextProps.city;
        })
      });
    }

    if (nextProps.target > 0) {
      this.setState({
        filterData: this.state.camplistData.filter(function (data) {
          return data.camplist_target == nextProps.target;
        })
      });
    }

    if (nextProps.city == 0 && nextProps.target == 0) {
      this.setState({
        filterData: this.state.camplistData
      });
    }
  }

  render() {
    return (
      <>
        <div className="col-md-10 d-flex listwrap">
          {this.state.filterData.map(item => (
            <Card.Link className="camplist col-md-5 col-sm-9" key={item.id} href={"/Camp/CampDetails/" + item.id} >
              <Card className="mt-2">
              <div className="imgblock d-flex ">
                        <div className="mainimg">
                          <Card.Img
                            variant=""
                            src={item.camplist_image}
                          />
                        </div>
                        <div className="sideimg">
                          <Card.Img
                            variant=""
                            src={item.camplist_image2}
                          />
                          <Card.Img
                            variant=""
                            src={item.camplist_image3}
                          />
                        </div>
                       
                      </div>
                <Card.Body className="cardchange">
                
                  <p className="grass mt-2">
                    <FaMapMarkerAlt />{item.camplist_cityname}{item.camplist_distname}
                  </p>
                  <Card.Title>
                    <h2 className="fs-24 default fw-bold mt-2">{item.camplist_name}</h2>
                  </Card.Title>
                  <div className="card-text">
                    <div className="fs-14 default">{item.camplist_feature}</div>
                    <div className="d-flex justify-content-between mt-3">
                       <p className="ground camptarget">#{item.camplist_targetname}</p>
                       
                        <h4 className="d-flex forest ">
                                   NT${item.camplist_price}
                               <span className=" fs-14 align-self-end ">起</span>
                            </h4>
                      
                    
                    </div>
                   
                    
                  </div>
                </Card.Body>
              </Card>
            </Card.Link>
          ))}
        </div>
      </>
    );
  }
}

export default CampList;

import React from "react";
import { Accordion,Card,Button } from "react-bootstrap";

/* 左邊商品選單 */
const CampLeftside02 = props => (
 
    <>
    <Accordion>
    <div className="ml-3">
        <li className="d-flex my-1 grass sidetop">
            <span variant="link"
                      onClick={props.handleAll}
                      className={"fs-bold fs-24 mt-3 sideall" + (props.city === 0 && props.target === 0 ? "-active" : "")}>
              營地列表
              </span> 
    </li> 
    </div>
  <div className="leftside">
    <div  className="card-header headside">
      <Accordion.Toggle as={Button} className="click-btn" variant="link" eventKey="0">
        依城市篩選
      </Accordion.Toggle>
    </div>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <li className={"ml-2 d-flex my-1 click-link " + (props.city == 1 ? "click-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(1)}
                      className="">
            台北市
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 click-link " + (props.city == 2 ? "click-active" : "")}>
              <div className="box mr-1" />                  
              <span variant="link"
                      onClick={()=>props.handleCity(2)}
                      className="click-link ">
              新北市
              </span>
            </li>            
            <li className={"ml-2 d-flex my-1 click-link " + (props.city == 3 ? "click-active" : "")}>
              <div className="box mr-1" />                  
              <span variant="link"
                      onClick={()=>props.handleCity(3)}
                      className="click-link ">
              桃園市
              </span>
            </li>
            <li className={"ml-2 d-flex my-1 click-link " + (props.city == 4 ? "click-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(4)}
                      className="click-link">
              新竹縣
              </span>
            </li>
            <li className={"ml-2 d-flex my-1 click-link " + (props.city == 5 ? "click-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(5)}
                      className="">
            苗栗縣
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 click-link " + (props.city == 6 ? "click-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(6)}
                      className="">
            台中市
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 click-link " + (props.city == 7 ? "click-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(7)}
                      className="">
           南投縣
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 click-link " + (props.city == 8 ? "click-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(8)}
                      className="">
            雲林縣
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 click-link " + (props.city == 9 ? "click-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(9)}
                      className="">
            嘉義縣
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 click-link " + (props.city == 10 ? "click-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(10)}
                      className="">
            台南市
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 click-link " + (props.city == 11 ? "click-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(11)}
                      className="">
            高雄市
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 click-link " + (props.city == 12 ? "click-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(12)}
                      className="">
            屏東縣
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 click-link " + (props.city == 13 ? "click-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(13)}
                      className="">
            宜蘭縣
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 click-link " + (props.city == 14 ? "click-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(14)}
                      className="">
           花蓮縣
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 click-link " + (props.city == 15 ? "click-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(15)}
                      className="">
           台東縣
              </span> 
            </li>

      </Card.Body>
    </Accordion.Collapse>
  </div>
  <div className=" leftside">
    <Card.Header className="headside">
      <Accordion.Toggle as={Button} className="click-btn" variant="link" eventKey="1">
      依主題篩選
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <li className={"ml-2 d-flex my-1 click-link " + (props.target == 1 ? "click-active" : "")}>
              <div className="box mr-1" />
              <span variant="link"
                      onClick={()=>props.handleTarget(1)}
                      className="click-link">
              親子同樂
              </span>
            </li>
            <li className={"ml-2 d-flex my-1 click-link " + (props.target == 2 ? "click-active" : "")}>
              <div className="box mr-1" />
              <span variant="link"
                      onClick={()=>props.handleTarget(2)}
                      className="click-link">
              溪邊釣魚
              </span>
            </li>
            <li className={"ml-2 d-flex my-1 click-link " + (props.target == 3 ? "click-active" : "")}>
              <div className="box mr-1" />
              <span variant="link"
                      onClick={()=>props.handleTarget(3)}
                      className="click-link">
              賞螢賞花
              </span>
            </li>
            <li className={"ml-2 d-flex my-1 click-link " + (props.target == 4 ? "click-active" : "")}>
              <div className="box mr-1" />
              <span variant="link"
                      onClick={()=>props.handleTarget(4)}
                      className="click-link">
              森林園區
              </span>
            </li>
            <li className={"ml-2 d-flex my-1 click-link " + (props.target == 5 ? "click-active" : "")}>
              <div className="box mr-1" />
              <span variant="link"
                      onClick={()=>props.handleTarget(5)}
                      className="click-link">
              高海拔營區
              </span>
            </li>
      </Card.Body>
    </Accordion.Collapse>
  </div>
</Accordion>   
   
  </>
      
    )


export default CampLeftside02;

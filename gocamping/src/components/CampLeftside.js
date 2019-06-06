import React from "react";
import { ListGroup } from "react-bootstrap";

/* 左邊商品選單 */
const CampLeftside = props => (
 
    <>    
    <div className="mt-3 col-md-3 col-sm-12">
      <ListGroup variant="flush" className="" >                    
        <ul className="p-0 my-2 list-unstyled">
          <ul className="p-0 my-2 list-unstyled">
            <li className="d-flex my-1 grass fleft-Li">
            <span variant="link"
                      onClick={props.handleAll}
                      className={"fs-24 fleft-all" + (props.city === 0 && props.target === 0 ? "-active" : "")}>
              營地列表
              </span> 
              {/* <span className="fs-bold grass" onClick={props.handleAll}>全站商品</span> */}
            </li>
            <li className="d-flex my-1">
              <span className="fs-bold fs-20 grass">依城市篩選</span>
            </li>            
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.city == 1 ? "fleft-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(1)}
                      className="">
            台北市
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.city == 2 ? "fleft-active" : "")}>
              <div className="box mr-1" />                  
              <span variant="link"
                      onClick={()=>props.handleCity(2)}
                      className="fleft-link ">
              新北市
              </span>
            </li>            
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.city == 3 ? "fleft-active" : "")}>
              <div className="box mr-1" />                  
              <span variant="link"
                      onClick={()=>props.handleCity(3)}
                      className="fleft-link ">
              桃園市
              </span>
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.city == 4 ? "fleft-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(4)}
                      className="fleft-link">
              新竹縣
              </span>
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.city == 5 ? "fleft-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(5)}
                      className="">
            苗栗縣
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.city == 6 ? "fleft-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(6)}
                      className="">
            台中市
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.city == 7 ? "fleft-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(7)}
                      className="">
            台中市
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.city == 8 ? "fleft-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(8)}
                      className="">
            南投縣
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.city == 9 ? "fleft-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(9)}
                      className="">
            雲林縣
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.city == 10 ? "fleft-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(10)}
                      className="">
            嘉義縣
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.city == 11 ? "fleft-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(11)}
                      className="">
            雲林縣
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.city == 12 ? "fleft-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(12)}
                      className="">
            嘉義縣
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.city == 13 ? "fleft-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(13)}
                      className="">
            台南市
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.city == 14 ? "fleft-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(14)}
                      className="">
           高雄市
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.city == 15 ? "fleft-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(15)}
                      className="">
           屏東縣
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.city == 16 ? "fleft-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(16)}
                      className="">
           宜蘭縣
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.city == 17 ? "fleft-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(17)}
                      className="">
           花蓮縣
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.city == 18 ? "fleft-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleCity(18)}
                      className="">
           台東縣
              </span> 
            </li>

            <li className="d-flex my-1">
              <span className="fs-bold grass fs-20">依主題篩選</span>
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.target == 1 ? "fleft-active" : "")}>
              <div className="box mr-1" />
              <span variant="link"
                      onClick={()=>props.handleTarget(1)}
                      className="fleft-link">
              親子同樂
              </span>
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.target == 2 ? "fleft-active" : "")}>
              <div className="box mr-1" />
              <span variant="link"
                      onClick={()=>props.handleTarget(2)}
                      className="fleft-link">
              溪邊釣魚
              </span>
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.target == 3 ? "fleft-active" : "")}>
              <div className="box mr-1" />
              <span variant="link"
                      onClick={()=>props.handleTarget(3)}
                      className="fleft-link">
              賞螢賞花
              </span>
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.target == 4 ? "fleft-active" : "")}>
              <div className="box mr-1" />
              <span variant="link"
                      onClick={()=>props.handleTarget(4)}
                      className="fleft-link">
              森林園區
              </span>
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.target == 5 ? "fleft-active" : "")}>
              <div className="box mr-1" />
              <span variant="link"
                      onClick={()=>props.handleTarget(5)}
                      className="fleft-link">
              高海拔營區
              </span>
            </li>
          </ul>
        </ul>
      </ListGroup> 
    </div>
  </>
      
    )


export default CampLeftside;

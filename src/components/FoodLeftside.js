import React from "react";
import { ListGroup } from "react-bootstrap";

/* 左邊商品選單 */
const FoodLeftside = props => (  
  <>    
    <div className="mt-3 col-md-2 col-sm-12">
      <ListGroup variant="flush" className="" >                    
        <ul className="p-0 my-2 list-unstyled">
          <ul className="p-0 my-2 list-unstyled">
            <li className="d-flex my-1 grass fleft-Li">
            <span variant="link"
                      onClick={props.handleSaleAll}
                      className={"fs-bold fs-20 fleft-all" + (props.salebrand === 0 && props.salecateid === 0 ? "-active" : "")}>
              全站商品
              </span> 
              {/* <span className="fs-bold grass" onClick={props.handleSaleAll}>全站商品</span> */}
            </li>
            <li className="d-flex my-1">
              <span className="fs-bold fs-20 grass">選擇品牌</span>
            </li>            
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.salebrand == 1 ? "fleft-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleSalebrand(1)}
                      className="">
              桂冠食品
              </span> 
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.salebrand == 2 ? "fleft-active" : "")}>
              <div className="box mr-1" />                  
              <span variant="link"
                      onClick={()=>props.handleSalebrand(2)}
                      className="fleft-link ">
              紅龍食品
              </span>
            </li>            
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.salebrand == 3 ? "fleft-active" : "")}>
              <div className="box mr-1" />                  
              <span variant="link"
                      onClick={()=>props.handleSalebrand(3)}
                      className="fleft-link ">
              七里香
              </span>
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.salebrand == 4 ? "fleft-active" : "")}>
              <div className="box mr-1" />                                    
              <span variant="link"
                      onClick={()=>props.handleSalebrand(4)}
                      className="fleft-link">
              西北烤肉
              </span>
            </li>

            <li className="d-flex my-1">
              <span className="fs-bold grass fs-20">食品分類</span>
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.salecateid == 1 ? "fleft-active" : "")}>
              <div className="box mr-1" />
              <span variant="link"
                      onClick={()=>props.handleSalecateid(1)}
                      className="fleft-link">
              冷凍食品
              </span>
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.salecateid == 2 ? "fleft-active" : "")}>
              <div className="box mr-1" />
              <span variant="link"
                      onClick={()=>props.handleSalecateid(2)}
                      className="fleft-link">
              冷藏食品
              </span>
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.salecateid == 3 ? "fleft-active" : "")}>
              <div className="box mr-1" />
              <span variant="link"
                      onClick={()=>props.handleSalecateid(3)}
                      className="fleft-link">
              生鮮食品
              </span>
            </li>
            <li className={"ml-2 d-flex my-1 fleft-link " + (props.salecateid == 4 ? "fleft-active" : "")}>
              <div className="box mr-1" />
              <span variant="link"
                      onClick={()=>props.handleSalecateid(4)}
                      className="fleft-link">
              素食專區
              </span>
            </li>
          </ul>
        </ul>
      </ListGroup> 
    </div>
  </>
);

export default FoodLeftside;

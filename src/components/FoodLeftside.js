import React from "react";
import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";

/* 左邊商品選單 */
const FoodLeftside = props => (
  <>    
      <Row>
        <Col>
          <ListGroup variant="flush" className="" >                    
            <ul className="p-0 my-2 list-unstyled">
              <ul className="p-0 my-2 list-unstyled">
                <li className="d-flex my-1">
                <Button variant="link"
                          onClick={props.handleSaleAll}>
                  全站商品
                  </Button> 
                  {/* <span className="fs-bold grass" onClick={props.handleSaleAll}>全站商品</span> */}
                </li>
                <li className="d-flex my-1">
                  <span className="fs-bold grass">選擇品牌</span>
                </li>
                <li className="d-flex my-1 fs-14">
                  <div className="box mr-1 fleft-active" />                                    
                  <Button variant="link"
                          onClick={()=>props.handleSalebrand(1)}>
                  桂冠食品
                  </Button> 
                </li>
                <li className="d-flex my-1 fs-14">
                  <div className="box mr-1" />                  
                  <Button variant="link"
                          onClick={()=>props.handleSalebrand(2)}>
                  紅龍食品
                  </Button>
                </li>
                <li className="d-flex my-1 fs-14">
                  <div className="box mr-1" />                  
                  <Button variant="link"
                          onClick={()=>props.handleSalebrand(3)}>
                  七里香
                  </Button>
                </li>
                <li className="d-flex my-1 fs-14">
                  <div className="box mr-1" />                                    
                  <Button variant="link"
                          onClick={()=>props.handleSalebrand(4)}>
                  西北烤肉
                  </Button>
                </li>

                <li className="d-flex my-1">
                  <span className="fs-bold grass">食品分類</span>
                </li>
                <li className="d-flex my-1 fs-14">
                  <div className="box mr-1" />
                  <Button variant="link"
                          onClick={()=>props.handleSalecateid(1)}>
                  冷凍食品
                  </Button>
                </li>
                <li className="d-flex my-1 fs-14">
                  <div className="box mr-1" />
                  <Button variant="link"
                          onClick={()=>props.handleSalecateid(2)}>
                  冷藏食品
                  </Button>
                </li>
                <li className="d-flex my-1 fs-14">
                  <div className="box mr-1" />
                  <Button variant="link"
                          onClick={()=>props.handleSalecateid(3)}>
                  生鮮食品
                  </Button>
                </li>
                <li className="d-flex my-1 fs-14">
                  <div className="box mr-1" />
                  <Button variant="link"
                          onClick={()=>props.handleSalecateid(4)}>
                  素食專區
                  </Button>
                </li>
              </ul>
            </ul>
          </ListGroup>
        </Col>
      </Row>
 
  </>
);

export default FoodLeftside;

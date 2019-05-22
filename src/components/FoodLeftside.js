import React from "react";
import { Row, Col, Container, ListGroup } from "react-bootstrap";

/* 左邊商品選單 */
const FoodLeftside = props => (
  <>

    {/* <Row>
      <Col> */}
        <ListGroup className="col-2">
          <ul className="p-0 my-2 list-unstyled">
            <ul className="p-0 my-2 list-unstyled">
              <li className="d-flex my-1">
                <span className="fs-bold grass">全站商品</span>
              </li>
              <li className="d-flex my-1">
                <span className="fs-bold grass">選擇品牌</span>
              </li>
              <li className="d-flex my-1 fs-14">
                <div className="box mr-1 fleft-active" />桂冠食品
          </li>
              <li className="d-flex my-1 fs-14">
                <div className="box mr-1" />紅龍食品
          </li>
              <li className="d-flex my-1 fs-14">
                <div className="box mr-1" />七里香
          </li>
              <li className="d-flex my-1 fs-14">
                <div className="box mr-1" />西北烤肉
          </li>

              <li className="d-flex my-1">
                <span className="fs-bold grass">食品分類</span>
              </li>
              <li className="d-flex my-1 fs-14">
                <div className="box mr-1" />冷凍食品
          </li>
              <li className="d-flex my-1 fs-14">
                <div className="box mr-1" />冷藏食品
          </li>
              <li className="d-flex my-1 fs-14">
                <div className="box mr-1" />生鮮食品
          </li>
              <li className="d-flex my-1 fs-14">
                <div className="box mr-1" />蔬菜區
          </li>
            </ul>
          </ul>
        </ListGroup>
      {/* </Col>
    </Row> */}

  </>
);

export default FoodLeftside;

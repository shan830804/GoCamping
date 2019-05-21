import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
// import { FaHome } from 'react-icons/fa';
import {
  Row,
  Col,
  Container,
  Table,
  Form,
  Image,
  ButtonGroup,
  ButtonToolbar,
  Button
} from "react-bootstrap";

class FoodOrder01 extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: "買食材-訂購明細"
    };
  }

  // 網頁標題
  componentDidMount() {
    document.title = this.state.title;
  }

  render() {
    const { index, direction } = this.state;
    return (
      <>
        {/* 進入訂單第一步 訂單明細*/}
        <Container className="mt-1">
          <Row className="mt-5">
            <Col>
              <div className=" forder01-title fs-32">訂購明細</div>
            </Col>
          </Row>
        </Container>
        {/* 訂購清單 */}
        <Container className="mt-1">
          <Row className="mt-5">
            <Col>
              <div className="ground fs-24">訂購清單</div>
            </Col>
          </Row>
        </Container>
        {/* 顯示清單 */}
        <Container className="mt-1 ">
          <Row className="">
            <Col>
              <Table bordered hover>
                <thead>
                  <tr className="text-center">
                    <th style={{ width: "10%" }}> </th>
                    <th style={{ width: "20%" }}>商品圖片</th>
                    <th style={{ width: "30%" }}>商品名稱</th>
                    <th style={{ width: "10%" }}>單價</th>
                    <th style={{ width: "10%" }}>數量</th>
                    <th style={{ width: "10%" }}>金額</th>
                    <th style={{ width: "10%" }}>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center justify-content-center">
                    <td>
                      <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="" />
                      </Form.Group>
                    </td>
                    <td>
                      {" "}
                      <Image
                        style={{ width: "100%" }}
                        src="../images/f1-1.jpg"
                        rounded
                      />
                    </td>
                    <td>
                      【好神】紐西蘭濕式熟成12盎司雪花嫩肩牛排(340g±10%/片*12片)平均每片156.33元
                    </td>
                    <td>NT$999</td>
                    <td>2</td>
                    <td>NT$2000</td>
                    <td>刪除</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
        {/* 總額 */}
        <Container className="forder01-totalcon">
          <Row>
            <Col style={{ width: "100%" }}>
              <div className="forder01-total">
                <p>共(2)項商品</p>
                <p>金額總計NT$ 2,000</p>
              </div>
              <p className="fs-12">
                備註：食材皆可於指定日期與時間送往指定地點
              </p>
            </Col>
          </Row>
        </Container>
        {/* 服務條款 */}
        <Container className="mt-1">
          <Row className="mt-5">
            <Col>
              <div className="ground fs-24">服務條款</div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <div style={{ width: "100%" }}>
                <div className="forder01-ser">
                  <p>
                    一、會員服務條款
                    <br />
                    1.本會員服務條款所稱之「會員」，為依照本站所定之加入會員程序加入完成並通過認證者。
                    <br />
                    2.當您使用本站服務時，即表示您同意及遵守本服務條款的規定事項及相關法律之規定。
                    <br />
                    3.本站保留有審核加入會員資格之權利，另外已加入會員者，本站亦保留有解除其會員資格之權利。
                    <br />
                    4.本會員服務條款之修訂，適用於所有會員，當本站修訂本服務條款時，將於本站上公告。
                    <br />
                    一、會員服務條款
                    <br />
                    1.本會員服務條款所稱之「會員」，為依照本站所定之加入會員程序加入完成並通過認證者。
                    <br />
                    2.當您使用本站服務時，即表示您同意及遵守本服務條款的規定事項及相關法律之規定。
                    <br />
                    3.本站保留有審核加入會員資格之權利，另外已加入會員者，本站亦保留有解除其會員資格之權利。
                    <br />
                    4.本會員服務條款之修訂，適用於所有會員，當本站修訂本服務條款時，將於本站上公告。
                    <br />
                    一、會員服務條款
                    <br />
                    1.本會員服務條款所稱之「會員」，為依照本站所定之加入會員程序加入完成並通過認證者。
                    <br />
                    2.當您使用本站服務時，即表示您同意及遵守本服務條款的規定事項及相關法律之規定。
                    <br />
                    3.本站保留有審核加入會員資格之權利，另外已加入會員者，本站亦保留有解除其會員資格之權利。
                    <br />
                    4.本會員服務條款之修訂，適用於所有會員，當本站修訂本服務條款時，將於本站上公告。
                    <br />
                  </p>
                </div>
                <Form.Group controlId="formBasicChecbox">
                  <Form.Check
                    type="checkbox"
                    label="我已閱讀並同意上述條款規則。"
                  />
                </Form.Group>
              </div>
            </Col>
          </Row>
        </Container>
        {/* 送出或返回button */}
        <Container className="forder01-btncon">
          <Row>
            <Col>
              {/* justify-content-between */}
              <ButtonToolbar className="justify-content-end">
                <Button className="bg-food-default forder-btn mr-2 " style={{ width: "30%" }} sm={"block"} >
                  返回食材列表
                </Button>
                <Button className="bg-sunshine food-default forder-btn" style={{ width: "30%" }} sm={"block"} >
                  下一步，填寫資訊
                </Button>
                </ButtonToolbar>
            </Col>
            {/* <Col >
              <ButtonToolbar className="justify-content-between">
                <Button className="bg-sunshine food-default forder-btn" style={{ width: "70%" }} >
                  下一步，填寫資訊
                </Button>
             </ButtonToolbar> 
            </Col> */}
          </Row>
        </Container>
      </>
    );
  }
}
export default FoodOrder01;

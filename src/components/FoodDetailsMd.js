import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
import {
  Image,
  Row,
  Col,
  Table
} from "react-bootstrap";

class FoodDetailsMd extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: "買食材"
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
        {/* 詳細說明 */}
        <Row className="mt-5">
          <Col>
            <div className="dt-border">
              <p className="fs-32 fw-light dt-title">詳細說明</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <p className="img-title">醬燒里肌肉片(500g/盒)</p>
            <Image src="../images/f1-1.jpg" thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <p className="img-title">醬燒里肌肉片(500g/盒)</p>
            <Image src="../images/f1-2.jpg" thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <p className="img-title">醬燒里肌肉片(500g/盒)</p>
            <Image src="../images/f1-3.jpg" thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <p className="img-title">醬燒里肌肉片(500g/盒)</p>
            <Image src="../images/f1-3.jpg" thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <p className="img-title">醬燒里肌肉片(500g/盒)</p>
            <Image src="../images/f1-2.jpg" thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <p className="img-title">醬燒里肌肉片(500g/盒)</p>
            <Image src="../images/f1-1.jpg" thumbnail />
          </Col>
        </Row>
        {/* 相關規格 */}
        <Row className="mt-5">
          <Col>
            <div className="dt-border">
              <p className="fs-32 fw-light dt-title">相關規格</p>
            </div>
          </Col>
        </Row>
        <div>
          <Table bordered responsive="sm" className="mt-3">
            <thead>
              <tr>
                <th>規格</th>
                <th>250g／包</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>成分</td>
                <td>豬腿肉、豬里肌油、豬腸衣、糖、水、食鹽、醬油、五香粉（大茴香、小茴香、花椒、陳皮、肉豆蔻）</td>
              </tr>
              <tr>
                <td>熱量</td>
                <td>177.5大卡／份，本包裝含5份</td>
              </tr>
              <tr>
                <td>供應商電話</td>
                <td>（02）2397－3796</td>
              </tr>
              <tr>
                <td>原產地（國）</td>
                <td>台灣</td>
              </tr>
              <tr>
                <td>食品業者登入字號</td>
                <td>H－121225259－00003－6</td>
              </tr>
              <tr>
                <td>保存期限</td>
                <td>冷凍，180天</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}
export default FoodDetailsMd;

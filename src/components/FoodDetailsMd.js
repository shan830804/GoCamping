import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
import {
  Image,
  Row,
  Col,
  Table
} from "react-bootstrap";

class FoodDetailsMd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "買食材",
      //props.data父層命名的名字
      salepageData: props.data,
    };
  }

 // https://stackoverflow.com/questions/37058533/passing-updated-state-as-props
 componentWillReceiveProps(nextProps){
  this.setState({salepageData: nextProps.data});      
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
          <Col xs={6} md={4} className="text-center">
            <p className="img-title">{this.state.salepageData.salepage_name2}</p>
            <figure>
              <Image src={this.state.salepageData.salepage_image2} thumbnail />
            </figure>
          </Col>
          <Col xs={6} md={4} className="text-center">
            <p className="img-title">{this.state.salepageData.salepage_name3}</p>
            <figure>
              <Image src={this.state.salepageData.salepage_image3} thumbnail />
            </figure>
          </Col>
          <Col xs={6} md={4} className="text-center">
            <p className="img-title">{this.state.salepageData.salepage_name4}</p>
            <figure>
              <Image src={this.state.salepageData.salepage_image4} thumbnail />
            </figure>
          </Col>
          <Col xs={6} md={4} className="text-center">
            <p className="img-title">{this.state.salepageData.salepage_name5}</p>
            <figure>
              <Image src={this.state.salepageData.salepage_image5} thumbnail />
            </figure>
          </Col>
          <Col xs={6} md={4} className="text-center">
            <p className="img-title">{this.state.salepageData.salepage_name6}</p>
            <figure>
              <Image src={this.state.salepageData.salepage_image6} thumbnail />
            </figure>
          </Col>
          <Col xs={6} md={4} className="text-center">
            <p className="img-title">{this.state.salepageData.salepage_name7}</p>
            <figure>
              <Image src={this.state.salepageData.salepage_image7} thumbnail />
            </figure>
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

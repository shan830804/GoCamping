import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
import {
  Image,
  Row,
  Col,
  Table,
  Button
} from "react-bootstrap";
import { FaEye } from 'react-icons/fa'

class CampDetailsMd extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      //props.data父層命名的名字
      camplistData: props.camplistData,
      camptypeData: props.camptypeData,
    };
    
  }


 // https://stackoverflow.com/questions/37058533/passing-updated-state-as-props
 componentWillReceiveProps(nextProps){
  this.setState({camplistData: nextProps.camplistData.id}); 
  this.setState({camptypeData: nextProps.camptypeData});      
}


  render() {
   console.log(this.props.camptypeData)
    return (
      <>
       <Table className="mt-5 " responsive>
          <thead className="bg-apple" style={{ textAlign: 'center' }}>
            <tr>
              <th>區域</th>
              <th>類型 </th>
              <th>尺寸</th>
              <th>帳數</th>
              <th>價格</th>
            
            </tr>
          </thead>
          {this.props.camptypeData.map(item=>(
            <tbody key={item.id} style={{ textAlign: 'center' }}> 
                        <tr>
                          <td data-th="區域">{item.camp_area}</td>
                          <td data-th="類型">{item.camp_type}</td>
                          <td data-th="尺寸">{item.camp_size}</td>
                          <td data-th="帳數">{item.camp_number}</td>
                          <td data-th="價格">{item.camp_pricew}</td>
                      
                        </tr>
                      </tbody>
          )
          )}
        </Table>
      
        <div>
          <p className="wood fs-24 fw-medium">營區分布圖</p>
          <div className="campareaimg mb-3">
          <img src={this.props.camplistData.camplist_area} alt=""/>
          </div>
        </div>
      
      </>
    );
  }
}
export default CampDetailsMd;

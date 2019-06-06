import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
// import { FaHome } from 'react-icons/fa';
import { Breadcrumb } from "react-bootstrap";

/* Camp詳細頁麵包屑 */
class CampDetailsBread extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      
      };
    }
    render() {
      //   console.log(this.props.data)
      return (
        <>
         <div className="">
            <div className="col-12 p-0 f-Breadcrumb">
                    <ul className="breadcrumb f-ulBreadcrumb m-0 px-0">
                        <li className="breadcrumb-item f-liBreadcrumb myBreadcrumb"><i className="fas fa-home"></i></li>
                        <li className="breadcrumb-item f-liBreadcrumb active myBreadcrumb">訂營地</li>
                        <li className="breadcrumb-item f-liBreadcrumb  active myBreadcrumb">{this.props.data.camplist_name}</li>
                    </ul>
                </div>
            </div>
          {/* <div className="row my-2">
            <div className="col-12 p-0">
              <ul className="breadcrumb f-ulBreadcrumb m-0 p-0">
                <li className="breadcrumb-item">
                  <i className="fas fa-home" />
                </li>
                <li className="breadcrumb-item">
                 訂營地
                </li>
                <li className="breadcrumb-item active">{this.props.data.camplist_name}</li>
              </ul>
            </div>
          </div> */}
        </>
      );
    }
  }
  export default CampDetailsBread;
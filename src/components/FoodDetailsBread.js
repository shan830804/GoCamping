import React from "react";
import { BrowserRouter as NavLink } from "react-router-dom";
// import { FaHome } from 'react-icons/fa';
// import { Breadcrumb } from "react-bootstrap";

/* Food詳細頁麵包屑 */
class FoodDetailsBread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }
  render() {
    //   console.log(this.props.data)
    return (
      <>
        <div className="row col-12 my-2">
          <nav className="col-12 p-0">
            <ul className="food_bread breadcrumb m-0">
              <li className="breadcrumb-item">
                <i className="fas fa-home" />
              </li>
              <li className="breadcrumb-item">
                <NavLink className="" to="/Food">
                    <span >買食材</span>
                </NavLink>
              </li>
              <li className="breadcrumb-item active">{this.props.data.salepage_name}</li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}
export default FoodDetailsBread;

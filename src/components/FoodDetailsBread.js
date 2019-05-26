import React from "react";
// import { BrowserRouter as NavLink } from "react-router-dom";
// import { FaHome } from 'react-icons/fa';
import { Breadcrumb } from "react-bootstrap";

/* Food詳細頁麵包屑 */
const FoodDetailsBread = props => (
    <>
        <Breadcrumb className="bread-crumb myBreadcrumb">
            <Breadcrumb.Item className="align-items-center justify-content-center" href="">首頁</Breadcrumb.Item>
            <Breadcrumb.Item active>買食材</Breadcrumb.Item>
        </Breadcrumb>

    </>
  );

export default FoodDetailsBread;
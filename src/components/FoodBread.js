import React from "react";
import { BrowserRouter as NavLink } from "react-router-dom";
import { Breadcrumb } from 'react-bootstrap'

/* 麵包屑 */
const FoodBread = props => (
    <>
        <Breadcrumb className="bread-crumb fs-16 fs-bold">
            <Breadcrumb.Item className="align-items-center justify-content-center" href="">首頁</Breadcrumb.Item>
            <Breadcrumb.Item active>買食材</Breadcrumb.Item>
        </Breadcrumb>

    </>
  );

export default FoodBread;
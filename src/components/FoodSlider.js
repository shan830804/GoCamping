import React from "react";
import { Carousel, Image } from "react-bootstrap";

  /* slider輪播 */
  //照片要放在public資料夾裡面 
const FoodSlider = props =>(
  <>
  <div className="col-sm-12 mt-2">
    <figure className="col-sm-12 m-0 p-0" >
      <Image className="w-100 fslider-img" src="../../images/food-home.jpg" fluid />
    </figure>
</div>
  </>
)

export default FoodSlider

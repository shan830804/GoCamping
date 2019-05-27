import React from "react";
import { Carousel, Image } from "react-bootstrap";

  /* slider輪播 */
  //照片要放在public資料夾裡面 
const FoodSlider = props =>(
  <>
  <div className="col-sm-12">
  <figure className="col-sm-12 " >
<Image className="w-100 fslider-img" src="../../images/food-home.jpg" fluid />
  </figure>
  
    {/* <Carousel>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="../../images/s01.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="../../images/s01.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="../../images/s01.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel> */}
</div>
  </>
)

export default FoodSlider

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sliderImg1 from "../../../assets/banner/banner1.png";
import sliderImg2 from "../../../assets/banner/banner2.png";
import sliderImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={sliderImg1} />
      </div>
      <div>
        <img src={sliderImg2} />
      </div>
      <div>
        <img src={sliderImg3} />
      </div>
    </Carousel>
  );
};

export default Banner;

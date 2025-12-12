import React from "react";
import Banner from "./Banner/Banner";

import OurService from "./OurService/OurService";
import TestimonialCarousel from "../../components/TestimonialCarousel/TestimonialCarousel";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurService></OurService>
      <TestimonialCarousel></TestimonialCarousel>
    </div>
  );
};

export default Home;

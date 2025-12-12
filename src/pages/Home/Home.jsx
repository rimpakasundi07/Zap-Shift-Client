import React from "react";
import Banner from "./Banner/Banner";

import OurService from "./OurService/OurService";
import TestimonialCarousel from "../../components/TestimonialCarousel/TestimonialCarousel";
import Faq from "../../components/Faq/Faq";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurService></OurService>
      <TestimonialCarousel></TestimonialCarousel>
      <Faq></Faq>
    </div>
  );
};

export default Home;

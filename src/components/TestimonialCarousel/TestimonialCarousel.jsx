import React, { useRef, useState } from "react";
// Swiper-er proyojonio modules import korun
import { Swiper, SwiperSlide } from "swiper/react";
import layerImg from "../../assets/customer-top.png";
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

// Swiper styles import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow"; // Optional: Center-er slide ke ektu alada look dewar jonno

// Mock Data
const testimonials = [
  {
    id: 1,
    quote:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Rimpa Kasundi",
    title: "Senior Product Designer",
    avatar: "/path/to/awlad_avatar.png",
  },
  {
    id: 2,
    quote:
      "Providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture.",
    name: "Adurini Mitra",
    title: "CTO",
    avatar: "/path/to/rasel_avatar.png",
  },
  {
    id: 3,
    quote:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Rimpa Kasundi",
    title: "CEO",
    avatar: "/path/to/nasir_avatar.png",
  },
  {
    id: 4,
    quote:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Riju Kasundi",
    title: "CEO",
    avatar: "/path/to/nasir_avatar.png",
  },
  {
    id: 5,
    quote:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Adurini Mitra",
    title: "CEO",
    avatar: "/path/to/nasir_avatar.png",
  },
  {
    id: 6,
    quote:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Rimpa Kasundi",
    title: "CEO",
    avatar: "/path/to/nasir_avatar.png",
  },
  {
    id: 7,
    quote:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Riju Kasundi",
    title: "CEO",
    avatar: "/path/to/nasir_avatar.png",
  },
  {
    id: 8,
    quote:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Rimpa Kasundi",
    title: "CEO",
    avatar: "/path/to/nasir_avatar.png",
  },
  {
    id: 9,
    quote:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Adurini Mitra",
    title: "CEO",
    avatar: "/path/to/nasir_avatar.png",
  },
  {
    id: 10,
    quote:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Riju Kasundi",
    title: "CEO",
    avatar: "/path/to/nasir_avatar.png",
  },
  {
    id: 11,
    quote:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Rimpa Kasundi",
    title: "CEO",
    avatar: "/path/to/nasir_avatar.png",
  },
  {
    id: 12,
    quote:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Adurini Mitra",
    title: "CEO",
    avatar: "/path/to/nasir_avatar.png",
  },
  // ... more testimonials
];

// Custom Card Component
const TestimonialCard = ({ quote, name, title, avatar, isActive }) => (
  // Swiper-slide-active class-ta Swiper nijer moto add/remove kore. Amra CSS/Tailwind use kore oita style korbo.
  <div className="flex flex-col p-6 mx-2 md:p-8 rounded-xl bg-white shadow-xl min-h-[250px] transition-all duration-300 border-2 border-transparent">
    {/* Quote Icon */}
    <blockquote className="text-4xl text-gray-200 mb-4 font-serif">
      “
    </blockquote>

    {/* Quote Text */}
    <p
      className={`text-gray-600 italic leading-relaxed ${
        isActive ? "text-gray-800 font-medium" : "text-gray-500"
      }`}
    >
      {quote}
    </p>

    <div className="mt-auto pt-6 flex items-center">
      {/* Avatar */}
      <div
        className={`w-12 h-12 rounded-full mr-4 ${
          isActive ? "bg-green-500/20" : "bg-gray-300"
        }`}
      >
        {/* Replace with actual image tag for user avatars */}
        {/*  */}
      </div>

      {/* Name and Title */}
      <div>
        <h3
          className={`text-sm font-semibold ${
            isActive ? "text-gray-800" : "text-gray-600"
          }`}
        >
          {name}
        </h3>
        <p
          className={`text-xs ${isActive ? "text-green-600" : "text-gray-400"}`}
        >
          {title}
        </p>
      </div>
    </div>
  </div>
);

const TestimonialCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-16 bg-green-100">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <img src={layerImg} className="mx-auto" alt="" />
          <div className="mb-4">{/*  */}</div>
          <h2 className="text-xl font-extrabold text-teal-800 lg:text-4xl">
            What our customers are saying
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            className="pb-12" // Pagination er jonno niche space
            modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000, // 4 seconds delay
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onInit={(swiper) => {
              // Navigation buttons gulo initialize korar jonno
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            // Responsive Breakpoints
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            // Pagination settings
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom", // Custom pagination class
              bulletClass:
                "swiper-pagination-bullet bg-gray-300 w-2.5 h-2.5 rounded-full transition-all duration-300 mx-1.5",
              bulletActiveClass: "bg-green-500 w-6", // Active bullet size change
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id} className="py-4">
                {/* Check Swiper's internal active index, jodio Swiper.js e `centeredSlides: true` thakle `swiper-slide-active` class-ta auto apply hoy */}
                <TestimonialCard
                  {...testimonial}
                  // isActive={index === activeIndex} // Use Swiper's class for styling the center slide
                />
              </SwiperSlide>
            ))}

            {/* Custom Navigation (Next/Prev Arrows) */}
            <div className="flex justify-center items-center mt-6 space-x-4">
              <button
                ref={prevRef}
                className="swiper-button-prev p-3 rounded-full border border-gray-300 hover:border-green-500 transition-colors duration-300"
              >
                {/* Left Arrow Icon */}
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>

              {/* <div className="h-2 w-16"> */}
              {/* This space is for pagination. It is controlled by the swiper-pagination-custom div */}
              {/* Pagination Container */}
              {/* <div className="swiper-pagination-custom flex justify-center "></div> */}
              {/* </div> */}

              <button
                ref={nextRef}
                className="swiper-button-next p-3 rounded-full border border-gray-300 hover:border-green-500 transition-colors duration-300 bg-green-500/10" // Active style er moto kore dewa holo
              >
                {/* Right Arrow Icon */}
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

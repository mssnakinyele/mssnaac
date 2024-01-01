/* eslint-disable react/prop-types */
import React from "react";
// import {
//   ArrowRightCircleIcon,
//   ArrowLeftCircleIcon,
// } from "@heroicons/react/24/solid";

import Slider from "react-slick";

const CustomSlider = ({ config, children }) => {
  // const NextArrow = (props) => {
  //   return (
  //     <ArrowRightCircleIcon
  //       className={`${props.className} ${
  //         config?.type === "testimonial" ? "hidden" : "block"
  //       }`}
  //       onClick={props.onClick}
  //     />
  //   );
  // };
  // const PrevArrow = (props) => {
  //   return (
  //     <ArrowLeftCircleIcon
  //       className={`${props.className}  ${
  //         config?.type === "testimonial" ? "hidden" : "block"
  //       }`}
  //       onClick={props.onClick}
  //     />
  //   );
  // };

  const settings = {
    // dots: config?.type === "testimonial" ? false : true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    speed:  config?.type === "testimonial" ? 3000 : 1000,
    autoplay: config?.type === "testimonial" ? true : false,
    autoplaySpeed: 0,
    cssEase: config?.type === "testimonial" ? "linear" : "ease-in-out",
    // adaptiveHeight: true,
    swipeToSlide: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className='slider'>
      {children}
    </Slider>
  );
};

export default CustomSlider;

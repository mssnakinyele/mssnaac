import React from "react";
import { v4 as uuid } from "uuid";
import Avatar from "react-avatar";

import styles from "../styles/Testimonials.module.css";
import Slider from "../../../components/Slider";

import SlideIn from "../../../animations/SlideIn";

import tempData from "../../../data/testimonials-data";

function Testimonials() {
  return (
    <section className={`${styles.testimony} mt-4 py-[3rem]`}>
      <div className='px-[1.5rem]'>
        <SlideIn from='left'>
          <h2 className='text-3xl lg:text-4xl font-bold'>Testimonials</h2>
        </SlideIn>
        <SlideIn from='right'>
          <p className='text-sm lg:text-lg px-4 my-4'>
            Hear from individuals who value being part of our society.
          </p>
        </SlideIn>
      </div>
      <Slider config={{ type: "testimonial", slidesToShow: 3 }}>
        {tempData.map((item) => (
          <div key={uuid()} className={styles.card}>
            <Avatar
              name={item.name}
              size='75'
              round={true} // 
            />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <br />
            <p>{item.description2}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Testimonials;

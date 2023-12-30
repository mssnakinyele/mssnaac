import React from "react";
import { v4 as uuid } from "uuid";
import Avatar from "react-avatar";

import styles from "./Testimonials.module.css";
import CustomSlider from "../CustomSlider/CustomSlider";

import tempData from "../../data/testimonialData";

function Testimonials() {
  return (
    <section className={`${styles.testimony} my-4`}>
      <h2 className='text-3xl lg:text-4xl font-bold'>Testimonials</h2>
      <p className='text-sm lg:text-lg px-4'>
        Hear from individuals who value being part of our society.
      </p>
      <CustomSlider config={{ type: "testimonial" }}>
        {tempData.map((item) => (
          <div key={uuid()} className={styles.card}>
            <Avatar
              name={item.name}
              size='75'
              round={true} // Set to true for a round avatar
            />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <br />
            <p>{item.description2}</p>
          </div>
        ))}
      </CustomSlider>
    </section>
  );
}

export default Testimonials;

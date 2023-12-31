import React from "react";
import styles from "./Press.module.css";
import Card from "../Card/Card";
import CustomSlider from "../Slider/CustomSlider";

import SlideIn from "../Animations/SlideIn";

function Press() {
  return (
    <section className='bg-[rgba(250, 253, 250, 1)] p-[2.25rem]'>
      <div
        className={`${styles.press} flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 md:px-6`}
      >
        <SlideIn from='left'>
          <h2 className='text-3xl lg:text-4xl font-bold '>Al-Faaedah Press</h2>
        </SlideIn>

        <SlideIn classNames='flex items-center justify-between w-full mt-4 sm:flex-col sm:w-1/4 sm:justify-center gap-2 sm:items-start'>
          <p className='text-sm leading-6 font-semibold w-2/3 sm:w-full'>
            Access more beneficial knowledge that are priceless but free.
          </p>
          <a
            href='https://alfaaedahpress.wordpress.com/'
            className='btn-green'
            style={{
              width: "fit-content",
              padding: "0.5rem 0.75rem",
              fontSize: "0.8rem",
            }}
            rel='noreferrer'
            target='_blank'
          >
            <span>View Blog</span>
          </a>
        </SlideIn>
      </div>
      <SlideIn from='bottom'>
        <CustomSlider config={{ slidesToShow: 4, cssEase: "ease-in-out" }}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CustomSlider>
      </SlideIn>
    </section>
  );
}

export default Press;

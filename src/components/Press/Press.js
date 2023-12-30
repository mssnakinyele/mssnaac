import React from "react";
import styles from "./Press.module.css";
import Card from "../Card/Card";
import CustomSlider from "../CustomSlider/CustomSlider";

function Press() {
  return (
    <section className=' px-6'>
      <div
        className={`${styles.press} flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 md:px-6`}
      >
        <h2 className='text-3xl lg:text-4xl font-bold '>Al-Faaedah Press</h2>
        <div className='flex items-center justify-between w-full mt-4 sm:flex-col sm:w-1/4 sm:justify-center gap-2 sm:items-start'>
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
        </div>
      </div>
      <CustomSlider config={{ slidesToShow: 4, cssEase: "ease-in-out" }}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CustomSlider>
    </section>
  );
}

export default Press;

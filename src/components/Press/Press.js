import React from "react";
import styles from "./Press.module.css";
import Card from "../Card/Card";
// import CustomSlider from "../Slider/CustomSlider";

import SlideIn from "../Animations/SlideIn";

function Press() {
  return (
    <section className='bg-[rgba(250, 253, 250, 1) '>
      <div
        className={`${styles.press} flex flex-col sm:flex-row sm:justify-between sm:items-center  p-[2.25rem] `}
      >
        <SlideIn from='left'>
          <h2 className='text-3xl lg:text-4xl font-bold my-2'>Al-Faaedah Press</h2>
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
      <SlideIn from='bottom' classNames=' overflow-x-scroll md:px-[2.25rem]'>
        <div className=' w-[1200px] mx-auto mt-3 flex gap-[25px]'>
          {/* <div > */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          {/* </div> */}
        </div>
      </SlideIn>
    </section>
  );
}

export default Press;

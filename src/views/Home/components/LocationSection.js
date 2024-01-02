import React from "react";
import SlideIn from "../../../animations/SlideIn";

import styles from "../styles/Location.module.css";
import Map from "../../../components/Map";

function LocationSection() {
  return (
    <section className={`${styles.section} py-[3.5rem] px-6 md:px-12`}>
      <SlideIn from='top' classNames='flex items-center my-2'>
        <h2 className='font-semibold text-3xl md:text-4xl leading-normal'>
          Societies
        </h2>
        <SlideIn from='right'>
          <button
            type='button'
            className='btn-green btn-green-shade font-semibold'
          >
            See all
          </button>
        </SlideIn>
      </SlideIn>
      <SlideIn from='left'>
        <p className='text-xs sm:text-base leading-normal my-4'>
          Institutions and Secondary school branches under MSSNAAC are situated
          in Akinyele Local Government.
        </p>
      </SlideIn>
      <SlideIn from='right' classNames='mt-4'>
        <Map />
      </SlideIn>
    </section>
  );
}

export default LocationSection;

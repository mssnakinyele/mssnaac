import React from "react";
import styles from "./Location.module.css";
import SlideIn from "../Animations/SlideIn";
function Location() {
  return (
    // <Reveal>
    <section className={`${styles.section} py-[3.5rem] px-6 md:px-12`}>
      <SlideIn  from='top' classNamea='flex items-center my-2'>
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
        <p className='text-xs sm:text-base leading-normal'>
          Institutions and Secondary school branches under MSSNAAC are situated
          in Akinyele Local Government.
        </p>
      </SlideIn>
      <SlideIn from='right' classNames='mt-4'>
        <iframe
          src='https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=J28%20alaka%20orogun%20Ibadan+(MSSN%20Akinyele%20Area%20Council)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
          title='MSSN AAC Address'
          loading='lazy'
        >
          <a href='https://www.maps.ie/population/'>Population mapping</a>
        </iframe>
      </SlideIn>
    </section>
    // </Reveal>
  );
}

export default Location;

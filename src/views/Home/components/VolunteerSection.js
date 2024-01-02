import React from "react";
import { Link } from "react-router-dom";

import SlideIn from "../../../animations/SlideIn";

const VolunteerSection = () => {
  return (
    <section
      className={`bg-white mt-6 h-[40rem] sm:h-[30rem] px-6 md:px-12 flex flex-col sm:flex-row items-center justify-evenly`}
    >
      <SlideIn
        from='left'
        classNames='sm:block object-cover sm:order-2 order-1'
      >
        <div className='flex gap-5'>
          <img
            src='/imgs/volunteer-1.png'
            alt='volunteer-1-img'
            className='w-[120px] my-2 '
          />
          <img
            src='/imgs/volunteer-2.png'
            alt='volunteer-2-img'
            className='w-[120px] my-2 '
          />
        </div>
        <div className='flex gap-5'>
          <img
            src='/imgs/volunteer-3.png'
            alt='volunteer-3-img'
            className='w-[120px] my-2 '
          />
          <img
            src='/imgs/volunteer-4.png'
            alt='volunteer-4-img'
            className='w-[120px] my-2 '
          />
        </div>
      </SlideIn>
      <div className='order-2 sm:order-1 flex flex-col text-center items-center sm:text-left sm:items-start text-sm md:text-lg leading-0 w-auto sm:w-1/2'>
        <SlideIn from='left'>
          <h2 className=' font-bold text-3xl sm:text-4xl leading-normal'>
            Discover the joy of giving back
          </h2>
        </SlideIn>
        <SlideIn>
          <p className=' my-4 text-base sm:text-lg '>
            Join our team of volunteers and make a positive impact in our
            community. Help us organize events, raise awareness, and create
            meaningful connections with fellow students.
          </p>
        </SlideIn>
        <SlideIn from='right'>
          <Link to='/donate'>
            <button type='button' className='btn-green  my-4'>
              Volunteer
            </button>
          </Link>
        </SlideIn>
      </div>
    </section>
  );
};

export default VolunteerSection;

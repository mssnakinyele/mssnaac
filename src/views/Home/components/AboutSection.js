import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import SlideIn from "../../../animations/SlideIn";

import styles from "../styles/AboutSection.module.css";

function AboutSection() {
  return (
    <section className={`${styles.about} bg-[#f0f7f0] h-[30rem] px-6 md:px-12`}>
      <div className='flex justify-between items-center'>
        <div className='text-sm md:text-lg leading-0 flex-wrap w-full'>
          <SlideIn from='left'>
            <h2 className=' font-semibold text-3xl md:text-4xl leading-normal'>
              MSSN Akinyele <br />
              Area Council
            </h2>
          </SlideIn>
          <SlideIn from='right' classNames='my-4'>
            <p>
              MSSN Akinyele Area Council is one of the Area Councils under the
              MSSN Oyo State Area Unit.
            </p>
            <p className='mt-2'>
              One of her goals is bring all Muslims in closer union and
              inculcate the true Islamic spirit of brotherhood and absolute
              faith in Allah. Her primary assignment is{" "}
              <strong>Secondary School Coordination.</strong>
            </p>
          </SlideIn>
          <SlideIn from='left'>
            <Link to='/about'>
              <button type='button' className='btn-green'>
                Learn more <ArrowRightIcon className='h-6 w-4 ml-2 font-bold' />
              </button>
            </Link>
          </SlideIn>
        </div>

        <SlideIn
          from='right'
          classNames='w-1/2 sm:w-[80%] h-full hidden sm:block object-cover '
        >
          <img
            src='/imgs/akinyele.png'
            alt='Society Banner'
            className='h-full w-full'
          />
        </SlideIn>
      </div>
    </section>
  );
}

export default AboutSection;

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import styles from "./Section.module.css";

function Section() {
  return (
    <section className={`${styles.about} h-96 px-6 md:px-12`}>
      <div className='flex justify-between items-center xl:items-start'>
        <div className='text-sm md:text-lg leading-0 flex-wrap w-full'>
          <h2 className=' font-semibold mt-6 lg:mt-0   text-3xl md:text-4xl leading-normal'>
            MSSN Akinyele <br />
            Area Council
          </h2>
          <p>
            MSSN Akinyele Area Council is one of the Area Councils under the
            MSSN Oyo State Area Unit.
          </p>
          <p className='mt-2'>
            One of her goals is bring all Muslims in closer union and inculcate
            the true Islamic spirit of brotherhood and absolute faith in Allah.
            Her primary assignment is{" "}
            <strong>Secondary School Coordination.</strong>
          </p>
          <div>
            <Link to='/about'>
              <button type='button' className='btn-green'>
                Learn more <ArrowRightIcon className='h-6 w-4 ml-2 font-bold' />
              </button>
            </Link>
          </div>
        </div>
        <div className='w-1/2 sm:w-3/4 h-full hidden sm:block object-cover '>
          <img
            src='/imgs/akinyele.png'
            alt='Society Banner'
            className='h-full w-full'
          />
        </div>
      </div>
    </section>
  );
}

export default Section;

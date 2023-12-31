import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Donate = () => {
  return (
    <section
      className={`bg-[#E1F2E1] mt-16 h-[35rem] sm:h-[25rem] px-6 md:px-12 flex flex-col sm:flex-row items-center justify-evenly`}
    >
      <div className='sm:block object-cover'>
        <img
          src='/imgs/money.png'
          alt='Money'
          className='w-[150px] sm:w-[250px]'
        />
      </div>
      <div className='flex flex-col text-center items-center sm:text-left sm:items-start text-sm md:text-lg leading-0 w-auto sm:w-1/2'>
        <h2 className=' font-semibold text-3xl sm:text-4xl leading-normal'>
          Give to the cause of Allah
        </h2>

        <p className=' my-4 text-base sm:text-lg '>
          You can support our mission to promote a sense of community and
          provide opportunities for Muslim students to connect and learn. Your
          contribution can make a real difference.
        </p>
        <div>
          <Link to='/donate'>
            <button type='button' className='btn-green'>
              Donate now <ArrowRightIcon className='h-6 w-4 ml-2 font-bold' />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Donate;

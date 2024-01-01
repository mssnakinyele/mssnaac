import React from "react";
import { Link, useLocation } from "react-router-dom";
// import Navbar from "./Navbar";
// import styles from "./error-page.module.css";

const UnderConstruction = () => {
    const { pathname } = useLocation();

  return (
    <>
      <main className='grid min-h-full place-items-center text-gray-600 bg-[#daf2da] px-6 py-24 sm:py-32 lg:px-8 '>
        <div className={`text-center `}>
          <p>
            Requested URL: <span className='text-[#007300] '>{pathname}</span>
          </p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-[#007300] sm:text-5xl'>
            Page Under Construction
          </h1>
          <p className='mt-6 text-base leading-7 text-gray-600'>
            Sorry, This page is currently under maintenance, check back later.
            You will find lots to <br className='hidden sm:block' />
            explore on the home page.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              to='/'
              className='rounded-md bg-[#007300] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80  '
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default UnderConstruction;

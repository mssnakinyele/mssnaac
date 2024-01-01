import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "./error-page.module.css";

const Error404 = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      <main className='grid min-h-[100vh] place-items-center text-gray-600 bg-[#daf2da] px-6 py-24 sm:py-32 lg:px-8 '>
        <div className={`${styles.content} text-center `}>
          <p>
            Requested URL: <span className='text-[#007300] '>{pathname}</span>
          </p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-[#007300] sm:text-5xl'>
            Lost your way?
          </h1>
          <p className='mt-6 text-base leading-7 text-gray-600'>
            Sorry, we couldn’t find the page. You will find lots to{" "}
            <br className='hidden sm:block' />
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
          <div className={styles.errorCode}>
            <span>
              Error Code: <strong>NSES-404</strong>
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Error404;

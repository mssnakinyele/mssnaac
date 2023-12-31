import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

import styles from "./error-page.module.css";

const Error404 = () => {
  const { pathname, ...others } = useLocation();
  console.log(others);

  const navStyle = {
    backgroundImage:
      "url(https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <Navbar />
      <main
        className='grid h-[100vh] place-items-center text-white bg-white px-6 py-24 sm:py-32 lg:px-8 '
        style={navStyle}
      >
        <div className={`${styles.content} text-center `}>
          <p>
            Requested URL: <span className='text-green-400'>{pathname}</span>
          </p>
          <h1>Lost your way?</h1>
          <p>
            Sorry, we couldn’t find the page. You will find lots to{" "}
            <br className='hidden sm:block' />
            explore on the home page.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              to='/'
              className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:opacity-80  '
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

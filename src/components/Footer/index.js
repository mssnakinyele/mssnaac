import React from "react";

import FooterRoutes from "./FooterRoutes";
import ContactDetails from "./ContactDetails";
import Map from "../Map";

import SlideIn from "../../animations/SlideIn";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className=' bg-[#007300] text-white p-[1.25rem] text-center'>
      <section className='flex flex-row justify-between items-center gap-8 p-[1rem] '>
        <SlideIn from='left' classNames='flex flex-col sm:basis-1/2'>
          <header className='font-extrabold text-3xl mb-4 text-left'>
            Contact Us
          </header>
          <ContactDetails />
        </SlideIn>
        <SlideIn
          from='right'
          classNames=' basis-1/2 rounded-t-2xl hidden sm:block h-[300px]'
        >
       <Map />
        </SlideIn>
      </section>
      <section className='rounded-md bg-white p-6 mt-8 text-black text-left text-base sm:text-3xl grid grid-cols-3 sm:grid-cols-4'>
        <SlideIn
          from='top'
          classNames='text-center my-auto col-span-3 sm:col-start-1 sm:col-end-2'
        >
          <img
            src='/imgs/AAC_logo.png'
            alt='MSSN AAC Logo'
            className='mx-auto w-[100px] sm:w-auto'
          />
          <p className='mx-auto text-sm sm:text-base'>
            The Hope of the Ummah...
          </p>
        </SlideIn>
        <hr className='block sm:hidden mt-4 border-b-[1.5px] col-span-3' />
        <FooterRoutes />
        <hr className='block border-b-[1.5px] sm:mt-4 col-span-3 sm:col-span-4' />
        <SlideIn from='bottom' classNames='col-span-3 sm:col-span-4'>
          <p className='mt-5 text-center text-xs sm:text-sm leading-6 text-slate-500'>
            © MSSNAAC {year}. All rights reserved.
          </p>
        </SlideIn>
      </section>
      {/* <SlideIn from='bottom' classNames=' mt-6'>
        <p className='text-sm mt-6'>
          Frontend developed with <span className=' text-red-300'>❤️</span> by{" "}
          <a
            href='https://github.com/brainy-bug'
            className=' text-sm text-red-200 underline '
          >
            Abdulrasheed
          </a>{" "},
          Backend: {" "}
          <a
            href='https://github.com/abdulhamiid'
            className=' text-sm text-red-200 underline'
          >
            AbdulHamid
          </a>
        </p>
      </SlideIn> */}
    </footer>
  );
}

export default Footer;

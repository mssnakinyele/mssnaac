import React from "react";

import RouteLinks from "./RouteLinks";
import ContactLinks from "./ContactLinks";

import SlideIn from "../Animations/SlideIn";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className=' bg-[#007300] text-white p-[2.25rem] text-center'>
      <section className='flex flex-row justify-between items-center gap-8 '>
        <SlideIn from='left' classNames='flex flex-col sm:basis-1/2'>
          <header className='font-extrabold text-4xl mb-4 text-left'>
            Contact Us
          </header>
          <ContactLinks />
        </SlideIn>
        <SlideIn
          from='right'
          classNames=' basis-1/2 rounded-t-2xl hidden sm:block h-[300px]'
        >
          <iframe
            src='https://maps.google.com/maps?width=520&amp;height=200&amp;hl=en&amp;q=J28%20alaka%20orogun%20Ibadan+(MSSN%20Akinyele%20Area%20Council)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
            title='MSSN AAC Address'
          >
            <a href='https://www.maps.ie/population/'>Population mapping</a>
          </iframe>
        </SlideIn>
      </section>
      <section className='rounded-md bg-white p-6 mt-12 text-black text-left text-base grid sm:grid-cols-4'>
        <SlideIn from='top' classNames='text-center  my-auto'>
          <img
            src='/imgs/AAC_logo.png'
            alt='MSSN AAC Logo'
            className='mx-auto'
          />
          <p className='mx-auto'>The Hope of the Ummah...</p>
        </SlideIn>
        <RouteLinks />
        <hr className='block border-b-[1.5px] sm:mt-4 sm:col-span-4' />
        <SlideIn from='bottom' classNames=' sm:col-span-4'>
          <p className='mt-5 text-center text-sm leading-6 text-slate-500'>
            © MSSNAAC {year}. All rights reserved.
          </p>
        </SlideIn>
      </section>
      <SlideIn from='bottom' classNames=' mt-6'>
        <p className='text-sm mt-6'>
          Developed with <span className=' text-red-300'>❤️</span> by{" "}
          <a
            href='https://github.com/brainy-bug'
            className=' text-sm text-red-200 underline '
          >
            Abdulrasheed
          </a>{" "}
          and{" "}
          <a
            href='https://github.com/abdulhamiid'
            className=' text-sm text-red-200 underline'
          >
            AbdulHamid
          </a>
        </p>
      </SlideIn>
    </footer>
  );
}

export default Footer;

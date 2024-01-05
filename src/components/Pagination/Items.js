/* eslint-disable react/prop-types */
import React from "react";
import { MailIcon } from "../../icons";

function Items({ currentItems }) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-10 items-center justify-items-center justify-center'>
      {currentItems.map((detail) => (
        <div
          key={detail.post}
          className='w-[160px] sm:w-[180px] md:w-[200px] lg:w-[250px]'
        >
          <div
            className={`flex justify-end items-center flex-col ${detail.background} h-[100px] md:h-[160px] object-cover p-4 overflow-hidden`}
          >
            {detail.icon}
          </div>

          <div className='bg-white sm:py-[21px] p-[12px] sm:px-[17px] shadow-lg rounded-md cursor-pointer'>
            <div className='flex justify-between items-center  pb-3'>
              <p className='text-xs sm:text-sm font-bold text-brand-black cursor-text'>
                {detail.name}
              </p>
              <MailIcon />
            </div>
            <p className='text-xs sm:text-sm font-medium text-brand-black cursor-text'>
              {detail.post}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Items;

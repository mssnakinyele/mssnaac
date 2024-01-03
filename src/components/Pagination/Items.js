/* eslint-disable react/prop-types */
import React from "react";
import { MailIcon } from "../../icons";
// import Avatar from "react-avatar";

function Items({ currentItems }) {
  return (
    <div className='grid grid-cols-4 gap-8'>
      {currentItems.map((detail) => (
        <div key={detail.post}>
          <div
            className={`flex justify-end items-center flex-col ${detail.background} h-[250px]`}
          >
            {/* <Avatar name={detail.name} size='100%' googleId="25442" /> */}
            {detail.icon}
          </div>

          <div className='bg-white py-[21px] px-[17px] shadow-lg rounded-md'>
            <div className='flex justify-between items-center  pb-3'>
              <p className='text-lg font-bold text-brand-black'>
                {detail.name}
              </p>
              <div className='cursor-pointer'>
                <MailIcon />
              </div>
            </div>
            <p className='text-sm font-medium text-brand-black'>
              {detail.post}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Items;

import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";

const years = ["2021/2022", "2022/2023"];

const YearDropdown = () => {
  const [currentYear, setCurrentYear] = useState("2021/2022");

  const handleCurrentYear = (e) => {
    setCurrentYear(e.target.innerText);
  };

  return (
    <>
      <span className='mx-3 py-1 border-b-green-600 border-b-4'>
        {currentYear}
      </span>
      <Menu as='div' className='relative inline-block text-left'>
        <Menu.Button className='justify-center rounded-md bg-green-700 p-2 font-medium text-white hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'>
          <HiChevronDown
            className='text-violet-200 hover:text-violet-100 text-[1rem] sm:text-[1.3rem] '
            aria-hidden='true'
          />
        </Menu.Button>
        <Menu.Items className='text-lg  absolute right-0 sm:left-0 mt-2 py-4 px-2 w-[8rem] rounded-md bg-white shadow-lg  focus:outline-none'>
          {years
            .map((year, i) => {
              return (
                <Menu.Item
                  className='rounded-md  py-[2px] text-center  hover:bg-[#9bd79b] w-full '
                  key={i}
                >
                  <button
                    onClick={handleCurrentYear}
                    className={`${
                      currentYear === year
                        ? "text-green-600 hover:text-black"
                        : " text-black  "
                    }`}
                  >
                    {year}
                  </button>
                </Menu.Item>
              );
            })}
        </Menu.Items>
      </Menu>
    </>
  );
};

export default YearDropdown;

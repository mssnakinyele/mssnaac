import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import tempFaq from "../../data/faq";

function Faq() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollToFAQs) {
      scroller.scrollTo("faqs", {
        smooth: true,
        duration: 1500,
      });
    }
  }, [location.state]);

  return (
    <section className='p-8 bg-[#f0f7f0]' name='faqs'>
      <h2 className='text-center font-extrabold mb-4 '>FAQs</h2>
      <p className='text-center text-base sm:text-xl mb-8'>
        Find answers to commonly asked questions about our society.
      </p>
      <ul className='mx-auto w-full rounded-2xl bg-white p-6'>
        {tempFaq.map((item, id) => (
          <Disclosure>
            {({ open }) => (
              <>
                <li key={id}>
                  <Disclosure.Button
                    className={`${
                      open && "bg-[#F0F7FF] border-l-4 border-green-500"
                    } flex justify-between w-full px-4 py-4 mb-4 text-xs sm:text-base font-semibold text-left text-green-900 bg-green-50 rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
                  >
                    <span className='w-[75%]'>{item.question}</span>
                    <ChevronDownIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-8 h-8 text-green-500`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter='transition duration-200 ease-in'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-100 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform scale-95 opacity-0'
                  >
                    <Disclosure.Panel className='px-4 pt-2 pb-6 text-sm text-gray-500'>
                      {item.answer}
                    </Disclosure.Panel>
                  </Transition>
                </li>
              </>
            )}
          </Disclosure>
        ))}
      </ul>
    </section>
  );
}

export default Faq;

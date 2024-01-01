import React from 'react';
import { IoMdCard } from 'react-icons/io';
import { BsPhoneFlip } from 'react-icons/bs';
import { IoLogoUsd } from 'react-icons/io5';

const toggleDisplay = (e) => {
  const { id } = e.target;
  const menu = document.querySelectorAll('.menu');

  menu.forEach((item) => {
    if (item.id === id) {
      item.classList.remove('invisible');
    } else {
      item.classList.add('invisible');
    }
  });

  document.querySelectorAll('button').forEach((button) => {
    if (button.id === id) {
      button.classList.remove('bg-white');
      button.classList.add('bg-[#007300]');
      button.childNodes[0].classList.remove('bg-[#007300]');
      button.childNodes[0].classList.add('bg-white');
      button.childNodes[0].classList.remove('text-white');
      button.childNodes[0].classList.add('text-[#007300]');
      button.childNodes[1].classList.remove('text-[#007300]');
      button.childNodes[1].classList.add('text-white');
    } else {
      button.classList.remove('bg-[#007300]');
      button.classList.add('bg-white');
      button.childNodes[0].classList.remove('bg-white');
      button.childNodes[0].classList.add('bg-[#007300]');
      button.childNodes[0].classList.remove('text-[#007300]');
      button.childNodes[0].classList.add('text-white');
      button.childNodes[1].classList.remove('text-white');
      button.childNodes[1].classList.add('text-[#007300]');
    }
  });
};

const data = [
  {
    id: 1,
    icon: <IoMdCard id="1" />,
    text: 'Credit card',
  },
  {
    id: 2,
    icon: <BsPhoneFlip id="2" />,
    text: 'Bank Transfer',
  },
  {
    id: 3,
    icon: <IoLogoUsd id="3" />,
    text: 'PayPal',
  },
];

function Payment() {
  const existingData = JSON.parse(localStorage.getItem('amount'));

  return (
    <div className="grid grid-cols-12 gap-4">
      <ul className="col-span-2 flex-col self-start mt-4 cursor-pointer">
        {
          data.map((item) => (
            <li key={item.id} id={item.id} className="li w-full">
              <button id={item.id} type="button" className={`button flex flex-col items-center justify-center py-14 ${item.id === 1 ? 'rounded-tr-[34px] bg-[#007300]' : 'bg-white'} border-b-2 border-[#007300]-600 w-full`} onClick={(e) => toggleDisplay(e)}>
                <div id={item.id} className={`border border-[#007300] rounded-full p-3 ${item.id === 1 ? 'bg-white text-[#007300]' : 'bg-[#007300] text-white'}`}>
                  {item.icon}
                </div>
                <p id={item.id} className={`${item.id === 1 ? 'text-white' : 'text-[#007300]'} text-base`}>{item.text}</p>
              </button>
            </li>
          ))
        }
      </ul>
      <div id="1" className="menu">
        <p>
          Donate
          {' '}
          {`${existingData === '1000000' ? '1Million' : `N${existingData}`}`}
        </p>
      </div>
      <div id="2" className="menu invisible">2</div>
      <div id="3" className="menu invisible">3</div>
    </div>
  );
}

export default Payment;

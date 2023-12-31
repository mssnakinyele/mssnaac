import React, { useState } from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    amount: "N5000",
  },
  {
    id: 2,
    amount: "N15000",
  },
  {
    id: 3,
    amount: "N50000",
  },
];

function Donate() {
  const existingData = () => {
    let existingData = JSON.parse(localStorage.getItem("amount"));
    if (existingData === null) existingData = [];
    return existingData;
  };

  const [amount, setAmount] = useState(existingData());
  const setInput = (e) => {
    setAmount(e.target.innerText.slice(1));
  };

  localStorage.setItem("amount", JSON.stringify(amount));

  return (
    <>
      <div className='grid grid-cols-2 min-h-fit'>
        <div className='mt-[50px]'>
          <img
            src='/svgs/multiple.svg'
            alt='multiple_reward'
            className='w-2/3'
          />
        </div>
        <div className='bg-[#E6F4E6] px-[50px] pt-[50px]'>
          <div className='w-1/2'>
            <h2>Donate today</h2>
            <p className='text-base'>
              Charity (Sadaqah) extinguishes sin, just as water extinguishes
              fire
            </p>
          </div>
          <div className='pt-[50px]'>
            <p>Select or Enter an amount</p>
            <ul className='flex grow-/i0'>
              {data.map((item) => (
                <li key={item.id}>
                  <button
                    type='button'
                    className='border-gray-800 bg-white border-r-1 p-4 hover:bg-[#007300] hover:text-white cursor-pointer'
                    onClick={(e) => setInput(e)}
                  >
                    {item.amount}
                  </button>
                </li>
              ))}
            </ul>
            <form className='flex flex-col flex-start w-3/4'>
              <input
                type='number'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className='px-3 py-2 my-8 block w-full px-3 pt-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 '
                placeholder='Enter an amount here'
                min='100'
                max='1000000'
              />
              <p
                className={`text-sm text-pink-600 pb-3 text-bold ${
                  amount > 100 && amount < 1000000 ? "hidden" : "block"
                }`}
              >
                Please conduct transfers ranging from N100 to N1 million per
                transaction.
              </p>

              <Link
                className={`text-center bg-[#007300] p-2 text-white ${
                  amount < 100 || amount > 1000000
                    ? "cursor-not-allowed disable opacity-75"
                    : ""
                }`}
                to={`${
                  amount < 100 || amount > 1000000
                    ? "/donate"
                    : "/donate/details"
                }`}
              >
                <input type='submit' />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donate;

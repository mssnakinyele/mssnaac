import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import Payment from './Payment';

function Detail() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-[#E6F4E6] py-8">
      <div className="flex items-center gap-x-2 px-8">
        <FaArrowLeft className="cursor-pointer" onClick={() => navigate(-1)} />
        <h2 className="text-xl font-bold">Payment Details</h2>
      </div>
      <Payment />

    </div>
  );
}

export default Detail;

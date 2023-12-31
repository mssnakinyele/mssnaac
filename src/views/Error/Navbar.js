import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=' p-4 fixed w-[100%]'>
      <Link to='/'>
        <img src='/imgs/AAC_logo.png' alt='Logo' className='w-auto h-10 ' />
      </Link>
    </nav>
  );
}

export default Navbar;

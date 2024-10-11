import React from 'react';
import devslogo from '../assets/devslogo.png';

export const Header = () => {
  return (
    <div>
      <div className='bg-opacity-50 flex justify-between items-center bg-black fixed top-0 left-0 w-screen h-24 md:h-30 z-50'>
        <div className='flex h-24 md:h-36'>
          <img className='mx-2 md:mx-12' src={devslogo} alt="Logo" />
        </div>
        <div className='text-white flex gap-4 md:gap-8 mx-4 md:mx-12 my-auto text-xs md:text-lg'>
          <p className='hover:underline cursor-pointer'>Home</p>
          <p className='hover:underline cursor-pointer'>About</p>
          <p className='hover:underline cursor-pointer'>Events</p>
          <p className='hover:underline cursor-pointer'>Contact</p>
        </div>
      </div>
    </div>
  );
};

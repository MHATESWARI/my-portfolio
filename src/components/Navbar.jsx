import React from 'react';
import myPic from '../assets/myPic.jpg';

const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-teal-500 to-teal-100'>

      {/* Fixed Navbar */}
      <div className='fixed top-0 z-50 w-full bg-gradient-to-r from-teal-500 to-teal-100 shadow-md'>
        <div className='flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 py-4 lg:py-6'>

          {/* Name and Role */}
          <div className='text-center lg:text-left'>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-700 tracking-wider uppercase drop-shadow-sm">
              MHATESWARI. K
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Frontend Developer &nbsp; | &nbsp; React JS &nbsp; | &nbsp; Passion for Clean UI
            </p>
          </div>

          {/* Navigation Menu */}
          <div className='flex space-x-6 sm:space-x-10 mt-4 lg:mt-0 text-sm sm:text-lg text-slate-600 font-bold'>
            <p className='relative cursor-pointer group'>
              ABOUT
              <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-slate-800 transition-all duration-300 group-hover:w-full'></span>
            </p>
            <p className='relative cursor-pointer group'>
              PROJECT
              <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-slate-800 transition-all duration-300 group-hover:w-full'></span>
            </p>
            <p className='relative cursor-pointer group'>
              CONTACT
              <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-slate-800 transition-all duration-300 group-hover:w-full'></span>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Navbar;

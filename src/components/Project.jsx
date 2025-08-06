import React, { useState, useEffect } from 'react';
import prjt1 from '../assets/prjt1.jpg'
import prjt2 from '../assets/prjt2.jpg'
import prjt3 from '../assets/prjt3.jpg'
import prjt4 from '../assets/prjt4.jpg'
import prjt5 from '../assets/prjt5.jpg'
import prjt6 from '../assets/prjt6.jpg'
import html from '../assets/html.jpg';
import css from '../assets/css.jpg';
import tailwind from '../assets/tailwind.jpg';
import js from '../assets/js.jpg';
import react from '../assets/react js.jpg';

const Project = () => {
  const images = [prjt1,prjt2,prjt3,prjt4,prjt5,prjt6]; 
  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className='relative bg-white lg:w-full lg:h-[700px] mt-16 md:grid grid-cols-2'>

    
      <div className='relative'>
        <img src={images[currentIndex]} alt='Project' className='lg:h-[600px] ml-10 lg:mt-12 w-full object-cover' />

     
        {/* <button
          onClick={handlePrev}
          className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 px-3 py-1 rounded-full shadow hover:bg-white transition'
        >
          
        </button>

       
        <button
          onClick={handleNext}
          className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 px-3 py-1 rounded-full shadow hover:bg-white transition'
        >
          
        </button> */}
      </div>

     
      <div className="font-comfortaa px-6 ml-20">
        <p className='text-3xl text-teal-600 font-bold mt-10'>PROJECT</p>
        <p className='text-xl text-teal-600 font-bold mt-5'>RESTAURANT TABLE RESERVATION SYSTEM</p>

        <p className='text-lg mt-4 text-teal-700 leading-relaxed'>
          The Restaurant Table Reservation System is a responsive web application built to simplify and digitize the process of booking tables at restaurants. It enables users to check real-time table availability, select preferred time slots, and confirm reservations instantly, eliminating the need for walk-in bookings and long wait times.
          <br /><br />
          The system also provides an admin panel for restaurant staff to manage bookings, view customer data, and monitor availability efficiently. Developed using React.js, Node.js, and a backend database like MySQL or MongoDB, the application ensures both functionality and scalability. Tailwind CSS is used to create a clean, modern, and user-friendly interface that works seamlessly across devices.
        </p>

        <h1 className='mt-6 text-teal-700 font-semibold text-lg underline'>TECH STACK USED</h1>

        <div className='flex flex-wrap gap-6 mt-5'>
       
          <div className='flex flex-col items-center'>
            <img src={html} alt="HTML" className="w-20 h-20 rounded-full border-2 bg-orange-200 shadow-xl" />
            <h1 className='mt-2 font-bold text-lg'>HTML</h1>
          </div>

        
          <div className='flex flex-col items-center'>
            <img src={css} alt="CSS" className="w-20 h-20 rounded-full border-2 bg-blue-200 shadow-xl" />
            <h1 className='mt-2 font-bold text-lg'>CSS</h1>
          </div>

         
          <div className='flex flex-col items-center'>
            <img src={tailwind} alt="Tailwind" className="w-20 h-20 rounded-full border-2 bg-blue-200 shadow-xl" />
            <h1 className='mt-2 font-bold text-lg text-center'>TAILWIND</h1>
          </div>

        
          <div className='flex flex-col items-center'>
            <img src={js} alt="JavaScript" className="w-20 h-20 rounded-full border-2 bg-yellow-200 shadow-xl" />
            <h1 className='mt-2 font-bold text-lg text-center'>JAVASCRIPT</h1>
          </div>

    
          <div className='flex flex-col items-center'>
            <img src={react} alt="React JS" className="w-20 h-20 rounded-full border-2 bg-blue-100 shadow-xl" />
            <h1 className='mt-2 font-bold text-lg text-center'>REACT JS</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

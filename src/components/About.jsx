import React from 'react';
import myPic from '../assets/myPic.jpg'
import html from '../assets/html.jpg'
import css from '../assets/css.jpg'
import tailwind from '../assets/tailwind.jpg'
import js from '../assets/js.jpg'
import react from '../assets/react js.jpg'
const About = () => {
  return (
    <div className='relative bg-white lg:w-[1300px] lg:h-[700px] mt-52 lg:ml-[300px] rounded-3xl shadow-2xl md:grid grid-cols-2'>

      <div className='absolute top-0 left-0 w-60 h-60 border-t-4 border-l-4 border-teal-200 rounded-tl-3xl'></div>
      <div className='absolute bottom-0 right-0 w-60 h-60 border-b-4 border-r-4 border-teal-500 rounded-br-3xl'></div>

        <div className=' '>
          <img src={myPic} alt="" className='lg:h-[600px] lg:ml-[90px] lg:mt-12 rounded-xl' />
        </div>

       <div className="font-comfortaa">
   <p className='text-xl text-teal-600 font-bold lg:ml-[-100px] mt-10'>Hello.. I am a SOFTWARE DEVELOPER</p>
 
  <p className='text-xl lg:ml-[-100px] lg:mt-4 text-teal-700'>A passionate Frontend Developer with a strong interest in creating visually <br/> appealing and user-friendly
   web applications. I specialize in building responsive interfaces using React JS and Tailwind CSS. With an academic background in MCA and a love for clean design, 
   I'm continuously learning and growing in the tech space. My goal is to turn ideas into accessible and high-performing digital experiences.
  </p>
  <div className=''>
  <h1 className='mt-8 ml-[-100px] text-teal-700 font-semibold text-lg underline'>TECHNICAL SKILLS</h1>

<div className='ml-[-100px] mt-2 flex space-x-5 '>

 <div>
   <img src={html} alt="Profile" className="w-20 h-20 rounded-full border-2 bg-orange-200 border-orange-200 shadow-2xl ml-5 mt-5" />
<h1 className='ml-9 mt-4 font-bold text-lg'>HTML</h1>
 </div>
  <div>
   <img src={css} alt="Profile" className="w-20 h-20 rounded-full border-2 bg-blue-200 border-blue-200 shadow-2xl ml-5 mt-5" />
<h1 className='ml-11 mt-4 font-bold text-lg'>CSS</h1>
 </div>
  <div>
   <img src={tailwind} alt="Profile" className="w-20 h-20 rounded-full border-2 bg-blue-200 border-blue-200 shadow-2xl ml-5 mt-5" />
<h1 className='ml-2 mt-4 font-bold text-lg'>TAILWIND CSS</h1>
 </div>
 <div>
   <img src={js} alt="Profile" className="w-20 h-20 rounded-full border-2 bg-yellow-200 border-yellow-200 shadow-2xl ml-5 mt-5" />
<h1 className='ml-4 mt-4 font-bold text-lg'>JAVASCRIPT</h1>
 </div>
  <div>
   <img src={react} alt="Profile" className="w-20 h-20 rounded-full border-2 bg-blue-100 border-blue-100 shadow-2xl ml-5 mt-5" />
<h1 className='ml-6 mt-4 font-bold text-lg'>REACT JS</h1>
 </div>

</div>

</div>
</div> 
</div>

  );
};


export default About;






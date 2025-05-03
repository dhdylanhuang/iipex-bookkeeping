import React from 'react';

const About = () => {
  return (
    <div className='w-full bg-white pt-16 pb-2 px-4'>
      <div className='max-w-[1240px] mx-auto grid'>
        <div className='flex flex-col justify-center'>
          <p className='text-xl text-blue-500 font-bold'>ABOUT</p>
          <p>
            <span className='md:text-xl sm:text-lg text-base font-bold py-2'>IIPEX Accountancy Services</span> <span className='md:text-xl sm:text-lg text-base py-2'>is based in Central, Glasgow, Scotland.</span>
            <br>
            </ br>
            <span className='md:text-xl sm:text-lg text-base py-2'>Our staff have over 20 years of experience accross an array of industries. </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
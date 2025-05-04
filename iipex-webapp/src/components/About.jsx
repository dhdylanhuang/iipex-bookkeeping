import React from 'react';

const About = () => {
  return (
    <div className='w-full bg-white pt-16 pb-2 px-4'>
      <div className='max-w-[1240px] mx-auto grid'>
        <div className='flex flex-col justify-center'>
          <p className='text-xl text-blue-500 font-bold'>ABOUT</p>
          <p className='md:text-4xl sm:text-3xl text-2xl py-2'>
            IIPEX Accountancy Services is based in <span className='font-bold'>Central Glasgow, Scotland.</span>
            <br></ br>
            Our staff have <span className='font-bold'>over 20 years of experience</span> across an array of industries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
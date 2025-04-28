import React from 'react';

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <p className='text-xl text-blue-500 font-bold'>ABOUT</p>
          <p>
            <span className='md:text-xl sm:text-lg text-base font-bold py-2'>IIPEX staff have over 2O years experience</span> in accountancy, taxation services and business services
          </p>
          {/* <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
// import fsb_logo from '../assets/fsb-logo.png';
// import aat_logo from '../assets/aat-logo.jpg';

const InfoPerformance = () => {
  return (
    <div className='w-full mx-auto bg-white pt-4 pb-16 px-4'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='flex flex-col justify-center'>
          <p className='text-xl text-blue-500 font-bold'>INFO PERFORMANCE</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            We are Members of and Certified with:
          </h1>
          <div className="flex flex-row space-x-8 mt-4">
            {/* <a href="https://www.fsb.org.uk/">
              <img
                src={fsb_logo}
                alt="FSB Logo"
                className="mt-4 w-56 transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </a> */}
            {/* <a href="https://www.aat.org.uk/about">
              <img
                src={aat_logo}
                alt="AAT Logo"
                className="mt-0 w-56 transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </a> */}
          </div>
          {/* <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default InfoPerformance;
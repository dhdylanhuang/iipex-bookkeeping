import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-50'>
      <div>
        <h1 className='w-full text-3xl font-bold text-blue-300'>IIPEX Accountancy Services</h1>
        <p className='py-0'>Office 1025, 3 Fitzroy Place</p>
        <p className='py-0'>1/1 SAUCHIEHALL ST</p>
        <p className='py-0'>FINNIESTON</p>
        <p className='py-0'>GLASGOW</p>
        <p className='py-0'>G3 7RH</p>
        <p className='py-2'>Mobile: 0786 729311</p>
        <p className='py-0'>info@iipex.co.uk</p>
        <p className='py-0'>shabana@iipex.co.uk</p>
        <div className='flex justify-between md:w-[75%] mt-4'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-100'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Contact Us</li>
            <li className='py-2 text-sm'>Contact About Website</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-100'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About Us</li>
            <li className='py-2 text-sm'>FAQs</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-100'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Privacy Policy</li>
            <li className='py-2 text-sm'>Terms & Conditions</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
import React from 'react';
import logo from '../assets/iipex-logo.png';

const Home = () => {
return (
    <div className="text-white p-4 max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="pl-0 md:pl-12 w-full md:w-2/3 flex flex-col justify-center items-start text-left">
            <p className="text-blue-900 font-bold text-4xl">
                Managing your books is not easy.
            </p>
            <h1 className="text-3xl md:text-6xl sm:text-5xl font-bold md:pt-4">
                But at <span className="text-blue-900">IIPEX Accounting Services</span>, our goal is to make it <span className="text-blue-900">easier for you.</span>
            </h1>
            <div className="flex justify-start items-center">
                <p className="text-lg md:text-4xl sm:text-3xl py-4">
                    Whether it’s getting paid by your customers on time, completing your VAT returns, processing payroll or submitting your annual accounts and tax returns, the demands on businesses can seem endless. And it’s almost certainly not why you got into business in the first place. It is, however, exactly why we got into business. We do the things you avoid because where your business is concerned, you do the real work, we do the paperwork.
                </p>
            </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center sm:justify-end items-center px-4 sm:pr-12">
            <img
                src={logo}
                alt="IIPEX Logo"
                className="h-5/6 w-5/6 max-w-screen-sm"
            />
        </div>
    </div>
);
};

export default Home;
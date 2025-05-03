import React from 'react';
import logo from '../assets/iipex-logo.png';

const Home = () => {
return (
    <div className="text-white p-4 max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="pl-0 md:pl-12 w-full md:w-2/3 flex flex-col justify-center items-start text-left">
            <h1 className="text-xl md:text-6xl sm:text-5xl font-bold md:pt-4">
                At <span className="text-blue-400">IIPEX Accountancy Services</span>, our goal is to make it <span className="text-blue-400">easier for you.</span>
            </h1>
            <div className="flex justify-start items-center">
                <p className="text-lg md:text-4xl sm:text-3xl py-12">
                    <ul className="list-disc list-inside">
                        <li>Proffesional Accountancy Services</li>
                        <li>Customised to Individual Clients</li>
                        <li>To Achieve your Business Needs.</li>
                    </ ul>
                </p>
            </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center sm:justify-end items-center px-4 sm:pr-12 sm:py-0">
            <img
                src={logo}
                alt="IIPEX Logo"
                className="h-5/6 w-5/6 sm:h-3/6 sm:w-3/6"
            />
        </div>
    </div>
);
};

export default Home;
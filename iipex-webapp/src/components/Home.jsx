import React from 'react';
import logo from '../assets/iipex-logo.png';

const Home = () => {
return (
    <div className="text-white p-4 max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="pl-0 md:pl-12 w-full md:w-2/3 flex flex-col justify-center items-start text-left">
            <h1 className="text-xl md:text-6xl sm:text-5xl font-bold md:pt-4">
                At <span className="text-blue-400">IIPEX Accountancy Services</span>, we provide:
            </h1>
            <div className="flex justify-start items-center">
                <ul className="text-lg md:text-4xl sm:text-3xl py-12 list-disc list-inside">
                    <li>Profesional Accountancy Services</li>
                    <li>Customised to Individual Clients</li>
                    <li>To Achieve your Business Needs</li>
                </ul>
            </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center sm:justify-end items-center px-4 sm:pr-12 sm:py-0">
            <img
                src={logo}
                alt="IIPEX Logo"
                className="h-max w-max sm:h-2/3 sm:w-2/3"
            />
        </div>
    </div>
);
};

export default Home;
import React from 'react';
import logo from '../assets/iipex-logo.png';

const Home = () => {
return (
    <div className="text-white pt-3 md:pt-0 pl-4 pr-4 max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="pl-0 md:pl-12 w-full md:w-2/3 flex flex-col justify-center items-start text-left">
            <h1 className="text-3xl md:text-5xl font-bold md:pt-4">
                At <span className="text-blue-400">IIPEX Accountancy Services</span>, we provide:
            </h1>
            <div className="flex justify-start items-center">
                <ul className="text-xl md:text-3xl pt-4 md:pt-12 list-disc list-inside">
                    <li>Profesional Accountancy Services</li>
                    <li>Customised to Individual Clients</li>
                    <li>To Achieve your Business Needs</li>
                </ul>
            </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
                src={logo}
                alt="IIPEX Logo"
            />
        </div>
    </div>
);
};

export default Home;
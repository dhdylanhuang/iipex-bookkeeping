import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
// import logo from '../assets/logo.png'

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

return (
    <div className="max-w mx-auto px-2 text-blue-400 bg-white">
        <h1 className="w-full py-4 text-4xl font-bold text-blue-400 text-start text-outline-blue flex flex-col-reverse md:flex-row items-center justify-center">
            {/* <img
                src={logo}
                alt="IIPEX Logo"
                className="hidden md:block w-16 h-16 md:mr-2"
            /> */}
            IIPEX Accountancy Services
        </h1>
        {/* <ul className='text-xl justify-between items-center hidden md:flex'>
            <li className='p-4'><a href="#home">Home</a></li>
            <li className='p-4'><a href="#about">About</a></li>
            <li className='p-4'><a href="#services">Services</a></li>
            <li className='p-4'><a href="#info">INFO</a></li>
            <li className='p-4'><a href="#footer">Contact Us</a></li>
        </ul> */}
        <div onClick={handleNav} className='fixed top-7 right-8 z-10 cursor-pointer block'>
            {!nav ? <AiOutlineMenu onClick={handleNav} size={20} /> : <AiOutlineClose onClick={handleNav} size={20} />}
        </div>
        <div className={
                nav
                    ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-blue-400 z-50 ease-in-out duration-500'
                    : 'fixed left-[-100%] top-0 z-50 ease-in-out duration-500'
            }
        >
            <ul className='uppercase p-4 text-white'>
                <li className='p-4 border-b border-grey-600'><a href="#home">Home</a></li>
                <li className='p-4 border-b border-grey-600'><a href="#about">About</a></li>
                <li className='p-4 border-b border-grey-600'><a href="#services">Services</a></li>
                <li className='p-4 border-b border-grey-600'><a href="#info">INFO</a></li>
                <li className='p-4 border-b border-grey-600'><a href="#footer">Contact Us</a></li>
            </ul>
        </div>
    </div>
)
}

export default Navbar
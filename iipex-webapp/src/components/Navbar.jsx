import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="max-w-[1240px] mx-auto px-2 text-white">
        <h1 className='w-full pt-4 text-4xl font-bold text-white text-center text-outline-blue'>IIPEX Accounting Services</h1>
        <ul className='text-xl justify-between items-center hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Services</li>
            <li className='p-4'>Bespoke</li>
            <li className='p-4'>Contact Us</li>
        </ul>
        <div onClick={handleNav} className='fixed top-4 right-4 z-10 cursor-pointer block md:hidden'>
            {!nav ? <AiOutlineMenu onClick={handleNav} size={20} /> : <AiOutlineClose onClick={handleNav} size={20} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out fixed left-[-100%]'}>
            <h1 className='w-full text-3xl m-4 font-bold text-white'>IIPEX Accounting Services</h1>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-grey-600'>Home</li>
                <li className='p-4 border-b border-grey-600'>About</li>
                <li className='p-4 border-b border-grey-600'>Services</li>
                <li className='p-4 border-b border-grey-600'>Bespoke</li>
                <li className='p-4 border-b border-grey-600'>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
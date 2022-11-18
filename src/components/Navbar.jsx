import React, { useState } from 'react';
import { logo, menu, close } from "../assets";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <nav className='relative lg:mx-auto p-6'>
            <div className='flex items-center justify-between flex-1 md:mx-12'>
                <div className={'pt-2'}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='hidden md:flex space-x-6 items-center'>
                    <a href="#" className='hover:text-darkGrayishBlue'>Pricing</a>
                    <a href="#" className='hover:text-darkGrayishBlue'>Product</a>
                    <a href="#" className='hover:text-darkGrayishBlue'>About us</a>
                    <a href="#" className='hover:text-darkGrayishBlue'>Careers</a>
                    <a href="#" className='hover:text-darkGrayishBlue'>Community</a>
                    <button className='hidden lg:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'>
                        Get Started
                    </button>
                </div>

                <div className="md:hidden flex flex-1 justify-end items-center">
                    <img src={toggle ? close : menu} alt="asd"
                        className="cursor-pointer w-[28px] h-[28px] object-contain"
                        onClick={() => setToggle((prev) => !prev)} />

                </div>

                <div className={toggle ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-gray-gradient ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold text-[#00DFC0] m-4 pt-2 pl-2'>
                        <div className='pt-2'>
                            <img src={logo} alt="Logo" />
                        </div>
                    </h1>
                    <ul>
                        <li className='p-4 border-b'>Pricing</li>
                        <li className='p-4 border-b'>Product</li>
                        <li className='p-4 border-b'>About</li>
                        <li className='p-4 border-b'>Careers</li>
                        <li className='p-4'>Community</li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
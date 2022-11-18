import React from 'react'
import { illustration } from '../assets'
const Hero = () => {
    return (
        <section id="hero">
            <div className='flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
                <div className='flex flex-col mb-12 space-y-12 md:w-1/2 md:mx-12'>
                    <h1 className='max-w-md text-4xl font-bold text-center lg:text-5xl md:text-left'>
                        Bring everyone together to build better products
                    </h1>
                    <p className='max-w-md text-center text-darkGrayishBlue md:text-left'>
                        Manage makes it simple fot software teams to plan
                        day-to-day tasks
                        while keeping the larger team goals in view.
                    </p>
                    <button className='mx-auto md:mx-0 p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight max-w-[140px]'>
                        Get Started
                    </button>
                </div>
                <div className='md:w-1/2 h-full'>
                    <img src={illustration} alt="illustration" />
                </div>
            </div>
        </section>
    )
}

export default Hero
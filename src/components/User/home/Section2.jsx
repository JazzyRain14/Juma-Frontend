import React from 'react'
import { FaBurger } from 'react-icons/fa6'

const Section2 = () => {
    return (
        <section>
            <h1 className="text-lg font-semibold">Our Categories</h1>
            <div className='mt-2 flex justify-around'>
                <button className='bg-slate-200 rounded-md py-3 px-6 flex items-center 
                gap-2 hover:text-white hover:bg-projectRed-2 transition-colors
                duration-300 ease-in-out'>
                    <FaBurger/>
                    Burger
                </button>
                <button className='bg-slate-200 rounded-md py-3 px-6 flex items-center 
                gap-2 hover:text-white hover:bg-projectRed-2 transition-colors
                duration-300 ease-in-out'>
                    <FaBurger/>
                    Burritos
                </button>
                <button className='bg-slate-200 rounded-md py-3 px-6 flex items-center 
                gap-2 hover:text-white hover:bg-projectRed-2 transition-colors
                duration-300 ease-in-out'>
                    <FaBurger/>
                    Burger
                </button>
                <button className='bg-slate-200 rounded-md py-3 px-6 flex items-center 
                gap-2 hover:text-white hover:bg-projectRed-2 transition-colors
                duration-300 ease-in-out'>
                    <FaBurger/>
                    Burger
                </button>
                <button className='bg-slate-200 rounded-md py-3 px-6 flex items-center 
                gap-2 hover:text-white hover:bg-projectRed-2 transition-colors
                duration-300 ease-in-out'>
                    <FaBurger/>
                    Burger
                </button>
            </div>
        </section>
    )
}

export default Section2
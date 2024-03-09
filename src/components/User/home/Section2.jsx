import React from 'react'
import { FaBurger } from 'react-icons/fa6'

const Section2 = () => {
    return (
        <section>
            <h1 className="lg:text-lg font-semibold sm:text-base max-sm:text-base">Our Categories</h1>
            <marquee behavior="" direction="left">
                <div  className='mt-2 flex justify-around gap-5'>
                    <button className='bg-slate-200 rounded-md py-3 w-32 flex items-center justify-center gap-2 hover:text-white hover:bg-projectRed-2 transition-colors duration-300 ease-in-out'>
                        <FaBurger />
                        Burger
                    </button>
                    <button className='bg-slate-200 rounded-md py-3 w-32 flex items-center justify-center gap-2 hover:text-white hover:bg-projectRed-2 transition-colors duration-300 ease-in-out'>
                        <FaBurger />
                        Burger
                    </button>
                    <button className='bg-slate-200 rounded-md py-3 w-32 flex items-center justify-center gap-2 hover:text-white hover:bg-projectRed-2 transition-colors duration-300 ease-in-out'>
                        <FaBurger />
                        Burger
                    </button>
                    <button className='bg-slate-200 rounded-md py-3 w-32 flex items-center justify-center gap-2 hover:text-white hover:bg-projectRed-2 transition-colors duration-300 ease-in-out'>
                        <FaBurger />
                        Burger
                    </button>
                    <button className='bg-slate-200 rounded-md py-3 w-32 flex items-center justify-center gap-2 hover:text-white hover:bg-projectRed-2 transition-colors duration-300 ease-in-out'>
                        <FaBurger />
                        Burger
                    </button>
                </div>
            </marquee>
        </section>
    )
}

export default Section2
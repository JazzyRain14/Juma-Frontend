import React from 'react'
import { FaIceCream, FaWineGlass } from 'react-icons/fa'
import { FaBurger, FaJar } from 'react-icons/fa6'
import { ImSpoonKnife } from 'react-icons/im'
import { LuCroissant, LuCupSoda } from 'react-icons/lu'

const Section2 = () => {
    return (
        <section>
            <h1 className="lg:text-lg font-semibold sm:text-base max-sm:text-base">Our Categories</h1>
            <marquee behavior="" direction="left" className='bg-projectBorder rounded mt-2  items-center py-2 flex'>
                <div className='flex justify-around gap-5'>
                    <button className='bg-slate-200 rounded-md py-3 px-3 flex items-center justify-center gap-2 hover:text-white hover:bg-projectRed-2 transition-colors duration-300 ease-in-out'>
                        <FaBurger />
                        Snacks
                    </button>
                    <button className='bg-slate-200 rounded-md py-3 px-3 flex items-center justify-center gap-2 hover:text-white hover:bg-projectRed-2 transition-colors duration-300 ease-in-out'>
                        <FaJar />
                        Sauces & Condiments
                    </button>
                    <button className='bg-slate-200 rounded-md py-3 px-3 flex items-center justify-center gap-2 hover:text-white hover:bg-projectRed-2 transition-colors duration-300 ease-in-out'>
                        <ImSpoonKnife />
                        Ethnic Food
                    </button>
                    <button className='bg-slate-200 rounded-md py-3 px-3 flex items-center justify-center gap-2 hover:text-white hover:bg-projectRed-2 transition-colors duration-300 ease-in-out'>
                        <LuCroissant />
                        Bakery Items
                    </button>
                    <button className='bg-slate-200 rounded-md py-3 px-3 flex items-center justify-center gap-2 hover:text-white hover:bg-projectRed-2 transition-colors duration-300 ease-in-out'>
                        <LuCupSoda />
                        Soft Drinks
                    </button>
                    <button className='bg-slate-200 rounded-md py-3 px-3 flex items-center justify-center gap-2 hover:text-white hover:bg-projectRed-2 transition-colors duration-300 ease-in-out'>
                        <FaWineGlass />
                        Alcoholic Beverages
                    </button>
                    <button className='bg-slate-200 rounded-md py-3 px-3 flex items-center justify-center gap-2 hover:text-white hover:bg-projectRed-2 transition-colors duration-300 ease-in-out'>
                        <FaIceCream />
                        Desert & Sweets
                    </button>
                </div>
            </marquee>
        </section>
    )
}

export default Section2
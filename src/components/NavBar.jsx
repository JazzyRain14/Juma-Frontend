import React from 'react'
import { FaCartArrowDown, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <>
            <section className=' z-50 flex absolute w-full justify-around items-center border py-4'>
                {/* Links */}
                <div className='bg-transparent'>
                    <Link to='/signin'
                    className='border text-white px-4 py-3 mx-2 rounded-lg hover:bg-projectRed-2 transition-colors duration-500 text-lg font-semibold'
                    >Home</Link>
                    <Link to='/signin'
                    className='border text-white px-4 py-3 mx-2 rounded-lg hover:bg-projectRed-2 transition-colors duration-500 text-lg font-semibold'
                    >Pages</Link>
                    <Link to='/signin'
                    className='border text-white px-4 py-3 mx-2 rounded-lg hover:bg-projectRed-2 transition-colors duration-500 text-lg font-semibold'
                    >About Us</Link>
                    <Link to='/signin'
                    className='border text-white px-4 py-3 mx-2 rounded-lg hover:bg-projectRed-2 transition-colors duration-500 text-lg font-semibold'
                    >Contact Us</Link>
                </div>

                {/* Logo */}
                <div className='flex'>
                    <div className='flex items-center'>
                        <span className=' text-3xl text-white'>
                            <i>
                                <FaCartArrowDown />
                            </i>
                        </span>
                        <span
                            className='text-4xl ml-1 font-extrabold text-projectRed-2'

                            style={{
                                WebkitTextStroke: ".65px #FFFFFF",
                            }}
                        >
                            Juma
                        </span>
                    </div>
                </div>

                {/* search bar together with login btns*/}
                <div className='flex'>
                    <div className='border w-[250px] rounded-[15px] bg-white overflow-hidden flex gap-2'>
                        <input type="text" className='w-full p-1 bg-transparent outline-none ml-2 font-normal' />
                        <button className=' mr-2'>
                            <FaSearch />
                        </button>
                    </div>
                    <button className=' bg-white text-projectRed-2 font-semibold hover:bg-projectRed-2 hover:text-white duration-300 px-4 py-2 rounded-lg mx-2'>Sign in</button>
                    <button className=' bg-projectRed-2 text-white font-semibold hover:bg-white hover:text-projectRed-2 duration-300 px-4 py-2 rounded-lg mx-2'>Sign up</button>
                </div>
            </section>
        </>
    )
}

export default NavBar
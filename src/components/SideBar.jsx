import React, { useRef, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaAngleRight, FaArrowRight, FaFacebook, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
const SideBar = () => {
    const dropDown = useRef(null)
    const [isTrue, setIsTrue] = useState(null);
    const Drop = () => {
        if (isTrue) {
            setIsTrue(false)
        }
        else {
            setIsTrue(true)
        }
    }
    return (
        <>
            <section className='fixed border-2 border-blue-500 w-[300px] h-full overflow-y-scroll'>
                {/* Logo */}
                <div className='col-span-2 ml-4 p-2'>
                    <span
                        className='text-4xl font-extrabold text-projectRed-2'

                        style={{
                            WebkitTextStroke: ".65px #FFFFFF",
                        }}
                    >
                        Juma
                    </span>
                </div>
                <div className='p-4 hidden justify-end'>
                    <FaTimes />
                </div>

                <div className='flex flex-col justify-between h-full'>
                    <div>
                        <NavLink to='/home' className='block border p-4 font-semibold bg-[#424242] text-white hover:bg-[#363636]'>Home</NavLink>

                        <NavLink className='flex items-center justify-between border p-4' onClick={Drop}>
                            All Categories
                            <span>
                                <FaAngleRight className={` transition-transform duration-200 ease-out ${isTrue === false ? 'rotate-90' : ''}`} />
                            </span>
                        </NavLink>

                        {/* DropDown */}
                        <div
                            className={`bg-projectBorder m-2  duration-200 ease-in-out ${isTrue === false ? 'block' : 'hidden'}`}>
                            <NavLink
                                to='categories/cart1'
                                className='block border p-4'>Snacks</NavLink>
                            <NavLink
                                to='categories/cart2'
                                className='block border p-4'>Sauces and Condiments</NavLink>
                            <NavLink
                                to='categories/cart3'
                                className='block border p-4'>Ethnic Food</NavLink>
                            <NavLink
                                to='categories/cart4'
                                className='block border p-4'>Bakery Items</NavLink>
                            <NavLink
                                to='categories/cart5'
                                className='block border p-4'>Soft Drinks</NavLink>
                            <NavLink
                                to='categories/cart6'
                                className='block border p-4'>Alcoholic Beverages</NavLink>
                            <NavLink
                                to='categories/cart7'
                                className='block border p-4'>Desert and Sweets</NavLink>
                        </div>

                        <NavLink to='userprofile' className='block border p-4'>Profile</NavLink>
                        <NavLink to='product cart' className='block border p-4'>Cart</NavLink>
                        <NavLink to='help&support' className='block border p-4'>Help & Support</NavLink>
                    </div>

                    {/* <div className='border mb-2 justify-center font-semibold text-center mb-'>
                        Holla at us @:
                        <div className='flex justify-center gap-6 text-3xl'>
                            <FaWhatsapp className='text-green-600' />
                            <FaFacebook className='text-blue-800' />
                            <FaXTwitter className='text-black' />
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default SideBar
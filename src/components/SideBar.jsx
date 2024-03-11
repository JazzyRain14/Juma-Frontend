import React, { useRef, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaAngleRight, FaArrowRight, FaBars, FaFacebook, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import { NavLink, useLocation } from 'react-router-dom'
import { SidebarData } from './ProjectImgImport'
import SubNav from './SubNav'
const SideBar = ({ isOpen, toggleOpen }) => {
    const location = useLocation()
    const stylesSideBar = `fixed top-0 flex flex-col border-2 border-blue-500 sideBarScroll h-full  sm:w-20 max-sm:w-20 lg:w-[300px] transition-all duration-300 ease-in-out ${isOpen ? 'sm:w-[300px] max-sm:w-[300px]' : 'sm:w-20 max-sm:w-20'}`
    return (
        <>
            <section
                className={stylesSideBar}
            >
                {/* Logo */}
                <div className='border border-black flex items-center justify-between p-7 h-[60px]'>
                    <span
                        className={`text-4xl font-extrabold text-projectRed-2  lg:block ${isOpen ? 'block' : 'max-sm:hidden sm:hidden'}`}

                        style={{
                            WebkitTextStroke: ".65px #FFFFFF",
                        }}
                    >
                        Juma
                    </span>
                    <i className='lg:hidden cursor-pointer' onClick={toggleOpen}><FaBars
                        className='text-[25px]' /></i>
                </div>

                <div className='overflow-x-hidden border-2 border-red-500 flex-1 flex flex-col sideBarScroll'>
                    <div className='flex-1'>
                        {SidebarData.map((items, index) => {
                            return <SubNav
                                isOpen={isOpen}
                                items={items}
                                location={location}
                                key={index} />;
                        })}
                    </div>


                    {/* Footer */}
                    <div className='border w-full mb-2 font-semibold text-center'>
                        Holla at us @:
                        <div className='flex justify-center gap-6 text-3xl mt-2'>
                            <FaWhatsapp className='text-green-600' />
                            <FaFacebook className='text-blue-800' />
                            <FaXTwitter className='text-black' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SideBar
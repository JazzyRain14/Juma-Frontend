import React, { useContext, useRef, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaAngleRight, FaArrowRight, FaBars, FaFacebook, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import { NavLink, useLocation } from 'react-router-dom'
import { AdminSidebarData } from './ProjectImgImport'
import SubNav from './SubNav'
import { SharedContext } from './User/home/SharedContextProvider'
const AdminSideBar = () => {
    const location = useLocation()
    const { isOpen, toggleOpen } = useContext(SharedContext);

    const stylesSideBar = `fixed top-0 flex flex-col sideBarScroll h-full  border-r shadow max-lg:w-0 lg:w-[300px] transition-all duration-300 ease-in-out ${isOpen ? 'sm:w-[300px] max-sm:w-[300px]' : 'sm:w-0 max-sm:w-0'}`
    return (
        <>
            <section
                className={stylesSideBar}
            >
                {/* Logo */}
                <div className='flex items-center justify-between p-7 h-[60px]'>
                    <span
                        className={`text-4xl font-extrabold text-projectRed-2  lg:block ${isOpen ? 'block' : 'max-sm:hidden sm:hidden'}`}

                        style={{
                            WebkitTextStroke: ".65px #FFFFFF",
                        }}
                    >
                        Juma
                    </span>
                    <i className={`${isOpen ? 'block' : 'hidden'}`} onClick={toggleOpen}><FaTimes className='text-[25px] cursor-pointer' /></i>
                </div>

                <div className='overflow-x-hidden flex-1 flex flex-col sideBarScroll'>
                    <div className='flex-1'>
                        {AdminSidebarData.map((items, index) => {
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

export default AdminSideBar
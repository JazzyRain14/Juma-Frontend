import React, { useState } from 'react'
import Section1 from '../home/Section1'
import TopNav from '../home/TopNav'
import SideBar from '../../SideBar'
import { Outlet } from 'react-router-dom'
const SharedLayouts = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
    const styleRes = `w-full overflow-hidden 
    rounded-md sm:ml-20 max-sm:ml-20 lg:ml-[300px] border-2 border-fuchsia-700 transition-all duration-300 ease-in-out ${isOpen ? 'sm:translate-x-[220px] max-sm:translate-x-[220px]' : 'sm:ml-20 max-sm:ml-20'}`
    return (
        <>
            <section className='flex gap-4 justify-between h-full '>
                <SideBar isOpen={isOpen} toggleOpen={toggleOpen} />
                <div className={styleRes}>
                    {/* <div className=' pt-4 px-4'>
                        <TopNav />
                    </div> */}
                    <Outlet />
                </div>
            </section>
        </>
    )
}

export default SharedLayouts
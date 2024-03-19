import React, {useContext, useState } from 'react'
import Section1 from '../home/Section1'
import TopNav from '../home/TopNav'
import SideBar from '../../SideBar'
import { Outlet } from 'react-router-dom'
import { SharedContext } from './SharedContextProvider'
const SharedLayouts = () => {
    // const [isOpen, setIsOpen] = useState(false);
    // const toggleOpen = () => {
    //     setIsOpen(!isOpen)
    // }
    const { isOpen, toggleOpen } = useContext(SharedContext);
    const styleRes = `w-full overflow-hidden 
    rounded-md sm:ml-20 max-sm:ml-20 lg:ml-[300px] border-2 border-fuchsia-700 transition-all duration-300 ease-in-out ${isOpen ? 'sm:translate-x-[220px] max-sm:translate-x-[220px]' : 'sm:ml-0 max-sm:ml-0'}`
    return (
        <>
            <section className='flex gap-4 justify-between h-full '>
                <SideBar/>
                <div className={styleRes}>
                    <Outlet />
                </div>
            </section>
        </>
    )
}

export default SharedLayouts
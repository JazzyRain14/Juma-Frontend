import React from 'react'
import Section1 from '../home/Section1'
import TopNav from '../home/TopNav'
import SideBar from '../../SideBar'
import { Outlet } from 'react-router-dom'

const SharedLayouts = () => {
    return (
        <>
            <section className=' flex gap-4 justify-between h-full'>
                <SideBar />
                <div className=' w-full overflow-hidden 
                rounded-md ml-[300px] border-2 border-fuchsia-700'>
                    <Outlet />
                </div>
            </section>
        </>
    )
}

export default SharedLayouts
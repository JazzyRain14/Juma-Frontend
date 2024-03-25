import React, { useEffect, useState } from 'react'
import Section1 from '../components/User/home/Section1'
import TopNav from '../components/User/home/TopNav'
import SideBar from '../components/SideBar'
import Section2 from '../components/User/home/Section2'
import Section3 from '../components/User/home/Section3'
import Section4 from '../components/User/home/Section4'
import { Outlet, useNavigate } from 'react-router-dom'


const HomePage = () => {
    return (

        <>
        
            <div className='pt-4 px-4'>
                <TopNav/>
                <hr className='rounded-lg bg-[#585757] h-[2px] my-2' />
                <div >
                    <Section1 />
                    <hr className='rounded-lg bg-[#585757] h-[2px] my-4' />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                </div>
            </div>

        </>
    )
}

export default HomePage
import React, { useContext, useState, useEffect } from 'react'
import Section1 from '../home/Section1'
import TopNav from '../home/TopNav'
import { FaCartArrowDown } from "react-icons/fa";
import SideBar from '../../SideBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { SharedContext } from './SharedContextProvider'
import axios from 'axios'
import loader from '../../../assets/Images/Loader.png'
import { LoadingScreen } from './Modals';
const SharedLayouts = () => {
    const endpoints = "https://juma-backend-delta.vercel.app/auth/tokenverify"
    const token = localStorage.token
    const navigate = useNavigate();
    const [loading, setloading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            verifyToken()
        }, 1500);
    }, [])
    const verifyToken = async () => {
        try {
            let result = await axios.get(endpoints, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                    "Accept": "apllication/json"
                }
            });
            if (result.data.status === false) {
                localStorage.clear();
                navigate("/signin");
            } else {
                setloading(false);
            }
        } catch (error) {
            console.log(error);
        }


    }



    const { isOpen, toggleOpen } = useContext(SharedContext);
    const styleRes = `w-full overflow-auto rounded-md sm:ml-0 max-sm:ml-0 lg:ml-[300px] transition-all duration-300 ease-in-out 
    ${isOpen ? 'sm:translate-x-[300px] max-sm:translate-x-[300px]' : 'sm:ml-0 max-sm:ml-0'}`
    return (
        <>
            {
                loading === true ?
                    <LoadingScreen/> :
                    <section className='flex gap-4 justify-between h-full w-full '>
                        <SideBar />
                        <div className={styleRes}>
                            <div className='px-4 pt-4'>
                                <TopNav />
                                <hr className='rounded-lg bg-[#585757] h-[2px] my-2' />
                            </div>
                            <Outlet />
                        </div>
                    </section>
            }
        </>
    )
}

export default SharedLayouts
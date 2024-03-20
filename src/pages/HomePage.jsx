import React, { useEffect, useState } from 'react'
import Section1 from '../components/User/home/Section1'
import { FaCartArrowDown} from "react-icons/fa";
import TopNav from '../components/User/home/TopNav'
import SideBar from '../components/SideBar'
import Section2 from '../components/User/home/Section2'
import Section3 from '../components/User/home/Section3'
import Section4 from '../components/User/home/Section4'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {
    const endpoints = "https://juma-backend.vercel.app/tokenverify"
    const token = localStorage.token
    const navigate = useNavigate();
    const [loading, setloading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        verifyToken()
      }, 1500);
    }, [])
    
    const verifyToken = async ()=>{
        try {
            let result = await axios.get(endpoints,{
                 headers:{
                     "Authorization":`Bearer ${token}`,
                     "Content-Type" : "application/json",
                     "Accept" : "apllication/json"
                 }
             });
             if(result.data.status === false){
                localStorage.clear();
                navigate("/signin");
             }else{
                setloading(false);
             }
        } catch (error) {
            
        }
        

    }

    return (

        <>
        { loading === true ? <div className='flex justify-center'>I  <span className=' text-3xl text-[#1A1110] mt-[7px]'>
                            <i>
                                <FaCartArrowDown />
                            </i>
                        </span>
                        <span
                            className='text-4xl ml-1 font-extrabold text-[#FF0000]'

                            style={{
                                WebkitTextStroke: ".65px #FFFFFF",
                            }}
                        >
                            Juma
                        </span></div>: 
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
        }

        </>
    )
}

export default HomePage
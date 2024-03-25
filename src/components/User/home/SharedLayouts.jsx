import React, { useContext, useState, useEffect} from 'react'
import Section1 from '../home/Section1'
import TopNav from '../home/TopNav'
import { FaCartArrowDown} from "react-icons/fa";
import SideBar from '../../SideBar'
import { Outlet ,useNavigate} from 'react-router-dom'
import { SharedContext } from './SharedContextProvider'
import axios from 'axios'
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
            console.log(error);
        }
        

    }



    const { isOpen, toggleOpen } = useContext(SharedContext);
    const styleRes = `w-full overflow-hidden rounded-md sm:ml-20 max-sm:ml-20 lg:ml-[300px] border-2 border-fuchsia-700 transition-all duration-300 ease-in-out 
    ${isOpen ? 'sm:translate-x-[220px] max-sm:translate-x-[220px]' : 'sm:ml-0 max-sm:ml-0'}`
    return (
        <>
            {
                loading === true ?
                    <div className='flex justify-center'><span className=' text-3xl text-[#1A1110] mt-[7px]'>
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
                        </span>
                    </div> : 
            <section className='flex gap-4 justify-between h-full w-full '>
                <SideBar />
                <div className={styleRes}>
                    <Outlet />
                </div>
            </section>
            }
        </>
    )
}

export default SharedLayouts
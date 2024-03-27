import React, { useContext, useState, useEffect } from 'react'
import Section1 from '../home/Section1'
import TopNav from '../home/TopNav'
import { FaCartArrowDown } from "react-icons/fa";
import SideBar from '../../SideBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { SharedContext } from './SharedContextProvider'
import axios from 'axios'
import loader from '../../../assets/Images/Loader.png'
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
    const styleRes = `w-full overflow-hidden rounded-md sm:ml-20 max-sm:ml-20 lg:ml-[300px] transition-all duration-300 ease-in-out 
    ${isOpen ? 'sm:translate-x-[220px] max-sm:translate-x-[220px]' : 'sm:ml-0 max-sm:ml-0'}`
    return (
        <>
            {
                loading === true ?
                    <section className=' h-screen flex flex-col'>
                        <div className='flex border shadow-sm justify-center py-4'>
                            <span className=' text-3xl text-[#1A1110] mt-[7px]'>
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
                        </div>
                        <div className='flex-1 flex'>
                            <svg className='m-auto mt-36' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                <g transform="rotate(0 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite" fill="#EB0029"></animate>
                                    </rect>
                                </g><g transform="rotate(30 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite" fill="#EB0029"></animate>
                                    </rect>
                                </g><g transform="rotate(60 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite" fill="#EB0029"></animate>
                                    </rect>
                                </g><g transform="rotate(90 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite" fill="#EB0029"></animate>
                                    </rect>
                                </g><g transform="rotate(120 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite" fill="#EB0029"></animate>
                                    </rect>
                                </g><g transform="rotate(150 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite" fill="#EB0029"></animate>
                                    </rect>
                                </g><g transform="rotate(180 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite" fill="#EB0029"></animate>
                                    </rect>
                                </g><g transform="rotate(210 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite" fill="#EB0029"></animate>
                                    </rect>
                                </g><g transform="rotate(240 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite" fill="#EB0029"></animate>
                                    </rect>
                                </g><g transform="rotate(270 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite" fill="#EB0029"></animate>
                                    </rect>
                                </g><g transform="rotate(300 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite" fill="#EB0029"></animate>
                                    </rect>
                                </g><g transform="rotate(330 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" fill="#EB0029"></animate>
                                    </rect>
                                </g>
                            </svg>
                        </div>
                    </section> :
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
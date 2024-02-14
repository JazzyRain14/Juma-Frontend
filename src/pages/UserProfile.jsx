import React, { useRef, useState } from 'react'
import SideBar from '../components/SideBar'
import { NavLink } from 'react-router-dom';
import profilePics from '../assets/Images/babyChef.jpg'
import { LiaClipboardListSolid } from "react-icons/lia";
import { FaAngleRight, FaBell, FaHeart, FaUser } from 'react-icons/fa6';
import { FaHistory, FaWallet } from 'react-icons/fa';
import Modal from 'react-overlays/Modal';
const UserProfile = () => {
    const ref = useRef()
    const [ifTrue, setifTrue] = useState(true);
    const openAccord = () => {
        if (ifTrue === true) {
            setifTrue(false)
        } else {
            setifTrue(true)
        }
    }
    return (
        <>
            <div className='flex flex-col gap-6'>
                <div className='relative flex flex-col bg-projectBlack gap-2 py-6  items-center'>
                    <div className=' flex items-center gap-2 text-white font-semibold absolute top-5 right-5'>
                        <FaWallet className='text-green-700' />
                        &#8358;80.00
                    </div>
                    <div className='relative w-[200px] h-[200px] 
                rounded-full overflow-hidden  object-cover mt-4'>
                        <img
                            className='absolute w-full'
                            src={profilePics}
                            alt="My_Profile_Pics" />
                    </div>

                    <p className='mt-2 font-semibold text-xl text-white'>@Baby Chef</p>
                    <p className='font-semibold text-xl text-white'>babychef123@gmail.com</p>

                    <div className='flex border justify-around py-4 min-w-[500px]'>
                        <div className=' flex justify-between flex-col font-semibold text-white text-lg items-center'>
                            <LiaClipboardListSolid className='text-3xl' />
                            My Orders
                        </div>

                        <div className=' flex justify-between flex-col font-semibold text-white text-lg items-center'>
                            <div className='flex items-center'>
                                <FaHeart className='text-3xl ' />
                                <span className='flex justify-center items-center bg-projectRed-1 ring-2 ring-white text-sm rounded-full 
                            min-w-[20px] min-h-[20px] relative -left-1.5'></span>
                            </div>
                            Wishlist
                        </div>

                        <div className=' flex justify-between flex-col font-semibold text-white text-lg items-center'>
                            <div className=' flex items-center'>
                                <FaBell className='text-3xl' />
                                <span className='flex justify-center items-center bg-projectRed-1 ring-2 ring-white text-sm rounded-full 
                            min-w-[20px] min-h-[20px] relative -left-1.5'></span>
                            </div>
                            Notifications
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mx-20'>
                    <div
                        onClick={openAccord}
                        className='flex text-xl justify-between py-4 items-center transition duration-200 cursor-pointer'>
                        <span className='flex gap-1 items-center'>
                            <FaUser />
                            Edit Profile
                        </span>
                        <FaAngleRight />
                    </div>
                    <div className={`${ifTrue === true ? 'hidden' : 'block'}`}>
                        <div className='flex items-center justify-center gap-x-4 overflow-hidden'>
                            <button className='border p-3 bg-projectRed-2 rounded-lg text-lg font-semibold text-white'>Change Profile Pic</button>

                            <button 
                            className='border p-3 bg-projectRed-2 rounded-lg text-lg font-semibold text-white'
                            >Change Details</button>
                            <button className='border p-3 bg-projectRed-2 rounded-lg text-lg font-semibold text-white'>Your Wallet</button>
                        </div>
                    </div>

                    <div className='flex text-xl justify-between  py-4 items-center'>
                        <span className='flex gap-1 items-center'>
                            <FaHistory />
                            Transanction History
                        </span>
                        <FaAngleRight />
                    </div>

                    <div className='flex text-xl justify-between  py-4 items-center'>
                        <span className='flex gap-1 items-center'>
                            <FaUser />
                            Profile
                        </span>
                        <FaAngleRight />
                    </div>

                    <div className='flex text-xl justify-between  py-4 items-center'>
                        <span className='flex gap-1 items-center'>
                            <FaUser />
                            Profile
                        </span>
                        <FaAngleRight />
                    </div>

                    <button className='text-white border bg-projectRed-2 py-2 rounded-lg text-lg font-semibold mt-6 mb-4'>
                        Log Out
                    </button>
                </div>
            </div>
        </>
    )
}

export default UserProfile
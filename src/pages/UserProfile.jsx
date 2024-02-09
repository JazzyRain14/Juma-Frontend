import React from 'react'
import SideBar from '../components/SideBar'
import profilePics from '../assets/Images/babyChef.jpg'
import { LiaClipboardListSolid } from "react-icons/lia";
import { FaAngleRight, FaArrowRight, FaArrowRightArrowLeft, FaBell, FaHeart, FaUser } from 'react-icons/fa6';
import { FaHistory } from 'react-icons/fa';
const UserProfile = () => {
    return (
        <>
            <div className='flex flex-col gap-6'>
                <div className='flex bg-projectBlack flex-col gap-2 py-6  items-center'>
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
                            min-w-[20px] min-h-[20px]'></span>
                            </div>
                            Wishlist
                        </div>

                        <div className=' flex justify-between flex-col font-semibold text-white text-lg items-center'>
                            <div className=' flex items-center'>
                                <FaBell className='text-3xl' />
                                <span className='flex justify-center items-center bg-projectRed-1 ring-2 ring-white text-sm rounded-full 
                            min-w-[20px] min-h-[20px]'></span>
                            </div>
                            Notifications
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mx-20'>
                    <div className='flex text-xl justify-between  py-4 items-center'>
                        <span className='flex gap-1 items-center'>
                            <FaUser />
                            My Profile
                        </span>
                        <FaAngleRight />
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

                    <button className='border bg-projectRed-2 py-2 rounded-lg text-lg font-semibold mt-6'>
                        Log Out
                    </button>
                </div>
            </div>
        </>
    )
}

export default UserProfile
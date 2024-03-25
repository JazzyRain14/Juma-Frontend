import React from 'react'
import { FaCartArrowDown, FaFacebook, FaGithub, FaInstagram, FaLink, FaLinkedin, FaSearch, FaTwitter } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className='w-full min-h-[300px] p-8'>
                <div className='grid grid-flow-col grid-cols-4 max-md:grid-flow-row gap-6 text-white '>
                    <div className='flex flex-col col-span-2 max-md:col-span-4 gap-4 justify-center'>
                        <span
                            className='text-4xl ml-1 font-extrabold text-projectRed-2'

                            style={{
                                WebkitTextStroke: ".65px #FFFFFF",
                            }}
                        >
                            Juma
                        </span>
                        <span className='text-white text-sm'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium veniam consectetur assumenda ratione, voluptates placeat illo in?.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium veniam consectetur assumenda ratione, voluptates placeat illo in?.
                        </span>
                        <span className='mt-2 text-white'>
                            <h1 className='mb-1 font-semibold'>Developed & Owned By:</h1>
                            <span className='font-semibold'>Front-End:</span>
                            <span className='text-[15px]'> Olalekan Ajadi</span><br />
                            <span className='font-semibold'>Back-End: </span>
                            <span className='text-[15px]'>Asamu Victor</span>
                        </span>
                    </div>

                    <div className=' flex justify-between max-md:col-span-4'>
                        <div className='max-md:col-span-2 max-md:ml-12 max-sm:ml-0'>
                            <h1 className='text-2xl mb-4'>Quick Link</h1>
                            <ul className=' flex gap-4 flex-col text-sm list-none'>
                                <Link to="/home"><li to="/home" className='hover:text-projectRed-2 cursor-pointer w-fit'>Home</li></Link>
                                <Link><li to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'>My Account</li></Link>
                                <Link><li to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'> Menu</li></Link>
                                <Link><li to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'> Chefs</li></Link>
                            </ul>
                        </div>

                        <div className='max-md:col-span-2  max-md:mr-12 max-sm:mr-0'>
                            <h1 className=' text-2xl mb-4'>Information</h1>
                            <ul className=' flex flex-col gap-4 text-sm'>
                                <Link><li to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'>About Us</li></Link>
                                <Link><li to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'>Contact Us</li></Link>
                                <Link><li to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'>Terms and Conditions</li></Link>
                                <Link><li to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'>Private Policy</li></Link>
                            </ul>
                        </div>
                    </div>

                    <div className='max-md:col-span-4'>
                        <h1 className=' text-2xl mb-4'>Socials</h1>
                        <p className='mb-2'>Follow us on social media for Latest updates and <br className='max-sm:hidden' />services</p>

                        <div className='flex flex-col max-md:flex-row max-md:justify-between gap-2 max-md:col-span-4'>
                            <div>
                                <h1 className='text-lg mb-2 max-sm:text-base'>FrontEnd Developer</h1>
                                <ul className='flex gap-2 text-2xl'>
                                    <li to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><Link><FaXTwitter /></Link></li>
                                    <li to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><Link><FaInstagram /></Link></li>
                                    <li to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><Link><FaLinkedin /></Link></li>
                                    <li to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><Link><FaGithub /></Link></li>
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-lg mb-2  max-sm:text-base'>BackEnd Developer</h1>
                                <ul className='flex gap-2 text-2xl max-md:float-right'>
                                    <li to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><Link><FaXTwitter /></Link></li>
                                    <li to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><Link><FaInstagram /></Link></li>
                                    <li to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><Link><FaLinkedin /></Link></li>
                                    <li to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><Link><FaGithub /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center text-white text-[16px] py-2 font-semibold bg-projectBlack'>
                <h1>©2024 @Juma Food and Confectionaries - All rights reserved</h1>
            </div>
        </>
    )
}

export default Footer
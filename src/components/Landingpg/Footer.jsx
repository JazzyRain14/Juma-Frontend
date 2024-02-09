import React from 'react'
import { FaCartArrowDown, FaFacebook, FaGithub, FaInstagram, FaLink, FaLinkedin, FaSearch, FaTwitter } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className='w-full min-h-[300px] p-8'>
                <div className='grid grid-flow-col grid-cols-4  gap-6 text-white '>
                    <div className='flex flex-col col-span-2 gap-4 justify-center'>
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

                    <div className='text-white flex flex-col'>
                        <h1 className='text-2xl mb-4'>Quick Link</h1>

                        <table>
                            <tr className=' flex gap-4 flex-col text-sm'>
                                <Link to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><td>Home</td></Link>
                                <Link to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><td>My Account</td></Link>
                                <Link to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><td>Menu</td></Link>
                                <Link to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><td>Chefs</td></Link>
                            </tr>
                        </table>
                    </div>

                    <div className=''>
                        <h1 className=' text-2xl mb-4'>Information</h1>

                        <table>
                            <tr className=' flex flex-col gap-4 text-sm'>
                                <Link to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><td>About Us</td></Link>
                                <Link to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><td>Contact Us</td></Link>
                                <Link to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><td>Terms and Conditions</td></Link>
                                <Link to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><td>Private Policy</td></Link>
                            </tr>
                        </table>
                    </div>

                    <div>
                        <h1 className=' text-2xl mb-4'>Socials</h1>
                        <p className='mb-2'>Follow us on social media for Latest updates and <br />services</p>

                        <div className='flex flex-col gap-2'>
                            <div>
                                <h1 className='text-lg mb-2'>FrontEnd Developer</h1>
                                <table>
                                    <tr className='flex gap-2 text-2xl'>
                                        <Link to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><td><FaXTwitter /></td></Link>
                                        <Link to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><td><FaInstagram /></td></Link>
                                        <Link to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><td><FaLinkedin /></td></Link>
                                        <Link to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><td><FaGithub /></td></Link>
                                    </tr>
                                </table>
                            </div>
                            <div>
                                <h1 className='text-lg mb-2'>BackEnd Developer</h1>
                                <table>
                                    <tr className='flex gap-2 text-2xl'>
                                        <Link to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><td><FaXTwitter /></td></Link>
                                        <Link to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><td><FaInstagram /></td></Link>
                                        <Link to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><td><FaLinkedin /></td></Link>
                                        <Link to="#" className='hover:text-projectRed-2 cursor-pointer w-fit'><td><FaGithub /></td></Link>
                                    </tr>
                                </table>
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
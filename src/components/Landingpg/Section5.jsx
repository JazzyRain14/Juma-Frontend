import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import burgerVid from '../../assets/Videos/burgerVid_2.mp4'
import bbyChef from '../../assets/Images/babyChef.jpg'
import chef1 from '../../assets/Images/chef1.jfif'
import chef2 from '../../assets/Images/chef2.jpg'
import chef3 from '../../assets/Images/chef3.jfif'
import chef4 from '../../assets/Images/chef4.jfif'
import { FaFacebook, FaInstagram, FaStar, FaStarHalfAlt, FaTwitter } from 'react-icons/fa'
const Section5 = () => {
    const navigate = useNavigate()
    return (
        <>
            <section
                className='max-h-[500px] max-md:max-h-full w-full flex flex-col gap-4 bg-white py-4'
            >
                <h1 className='text-center text-lg font-semibold'>Our Professional Chefs</h1>

                <div className='transition-all duration-200 ease-out flex justify-center max-md:grid gap-6 mx-6'>

                    <div className='transition-all duration-200 ease-out 
                    overflow-hidden rounded-lg flex flex-col h-fit w-[250px] max-md:w-[350px]
                    hover:shadow-lg hover:shadow-slate-600 hover:transition-shadow
                    hover:duration-300 hover:ease-in-out'>
                        <div className='relative h-[300px] max-md:h-[350px] w-full border'>
                            <img src={chef1} alt=""
                                className='absolute top-0 w-full h-full'
                            />
                        </div>
                        <footer className='py-4 border-t-0 
                        rounded-lg rounded-t-none w-full'>
                            <h4 className='text-center mb-2'><b>John Doe</b></h4>
                            <div className='flex justify-center w-full text-2xl gap-6 my-2'>
                                <span className=' hover:text-projectRed-2 transition-colors duration-300 ease-in-out rounded-lg cursor-pointer'>
                                    <Link to='https://www.facebook.com'><FaFacebook /></Link>
                                </span>
                                <span className=' hover:text-projectRed-2 transition-colors duration-300 ease-in-out rounded-lg cursor-pointer'>
                                    <Link to='https://www.facebook.com'><FaTwitter /></Link>
                                </span>
                                <span className=' hover:text-projectRed-2 transition-colors duration-300 ease-in-out rounded-lg cursor-pointer'>
                                    <Link to='https://www.facebook.com'><FaInstagram /></Link>
                                </span>
                            </div>
                            <div className=' flex justify-center'>
                                <i className='text-[#FCC200]'><FaStar /></i>
                                <i className='text-[#FCC200]'><FaStar /></i>
                                <i className='text-[#FCC200]'><FaStar /></i>
                                <i className='text-[#FCC200]'><FaStar /></i>
                                <i className='text-[#908e8e]'><FaStar /></i>
                            </div>
                        </footer>
                    </div>
                    <div className=' transition-all duration-200 ease-out 
                    overflow-hidden rounded-lg flex flex-col h-fit w-[250px] max-md:w-[350px]
                    hover:shadow-lg hover:shadow-slate-600 hover:transition-shadow
                    hover:duration-300 hover:ease-in-out'>
                        <div className='relative h-[300px] max-md:h-[350px] w-full border'>
                            <img src={bbyChef} alt=""
                                className='absolute top-0 w-full h-full'
                            />
                        </div>
                        <footer className='py-4 border-t-0 
                        rounded-lg rounded-t-none'>
                            <h4 className='text-center mb-2'><b>Cute Muffins</b></h4>
                            <div className='flex justify-center text-2xl gap-6 my-2'>
                                <span className=' hover:text-projectRed-2 transition-colors duration-300 ease-in-out rounded-lg cursor-pointer'>
                                    <Link to='https://www.facebook.com'><FaFacebook /></Link>
                                </span>
                                <span className=' hover:text-projectRed-2 transition-colors duration-300 ease-in-out rounded-lg cursor-pointer'>
                                    <Link to='https://www.facebook.com'><FaTwitter /></Link>
                                </span>
                                <span className=' hover:text-projectRed-2 transition-colors duration-300 ease-in-out rounded-lg cursor-pointer'>
                                    <Link to='https://www.facebook.com'><FaInstagram /></Link>
                                </span>
                            </div>
                            <div className=' flex justify-center'>
                                <i><FaStar className='text-[#FCC200]' /></i>
                                <i><FaStar className='text-[#FCC200]' /></i>
                                <i><FaStar className='text-[#FCC200]' /></i>
                                <i><FaStar className='text-[#FCC200]' /></i>
                                <i><FaStar className='text-[#FCC200]' /></i>
                            </div>
                        </footer>
                    </div>
                    <div className=' transition-all duration-200 ease-out 
                    overflow-hidden rounded-lg flex flex-col h-fit w-[250px] max-md:w-[350px]
                    hover:shadow-lg hover:shadow-slate-600 hover:transition-shadow
                    hover:duration-300 hover:ease-in-out'>
                        <div className='relative h-[300px] max-md:h-[350px] w-full border'>
                            <img src={chef2} alt=""
                                className='absolute top-0 w-full h-full'
                            />
                        </div>
                        <footer className='py-4 border-t-0 
                        rounded-lg rounded-t-none'>
                            <h4 className='text-center mb-2'><b>Hwang Min</b></h4>
                            <div className='flex justify-center text-2xl gap-6 my-2'>
                                <span className=' hover:text-projectRed-2 transition-colors duration-300 ease-in-out rounded-lg cursor-pointer'>
                                    <Link to='https://www.facebook.com'><FaFacebook /></Link>
                                </span>
                                <span className=' hover:text-projectRed-2 transition-colors duration-300 ease-in-out rounded-lg cursor-pointer'>
                                    <Link to='https://www.facebook.com'><FaTwitter /></Link>
                                </span>
                                <span className=' hover:text-projectRed-2 transition-colors duration-300 ease-in-out rounded-lg cursor-pointer'>
                                    <Link to='https://www.facebook.com'><FaInstagram /></Link>
                                </span>
                            </div>
                            <div className=' flex justify-center'>
                                <i><FaStar className='text-[#FCC200]' /></i>
                                <i><FaStar className='text-[#FCC200]' /></i>
                                <i><FaStar className='text-[#FCC200]' /></i>
                                <i><FaStar className='text-[#FCC200]' /></i>
                                <i><FaStarHalfAlt className='text-[#FCC200]' /></i>
                            </div>
                        </footer>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section5
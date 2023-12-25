import React, { useState } from 'react'
import google from '../Images/google-color-icon.png'
import { FaCartArrowDown, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [type, settype] = useState("password");
    const [eye, seteye] = useState(FaEyeSlash);
    const [password, setpassword] = useState("");


    const reveal = (e) => {
        e.preventDefault()
        if (type === "password") {
            seteye(FaEye)
            settype("text")
        }
        else {
            settype("password")
            seteye(FaEyeSlash)
        }
    }

    return (
        <>
            <div className='bg-[#CCCCCC] h-100 min-h-screen grid grid-flow-row gap-8 px-8 py-4 lg:grid-cols-grid1 lg:gap-4 lg:px-4'>
                {/* {/* left div */}
                <div className=' row-span-1 border'>
                    {/* Logo */}
                    <div className='border-r-2 border-projectRed flex items-center mb-8'>
                        <span className=' text-3xl text-[#1A1110]'>
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
                    {/* vector */}
                    <div
                        className='hidden sm:flex flex-col gap-[35px] justify-center items-center'
                    >
                        <div
                            className='flex justify-center bg-dining h-[350px] 
                    w-[450px]'>
                        </div>
                        <span className='w-[450px] text-[14px]'>
                            Welcome To <span className='text-[#FF0000]'>Juma</span> Food and Confectionaries, We satisfy your cravings. Be Sure to check out on our <Link>Terms and Conditions</Link>.
                        </span>
                    </div>
                </div>

                {/* right div */}
                <div className=' row-span-6'>
                    <h1 className='text-4xl md:text-2xl'>Welcome to <span className=' text-projectRed'>Juma</span></h1>
                    <p className=' font-semibold text-[16px] md:text-[12px]'><span className=' text-xl text-projectRed md:text-lg'>Sign Up</span>, Let's satisfy your cravings</p>
                    <form action="" className='mt-3'>

                        <div className='mt-2 mb-4 md:mt-1 md:mb-3'>

                            <label className=' block mb-2 text-[#424242] text-[26px] md:text-[15px]'>Username</label>
                            <div className='border border-projectBorder p-4 rounded bg-[#ffffff] md:p-2'>
                                <input
                                    type="text"
                                    className=' w-full text-2xl  outline-none bg-transparent md:text-sm'
                                    name='username'
                                    placeholder='eg: jazzyrain' />
                            </div>
                        </div>
                        <div className='mt-2 mb-4 md:mt-1 md:mb-3'>

                            <label className=' block mb-2 text-[#424242] text-[26px] md:text-[15px]'>Email</label>
                            <div className='border border-projectBorder p-4 rounded bg-[#ffffff] md:p-2'>
                                <input
                                    type="mail"
                                    className=' w-full text-2xl  outline-none bg-transparent md:text-sm'
                                    name='email'
                                    placeholder='info@example.com' />
                            </div>
                        </div>
                        <div className='mt-2 mb-4 md:mt-1 md:mb-3'>

                            <label className=' block mb-2 text-[#424242] text-[26px] md:text-[15px]'>Password</label>
                            <div className='border border-projectBorder p-4 rounded bg-[#ffffff] md:p-2'>
                                <input
                                    type="text"
                                    className=' w-full text-2xl  outline-none bg-transparent md:text-sm'
                                    name='password'
                                    placeholder='enter your password' />
                            </div>
                        </div>


                        {/* <div className='mt-2 mb-4'>
                            <label className=' block mb-2 text-[#424242] text-[26px]'>Email</label>
                            <div className='border border-projectBorder p-4 rounded bg-[#ffffff]'>
                                <input
                                    type="mail"
                                    className=' w-full bg-red-30 text-2xl  outline-none bg-transparent'
                                    name='email'
                                    placeholder='info@example.com' />
                            </div>
                        </div>

                        <div className='mt-2 mb-4'>
                            <label className=' block mb-2 text-[#424242] text-[26px]'>Password</label>

                            <div className='border border-projectBorder p-4 rounded flex items-center  bg-[#ffffff]'>
                                <input
                                    className=' w-full bg-red-30 text-2xl  outline-none bg-transparent'
                                    type={type}
                                    name='password'
                                    placeholder='Password'
                                    onChange={(e) => setpassword(e.target.value)}
                                />
                                {
                                    password === "" ?
                                        <span className='ml-7'></span> :
                                        <button onClick={reveal}
                                            type='button'
                                            className='
                                             rounded-[50%] flex items-center justify-center w-[30px] h-[100%] cursor-pointer text-[25px]'>
                                            {eye}
                                        </button>
                                }
                            </div>
                        </div> */}


                        <button className=' w-[100%] p-5 mt-2 mb-4 text-2xl font-semibold rounded bg-[#d61313] hover:bg-[#d61313f3] text-[#ffffff]
                         md:mt-1 md:mb-3 md:p-3 md:text-lg'>
                            Sign In
                        </button>
                        <button className=' w-[100%] p-5 mt-2 mb-4 text-2xl font-semibold border border-projectBlack  text-projectBlack rounded flex justify-center items-center hover:bg-[#f8f8f8] md:p-3 md:mb-3 md:mt-1 md:text-lg'>
                            <span>
                                <img src={google} alt="" className='mr-2 w-5 md:w-7' /></span>
                            Continue with Google
                        </button>
                    </form>
                    <p className='text-xl md:text-sm'>Don't have an account? <Link to='/signin' className='text-[#FF0000] font-medium'>Sign Up for free</Link>
                    </p>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default SignUp
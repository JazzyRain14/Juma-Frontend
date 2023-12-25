import React, { useState } from 'react'
import google from '../Images/google-color-icon.png'
import { FaCartArrowDown, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignIn = () => {
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
            <div className='bg-[#CCCCCC] h-100 min-h-screen  grid grid-flow-row gap-8 px-8 pt-4'>
                {/* {/* left div */}

                {/* Logo */}
                <div className=' row-span-1 border-r-2 border-projectRed flex items-center mb-8'>
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

                {/* right div */}
                <div className=' row-span-6'>
                    <h1 className='text-4xl'>Welcome Back</h1>
                    <p className=' font-semibold text-[16px]'><span className=' text-xl text-projectRed'>Sign In</span>, Let's satisfy your cravings</p>
                    <form action="" className='mt-3'>
                        <div className='mt-2 mb-4'>
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
                        </div>
                        <button className=' w-[100%] p-5 mt-2 mb-4 text-2xl font-semibold rounded bg-[#d61313] hover:bg-[#d61313f3] text-[#ffffff]'>
                            Sign In
                        </button>
                        <button className=' w-[100%] p-5 mt-2 mb-4 text-2xl font-semibold border border-projectBlack  text-projectBlack rounded flex justify-center items-center hover:bg-[#f8f8f8]'>
                            <span>
                                <img src={google} alt="" className='mr-2 w-7' /></span>
                            Continue with Google
                        </button>
                    </form>
                    <p className=' border text-xl'>Don't have an account? <Link to='/signup' className='text-[#FF0000] font-medium'>Sign Up for free</Link>
                    </p>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default SignIn
import React from 'react'
import google from '../Images/google-color-icon.png'
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
const SignIn = () => {
    return (
        <div className="h-screen w-screen border border-black
        grid grid-cols-2 gap-5
        p-8 bg-[#CCCCCC]"
            style={{ gridTemplateColumns: "40% auto" }}
        >
            <div className=' col-span-1 border-2'
                style={{
                    display: "flex",
                    flexDirection: "column",
                    // backgroundColor:"#CCCCCC"
                }}
            >

                {/* logo */}
                <div className=' flex items-center p-2 pl-6 w-fit'>
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

                <div style={{
                    display: "flex", flexDirection: 'column', gap: '35px', justifyContent: 'center', alignItems: 'center'
                }}>
                    <div
                        className=' flex justify-center bg-dining h-[350px] 
                    w-[450px]'>
                    </div>
                    <span className='w-[450px]'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur possimus, natus repellendus quibusdam ratione nam ad eveniet explicabo tempora numquam minima.
                    </span>
                </div>


            </div>


            <div className='bg-[#ffffff] p-8 rounded-2xl overflow-hidden col-span-1'>

                <h1 className='text-2xl ml-5'> Welcome to <span className='text-[#FF0000] font-semibold'>Juma</span>
                </h1>
                <p className=' text-xs ml-5'>We satisfy your cravings <span></span></p>

                <div className='flex m-5 mb-0 justify-center items-center  w-[500px]'>
                    <form action="" className=' h-[350px] w-[100%]'>

                        <div className='mt-3 mb-3'>
                            <label className=' block mb-2 text-[#424242]'>Email</label>
                            <input
                                className=' w-[100%] p-2 rounded border border-[#d6d5d5] outline-none'
                                type="mail"
                                name='email'
                                placeholder='info@example.com'
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='block mb-2 text-[#424242]'> Password</label>
                            <input
                                className=' w-[100%] p-2 rounded border border-[#d6d5d5] outline-none'
                                type="password"
                                name='password'
                            placeholder='Password'/>
                        </div>
                        <button className=' w-[100%] p-2 mb-3 mt-3 text-lg font-semibold rounded bg-[#d61313] hover:bg-[#d61313f3] text-[#ffffff]'>
                            Sign In
                        </button>
                        <button className=' w-[100%] p-2 mt-3 text-[15px] font-semibold border border-[#1A1110] rounded flex justify-center items-center hover:bg-[#f8f8f8]'>
                            <span>
                                <img src={google} alt="" className='mr-2 w-7' /></span>
                            Continue with Google
                        </button>
                    </form>
                </div>
                <p className='ml-5'>Don't have an account? <Link to='/signup' className='text-[#FF0000] font-medium'>Sign Up for free</Link>
                </p>
            </div>
        </div>
    )
}

export default SignIn
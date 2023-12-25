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
            <div
                className=" h-screen w-screen border border-black block p-4
        sm:grid grid-cols-grid1 gap-5 bg-[#CCCCCC] sm:p-8"
            >
                {/* left div */}
                <div className='py-4 mb-5 sm:flex flex-col border'
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

                    {/* left div vector */}
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
                <div className='bg-[#ffffff] p-8 rounded-2xl col-span-1'>

                    <h1 className=' m-0 text-3xl sm:text-2xl sm:ml-5'> Welcome to <span className='text-[#FF0000] font-semibold'>Juma</span>
                    </h1>
                    <p className='m-0 text-xs font-semibold sm:ml-5 sm:text-xs'>We satisfy your cravings <span></span></p>

                    <div className='flex justify-center items-center w-full m-0 sm:w-[500px] sm:m-5'>
                        <form action="" className=' h-[350px] w-[100%]'>

                            <div className='mt-3 mb-3'>
                                <label className=' block mb-2 text-[#424242]'>Username</label>
                                <div className='border border-[#8b8a8a] rounded p-2 bg-white items-center flex'>
                                    <input
                                        className=' bg-transparent
                                block rounded outline-none w-[100%]'
                                        type="text"
                                        name='username'
                                        placeholder='Username'
                                    />
                                </div>
                            </div>
                            <div className='mt-3 mb-3'>
                                <label className=' block mb-2 text-[#424242]'>Email</label>
                                <div className='border border-[#8b8a8a] rounded p-2 bg-white items-center flex'>
                                    <input
                                        className=' bg-transparent
                                block rounded outline-none w-[100%]'
                                        type="mail"
                                        name='email'
                                        placeholder='info@example.com'
                                    />
                                </div>
                            </div>

                            <div className='mb-3'>
                                <label className='block mb-2 text-[#424242]'> Password</label>

                                <div className='border border-[#8b8a8a] rounded p-2 bg-white items-center flex'>
                                    <input
                                        className=' bg-transparent
                                    block rounded outline-none w-[100%]'
                                        type={type}
                                        name='password'
                                        placeholder='Password' onChange={(e) => setpassword(e.target.value)} />
                                    {
                                        password === "" ?
                                            <span className='ml-7'></span> :
                                            <button onClick={reveal}
                                                type='button'
                                                className=' rounded-[50%] flex items-center justify-center w-[30px] h-[100%] cursor-pointer text-[18px]'>
                                                {eye}
                                            </button>
                                    }
                                </div>
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
        </>
    )
}

export default SignUp
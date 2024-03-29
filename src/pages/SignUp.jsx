import React, { useState } from 'react'
import google from '../assets/Images/google-color-icon.png'
import { FaCartArrowDown, FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import dining from '../assets/Images/Dining.png';
import yupValidation from './yupValidation';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import { useIsOnline } from 'react-use-is-online';
import { useEffect } from 'react';
import { FaCheck, FaExclamation } from 'react-icons/fa6';
const SignUp = () => {
    const [type, settype] = useState("password");
    const [eye, seteye] = useState(FaEyeSlash);
    const endpoints = "https://juma-backend-delta.vercel.app/auth/signup"
    const navigate = useNavigate();
    const { isOnline, isOffline } = useIsOnline()
    const [isDisabled, setisDisabled] = useState(!isOnline)
    useEffect(() => {
        if (isOnline) {
            toast.custom((t) => (
                <div className='border p-4 bg-[#ECFDF3] relative'>
                    <div className=' flex gap-2 items-center'>
                        <FaCheck className='bg-[#008A2E] p-1 text-white text-2xl rounded-full' />
                        <h1 className='text-lg text-[#008A2E] font-semibold'>You're Connected</h1>
                    </div>
                    <p className='text-sm text-[#008A2E]'>Good to have you back online!</p>
                    {/* <button className='abso' onClick={() => toast.dismiss(t)}><FaTimes/></button> */}
                </div>
            ));
            setisDisabled(false);
        } else {
            toast.custom((t)=>(
                <div className='border p-4 bg-[#FFF0F0] relative'>
                    <div className=' flex gap-2 items-center'>
                        <FaExclamation className='bg-projectRed-2 p-1 text-white text-2xl rounded-full' />
                        <h1 className='text-lg text-projectRed-2 font-semibold'>Uh-oh</h1>
                    </div>
                    <p className='text-sm text-projectRed-2'>Looks like you should connect to the internet.</p>
                    {/* <button className='abso' onClick={() => toast.dismiss(t)}><FaTimes/></button> */}
                </div>
            ))
            setisDisabled(true);
        }
    }, [isOnline])

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            adminStatus: false
        },
        onSubmit: async (values) => {
            try {
                let result = await axios.post(endpoints, values);
                if (result) {
                    console.log(result);
                    const messages = result.data.message
                    if (result.data.status === false) {
                        toast.error(messages);
                    } else {
                        localStorage.token = "09116087494"
                        toast.success(messages);
                        setTimeout(() => {
                            navigate("/signin");
                        }, 3000);
                    }
                }
            } catch (err) {
                console.log(err);
            }


        },
        validationSchema: yupValidation
    })

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
            <Toaster position='top-center' expand={true} richColors />
            <div className='bg-[#CCCCCC] h-100 min-h-screen grid grid-flow-row gap-8 p-6 md:grid-cols-grid1 md:gap-4 md:p-8'>

                {/* {/* left div */}
                <div className=' row-span-1'>
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
                        className='hidden md:flex flex-col gap-[35px] justify-center items-center'
                    >
                        <div
                            className='flex justify-center h-[350px] 
                    w-[450px]'>
                            <img src={dining} alt="" className='h-full w-full object-cover' />
                        </div>
                        <span className='text-[14px]  lg:w-[450px]'>
                            Welcome To <span className='text-[#FF0000]'>Juma</span> Food and Confectionaries, We satisfy your cravings. Be Sure to check out on our <Link>Terms and Conditions</Link>.
                        </span>
                    </div>
                </div>

                {/* right div */}
                <div className=' row-span-6'>
                    {/* {isOnline?<Toaster position='bottom-right' richColors/>:<Toaster position='bottom-right' style={{color:'red'}}/>} */}
                    <h1 className='text-4xl md:text-2xl'>Welcome to <span className=' text-projectRed'>Juma</span></h1>
                    <p className=' font-semibold text-[16px] md:text-[12px]'>
                        <span className=' text-xl text-projectRed md:text-lg'>Sign Up</span>, Let's satisfy your cravings
                    </p>
                    <form
                        action=""
                        className='mt-3'
                        onSubmit={formik.handleSubmit}
                    >

                        <div className='mt-2 mb-4 md:mt-1 md:mb-3'>

                            <label className=' block mb-2 text-[#424242] text-[26px] md:text-[15px]'>Username</label>
                            <div
                                className={`border p-4 rounded bg-[#ffffff] md:p-2 
                                ${formik.errors.username && formik.touched.username ? 'border-projectRed' : 'border-projectBorder'}
                                `}
                            >
                                <input
                                    type="text"
                                    className=' w-full text-2xl  outline-none bg-transparent md:text-sm'
                                    name='username'
                                    placeholder='eg: jazzyrain'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            {formik.touched.username ? <small
                                className='text-projectRed  text-lg md:text-[16px]'>
                                {formik.errors.username}
                            </small> : ""}
                        </div>
                        <div className='mt-2 mb-4 md:mt-1 md:mb-3'>

                            <label className=' block mb-2 text-[#424242] text-[26px] md:text-[15px]'>Email</label>
                            <div
                                className={`border border-projectBorder p-4 rounded bg-[#ffffff] md:p-2 
                                ${formik.errors.email && formik.touched.email ? 'border-projectRed' : 'border-projectBorder'}
                            `}>
                                <input
                                    type="mail"
                                    className=' w-full text-2xl  outline-none bg-transparent md:text-sm'
                                    name='email'
                                    placeholder='info@example.com'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            {formik.touched.email ? <small
                                className='text-projectRed text-lg md:text-[16px]'>
                                {formik.errors.email}
                            </small> : ""}
                        </div>
                        <div className='mt-2 mb-4 md:mt-1 md:mb-3'>

                            <label className=' block mb-2 text-[#424242] text-[26px] md:text-[15px]'>Password</label>
                            <div className={`border border-projectBorder p-4 rounded  flex items-center bg-[#ffffff] md:p-2 
                            ${formik.errors.password && formik.touched.password ? 'border-projectRed' : 'border-projectBorder'}
                            `}>
                                <input
                                    type={type}
                                    className=' w-full text-2xl  outline-none bg-transparent md:text-sm'
                                    name={type}
                                    placeholder='enter your password'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.values.password === "" ?
                                        <span className='ml-7'></span> :
                                        <i onClick={reveal}
                                            className='
                                             rounded-[50%] flex items-center justify-center w-[30px] h-[100%] cursor-pointer text-[25px] md:text-[20px]'>
                                            {eye}
                                        </i>
                                }
                            </div>
                            {formik.touched.password ? <small
                                className='text-projectRed  text-lg md:text-[16px]'>
                                {formik.errors.password}
                            </small> : ""}
                        </div>
                        <button
                            disabled={!!formik.errors.email || !!formik.errors.password|| isDisabled} type='submit'
                            className=' w-[100%] p-5 mt-2 mb-4 text-2xl font-semibold rounded bg-[#d61313] hover:bg-[#d61313f3] text-[#ffffff]
                         md:mt-1 md:mb-3 md:p-3 md:text-lg'>
                            Sign Up
                        </button>
                        <button
                            className=' w-[100%] p-5 mt-2 mb-4 text-2xl font-semibold border border-projectBlack  text-projectBlack rounded flex justify-center items-center hover:bg-[#f8f8f8] md:p-3 md:mb-3 md:mt-1 md:text-lg'>
                            <span>
                                <img src={google} alt="" className='mr-2 w-5 md:w-7' /></span>
                            Continue with Google
                        </button>
                    </form>
                    <p className='text-xl md:text-sm'>Already have an account? <Link to='/signin' className='text-[#FF0000] font-medium'>Sign In</Link>
                    </p>
                </div >
                <div>

                </div>
            </div >
        </>
    )
}

export default SignUp
import React, { useState } from 'react'
import google from '../Images/google-color-icon.png'
import { FaCartArrowDown, FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import dining from '../Images/Dining.png'

const SignIn = () => {
    const [type, settype] = useState("password");
    const [eye, seteye] = useState(FaEyeSlash);
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema : yup.object({
            email: yup.string().required('required')
        })
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
            <div className='bg-[#CCCCCC] h-100 min-h-screen  grid grid-flow-row gap-8 p-6 md:grid-cols-grid1 md:gap-4 md:p-8'>

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
                    <div className='hidden md:flex flex-col gap-[35px] justify-center items-center'
                    >
                        <div
                            className='flex justify-center h-[350px] 
                    w-[450px]'>
                            <img src={dining} alt="" className='h-full w-full object-cover'/>
                        </div>
                        <span className=' text-[14px] lg:w-[450px]'>
                            Welcome To <span className='text-[#FF0000]'>Juma</span> Food and Confectionaries, We satisfy your cravings. Be Sure to check out on our <Link>Terms and Conditions</Link>.
                        </span>
                    </div>
                </div>

                {/* right div */}
                <div className=' row-span-6'>
                    <h1 className='text-4xl md:text-2xl'>Welcome Back</h1>
                    <p className=' font-semibold text-[16px] md:text-[12px]'>
                        <span className=' text-xl text-projectRed md:text-lg'>Sign In</span>, Let's satisfy your cravings
                    </p>
                    <form
                        action=""
                        className='mt-3'
                        onSubmit={formik.handleSubmit}
                    >
                        <div className='mt-2 mb-4 md:mt-1 md:mb-3'>
                            <label className=' block mb-2 text-[#424242] text-[26px] md:text-[15px]'>Email</label>
                            <div className='border border-projectBorder p-4 rounded bg-[#ffffff] md:p-2'>
                                <input
                                    type="mail"
                                    className=' w-full text-2xl  outline-none bg-transparent md:text-sm'
                                    name='email'
                                    placeholder='info@example.com'
                                onChange={formik.handleChange}/>
                            </div>
                            <small>{ formik.errors.email}</small>
                        </div>
                        <div className='mt-2 mb-4 md:mt-1 md:mb-3'>
                            <label className=' block mb-2 text-[#424242] text-[26px] md:text-[15px]'>Password</label>

                            <div className='border border-projectBorder p-4 rounded flex items-center bg-[#ffffff] md:p-2'>
                                <input
                                    className=' w-full text-2xl  outline-none bg-transparent md:text-sm'
                                    type={type}
                                    name='password'
                                    placeholder='Password'
                                    onChange={formik.handleChange}

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
                        </div>
                        <button
                            type='btn'
                            className=' w-[100%] p-5 mt-2 mb-4 text-2xl font-semibold rounded bg-[#d61313] hover:bg-[#d61313f3] text-[#ffffff]
                         md:mt-1 md:mb-3 md:p-3 md:text-lg'
                        >
                            Sign In
                        </button>
                        <button className=' w-[100%] p-5 mt-2 mb-4 text-2xl font-semibold border border-projectBlack  text-projectBlack rounded flex justify-center items-center hover:bg-[#f8f8f8] md:p-3 md:mb-3 md:mt-1 md:text-lg'>
                            <span>
                                <img src={google} alt="" className='mr-2 w-5 md:w-7' /></span>
                            Continue with Google
                        </button>
                    </form>
                    <p className=' text-xl md:text-sm'>Don't have an account? <Link to='/signup' className='text-[#FF0000] font-medium'>Sign Up for free</Link>
                    </p>
                </div>
                <div>

                </div>
            </div >
        </>
    )
}

export default SignIn
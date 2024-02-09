import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const SideBar = () => {
    return (
        <>
            <section className='fixed border border-red-500 w-[300px] h-full'>
                {/* Logo */}
             <div className='col-span-2 ml-4 p-2'>
                    <span
                        className='text-4xl font-extrabold text-projectRed-2'

                        style={{
                            WebkitTextStroke: ".65px #FFFFFF",
                        }}
                    >
                        Juma
                    </span>
                </div>
                <div className='p-4 hidden justify-end'>
                    <FaTimes/>
                </div>

                <Link to='/users/home' className='block border p-4 font-semibold 
                bg-[#424242] text-white hover:bg-[#363636]'>Home</Link>
                {/* <h1 className='block border-b text-xl p-4 font-bold'>Categories</h1> */}
                <Link className='block border p-4'>A</Link>
                <Link className='block border p-4'>C</Link>
                <Link className='block border p-4'>D</Link>
            </section>
        </>
    )
}

export default SideBar
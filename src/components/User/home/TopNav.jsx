import React from 'react'
import { FaSearch, FaUser } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const TopNav = () => {
    return (
        <section className='border-projectBorder flex justify-between w-full'>
            <div className='flex items-center'>
                <div className='border w-[400px] rounded-[15px] bg-white overflow-hidden flex gap-2'>
                    {/* Search Bar */}
                    <input type="text" className='w-full p-2 bg-transparent outline-none ml-2 font-normal' />
                    <button className=' mr-2'>
                        <FaSearch />
                    </button>
                </div>
            </div>



            <div className=' w-[50%] flex justify-end gap-4'>
                <div className=' border flex justify-center items-center rounded-full p-2 text-xl w-[40px] h-[40px]'>
                    {/* Profile */}
                    <Link to='userprofile'>
                        <FaUser />
                    </Link>
                </div>

                <div className=' border flex justify-center items-center rounded-full p-2 text-xl w-[40px] h-[40px]'>
                    {/* Shopping Cart */}
                    <FaCartShopping />
                </div>
            </div>
        </section>
    )
}

export default TopNav
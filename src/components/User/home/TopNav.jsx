import React, {useContext} from 'react'
import { FaSearch, FaUser } from 'react-icons/fa'
import { FaCartShopping, FaBars } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { SharedContext } from './SharedContextProvider'
const TopNav = () => {
    const { isOpen, toggleOpen } = useContext(SharedContext);
    return (
        <section className='border-projectBorder flex justify-between w-full max-sm:flex-col'>
            <div className='flex items-center'>
                <i className={`cursor-pointer lg:hidden ${isOpen?'max-lg:hidden mr-2':'max-lg:block mr-2'}`} onClick={toggleOpen}>
                    <FaBars className='text-[25px]' />
                </i>
                <div className='border w-[400px] rounded-[15px] bg-white overflow-hidden flex gap-2 max-sm:w-full'>
                    {/* Search Bar */}
                    <input type="text" className='w-full p-2 bg-transparent outline-none ml-2 font-normal' />
                    <button className=' mr-2'>
                        <FaSearch />
                    </button>
                </div>
            </div>



            <div className=' w-[50%] flex justify-end gap-4 max-sm:w-full max-sm:mt-2'>
                <div className=' border flex justify-center items-center rounded-full p-2 text-xl w-[40px] h-[40px]'>
                    {/* Profile */}
                    <Link to='/home/userprofile'>
                        <FaUser />
                    </Link>
                </div>

                <div className=' border flex justify-center items-center rounded-full p-2 text-xl w-[40px] h-[40px]'>
                    {/* Shopping Cart */}
                    <Link to='/home/product cart'>
                        <FaCartShopping />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default TopNav
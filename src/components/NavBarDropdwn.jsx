import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartArrowDown, FaSearch } from 'react-icons/fa'
const NavBarDropdwn = ({navsubnav}) => {
    const LinkCss = `border text-white px-4 py-3 my-3 rounded-lg hover:bg-projectRed-2 transition-colors duration-500 text-lg font-semibold w-full max-sm:block sm:block`
    return (
        <>
            <div className={` bg-projectBlack ${navsubnav?'sm:block max-sm:block':'sm:hidden max-sm:hidden'} transition-all duration-300 ease-out max-sm:absolute sm:absolute top-20 max-sm:top-20 left-2 border lg:hidden sm:w-[300px] h-auto px-5`}>
                <Link
                    className={LinkCss}
                    to='home'
                >Home</Link>
                <Link
                    className={LinkCss}
                    to='home'
                >Pages</Link>
                <Link
                    className={LinkCss}
                    to='/signin'
                >About Us</Link>
                <Link className={LinkCss}
                    to='/signin'
                >Contact Us</Link>
                <div className='w-full rounded-[15px] bg-white overflow-hidden flex gap-2 my-3 sm:hidden'>
                    <input type="text" className='w-full p-1 bg-transparent outline-none ml-2' />
                    <button className=' mr-2'>
                        <FaSearch />
                    </button>
                </div>
            </div>
        </>
    )
}

export default NavBarDropdwn
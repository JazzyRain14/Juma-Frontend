import React from 'react'
import { FaDumpster, FaMinus, FaPlus, FaRecycle, FaTrash } from 'react-icons/fa6'
import TopNav from '../components/User/home/TopNav'
const HelpSupport = () => {
  return (
    <section className='px-4 py-4'>
      {/* <TopNav /> */}
      <div className='flex flex-col gap'>
        <h1 className='text-[35px]  text-gray-600 ml-[65px] mt-6'>Having  any problem ?</h1>
        <div className='w-3/4 p-4 m-auto my-6'>
          <div className='w-full mb-6'>
            <label>Full name</label>
            <input
              className='w-full py-2 px-3 outline-none rounded border'
              placeholder='Enter your full name'
              type="text"
            />
          </div>

          <div className='w-full mb-6'>
            <label>Email</label>
            <input
              className='w-full py-2 px-3 outline-none rounded border'
              placeholder='Enter your email'
              type="email" />
          </div>

          <div className='w-full mb-6'>
            <label htmlFor="">Comment</label>
            <textarea
              className='w-full py-2 px-3 outline-none rounded border min-h-[150px] max-h-[250px]'
              placeholder='Enter your comment'
              type="" />
          </div>
          <button className='w-full py-2  bg-projectRed-2 text-white text-xl rounded'>
            Submit
          </button>
        </div>
      </div>
    </section>
  )
}

export default HelpSupport;
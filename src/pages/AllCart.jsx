import React from 'react'
import { FaDumpster, FaMinus, FaPlus, FaRecycle, FaTrash } from 'react-icons/fa6'
import cartImg from '../assets/Images/pexels-horizon-content-3738730-removebg-preview.png'
import TopNav from '../components/User/home/TopNav'

const AllCart = () => {
    return (
        <>
            <section className='px-4 pt-4'>
                <TopNav />
                <div className='my-4 flex flex-row w-full gap-5'>
                    <div className=' basis-3/4 rounded-lg bg-gray-400 '>
                        <article className='max-w-full'>
                            <header className='border-b py-1 text-xl px-4'>
                                Cart(1)
                            </header>
                            <div className='flex flex-row mt-1  px-4'>
                                <div className='max-w-[75px] w-full h-[75px] relative rounded-full object-cover overflow-hidden flex bg-gray-200'>
                                    <img
                                        className='abolute m-auto w-full'
                                        src={cartImg} alt="" />
                                </div>
                                <div className='w-full overflow-hidden px-3'>
                                    <h1 className='truncate'>Life Full Burger Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptatibus?</h1>
                                    <p>Bakery Items</p>
                                </div>
                                <div className='max-w-[30%] text-end w-[30%]'>
                                    <h1 className=' text-lg'><span className='mr-2'>&#8358;</span>5000.00</h1>
                                </div>
                            </div>
                            <footer className='px-4 my-3 flex justify-between items-center'>
                                <button className='flex items-center py-2 px-3 bg-projectRed-2 text-white gap-2 rounded'>
                                    <FaTrash />
                                    Remove
                                </button>
                                <div className='flex items-center gap-2'>
                                    <button className='bg-projectRed-2 p-2 rounded text-white'>
                                        <FaPlus />
                                    </button>
                                    <span className='text-lg font-semibold'>1</span>
                                    <button className='bg-projectRed-2 p-2 rounded text-white'><FaMinus /></button>
                                </div>
                            </footer>
                        </article>
                    </div>

                    <div className='basis-1/4 rounded-lg'>
                        <article className='rounded-lg max-w-full bg-gray-400  sticky'>
                            <header className='border-b py-2 text-xl px-4'>
                                Cart Summarry
                            </header>
                            <div className='px-4 flex justify-between text-lg border-b py-2'>
                                <h2>Subtotal</h2>
                                <h2><span className='mr-2'>&#8358;</span>00.00</h2>
                            </div>
                            <footer className='flex'>
                                <button className='py-3 m-auto px-4 my-2 bg-projectRed-2 text-white rounded'>
                                    CHECKOUT(&#8358;00.00)
                                </button>
                            </footer>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllCart
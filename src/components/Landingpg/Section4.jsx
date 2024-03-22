import React, { useRef } from 'react'
import milkshake from '../../assets/Images/milkshake.jpg'
import muffins from '../../assets/Images/muffins.jpg'
import burgerDip from '../../assets/Images/burgerDip.jpg'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Section4 = () => {
    // const scrollableDiv = useRef(null)
    // const ScrollLeft = () => {
    //     scrollableDiv.current.scrollLeft -= 200;
    // }
    // const ScrollRight = () => {
    //     scrollableDiv.current.scrollLeft += 200
    // }
    return (
        <>
            <section className='h-[450px] flex items-center bg-slate-100 gap-10 max-sm:gap-4 overflow-hidden'>
                <div className=' w-full max-sm:w-[40%] sm:w-[50%] flex ml-10 max-sm:ml-5 flex-col gap-8'>
                    <h1 className='text-[2.5rem] max-sm:text-[1.8rem] font-semibold'>Taste Our New Recipe</h1>
                    <p className='max-sm:text-[.8rem] break-words'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias placeat nostrum dolore consectetur possimus amet, commodi fuga dolorum alias quis tempora, voluptatem quia at quos eum repellendus consequatur aperiam a.</p>
                    <div className='flex gap-4'>
                        <button
                            // onClick={ScrollLeft}
                            className=' py-2 bg-projectRed-2 rounded-lg px-6 text-white cursor-pointer hover:bg-white hover:text-projectRed-2 hover:border transition-colors duration-200 ease-in-out hover:border-projectRed-2 border'>
                            <i className='text-xl'>< FaAngleLeft /></i>
                        </button>
                        <button
                            // onClick={ScrollRight}
                            className=' py-2 bg-projectRed-2 rounded-lg px-6 text-white cursor-pointer hover:bg-white hover:text-projectRed-2 hover:border transition-colors duration-200 ease-in-out hover:border-projectRed-2 border'>
                            <i className='text-xl'>< FaAngleRight /></i>
                        </button>
                    </div>
                </div>

                <div className='flex max-sm:w-[250px] sm:w-[50%] gap-6 overflow-x-scroll px-6 max-sm:px-0'
                >
                    {/* <div className=" border-2 border-red-700 h-[300px] w-full bg-[url('/src/assets/Images/milkshake.jpg')] bg-no-repeat bg-contain rounded-lg"></div> */}
                    <div className=' h-[400px] min-w-[250px] max-sm:min-w-[200px] relative flex'>
                        <img
                            className='absolute top-0 h-full w-full object-cover max-sm:object-contain'
                            src={milkshake} alt="" />
                    </div>
                    <div className=' h-[400px] min-w-[250px] max-sm:min-w-[200px] relative flex'>
                        <img
                            className='absolute top-0 h-full w-full object-cover max-sm:object-contain'
                            src={milkshake} alt="" />
                    </div>
                    <div className=' h-[400px] min-w-[250px] max-sm:min-w-[200px] relative flex'>
                        <img
                            className='absolute top-0 h-full w-full object-cover max-sm:object-contain'
                            src={milkshake} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section4
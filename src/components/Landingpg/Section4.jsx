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
            <section className='h-[450px] flex items-center bg-slate-100 gap-10'>
                <div className=' w-full max-w-[500px] flex ml-10 flex-col gap-8'>
                    <h1 className='text-[2.5rem] font-semibold'>Taste Our New Recipe</h1>
                    <p className='text-[.8rem] break-words'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias placeat nostrum dolore consectetur possimus amet, commodi fuga dolorum alias quis tempora, voluptatem quia at quos eum repellendus consequatur aperiam a.</p>
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

                <div className='flex min-w-[40%] overflow-hidden transition-transform duration-200 gap-6'
                    // ref={scrollableDiv}
                >
                    <div className=" scroll-ml-6 h-[300px] min-w-[200px] bg-[url('/src/assets/Images/milkshake.jpg')] bg-no-repeat bg-cover rounded-lg"></div>
                    <div className=" scroll-ml-6 h-[300px] min-w-[200px] bg-[url('/src/assets/Images/muffins.jpg')] bg-no-repeat bg-cover rounded-lg"></div>
                    <div className=" scroll-ml-6 h-[300px] min-w-[200px] bg-[url('/src/assets/Images/burgerDip.jpg')] bg-no-repeat bg-cover rounded-lg"></div>
                    <div className=" scroll-ml-6 h-[300px] min-w-[200px] bg-[url('/src/assets/Images/burgerStack.jpg')] bg-no-repeat bg-cover rounded-lg"></div>
                    {/* <div className="h-[300px] min-w-[200px] bg-[url('/src/assets/Images/burgerDip.jpg')] bg-contain rounded-lg"></div>
                    <div className="h-[300px] min-w-[200px] bg-[url('/src/assets/Images/burgerDip.jpg')] bg-contain rounded-lg"></div> */}
                </div>
            </section>
        </>
    )
}

export default Section4
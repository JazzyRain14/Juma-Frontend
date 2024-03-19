import React, { useEffect, useState } from 'react'
import Imgimport from './ImgImport'
const Section2 = () => {
    const nosimgs = 3
    return (
        <>
            <section className='rounded-t-[25%] w-full h-[300px] gap-14 bg-white relative grid grid-flow-row items-center justify-center'>

                <div className='absolute -top-14 max-sm:-top-7 w-full'>
                    <div className='grid justify-center items-center grid-cols-3 max-sm:grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-6 px-12'>
                        {Imgimport.map((images, index) => (
                            <img key={index} src={images.image} alt="" width={images.width} className={images.styleImg} />
                        ))}
                    </div>
                </div>
                <div className='grid max-sm:grid-cols-2 grid-cols-4 absolute bottom-8 w-full'>
                    <div className='grid gap-2 p-4 max-sm:py-2 max-sm:border-none border-r-2 border-projectRed-2'>
                        <h1 className=' text-center text-6xl max-sm:text-3xl font-bold'>15<span className=' text-3xl max-sm:text-lg font-semibold'>+</span></h1>
                        <h5 className='text-xl text-center max-sm:text-base'>years of experience</h5>
                    </div>
                    <div className='grid gap-2 p-4 max-sm:py-2 max-sm:border-none border-r-2 border-projectRed-2'>
                        <h1 className=' text-center text-6xl max-sm:text-3xl font-bold'>5<span className=' text-3xl max-sm:text-lg font-semibold'>+</span></h1>
                        <h5 className='text-xl text-center max-sm:text-base'>Master Chefs</h5>
                    </div>
                    <div className='grid gap-2 p-4 max-sm:py-2 max-sm:border-none border-r-2 border-projectRed-2'>
                        <h1 className=' text-center text-6xl max-sm:text-3xl font-bold'>300<span className=' text-3xl max-sm:text-lg font-semibold'>+</span></h1>
                        <h5 className='text-xl text-center max-sm:text-base'>Daily Visitors</h5>
                    </div>
                    <div className='grid gap-2 p-4 max-sm:py-2'>
                        <h1 className=' text-center text-6xl max-sm:text-3xl font-bold'>20<span className=' text-3xl max-sm:text-lg font-semibold'>+</span></h1>
                        <h5 className='text-xl text-center max-sm:text-base'>Achievements</h5>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section2
import React, { useEffect, useState } from 'react'
import Imgimport from './ImgImport'
const Section2 = () => {
    return (
        <section className='absolute w-full bottom-[-14rem]'>
            <div className=' border rounded-t-[25%] h-[300px] w-full bg-white relative flex flex-col items-center justify-center'>
                <div className='absolute -top-14'>
                    <div className='flex gap-6 px-12'>
                        {Imgimport.map((images, index) => (

                            <div key={index} className=' bg-transparent w-36 h-36 rounded-full flex justify-center items-center overflow-hidden cursor-pointer hover:bg-white transition-colors duration-200'>
                                <img key={index} src={images.image} alt="" width={images.width} className=' hover:scale-105 hover:transition-transform duration-200 hover:ease-in-out' />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex mt-8'>
                    <div className='grid gap-2 border-r-4 p-4'>
                        <h1 className=' text-center text-6xl font-bold'>15<span className=' text-3xl font-semibold'>+</span></h1>
                        <h5 className='text-xl'>years of experience</h5>
                    </div>
                    <div className='grid gap-2 border-r-4 p-4'>
                        <h1 className=' text-center text-6xl font-bold'>5<span className=' text-3xl font-semibold'>+</span></h1>
                        <h5 className='text-xl'>Master chefs</h5>
                    </div>
                    <div className='grid gap-2 border-r-4 p-4'>
                        <h1 className=' text-center text-6xl font-bold'>300<span className=' text-3xl font-semibold'>+</span></h1>
                        <h5 className='text-xl'>Daily Visitors</h5>
                    </div>
                    <div className='grid gap-2 p-4'>
                        <h1 className=' text-center text-6xl font-bold'>20<span className=' text-3xl font-semibold'>+</span></h1>
                        <h5 className='text-xl'>Achievements</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2
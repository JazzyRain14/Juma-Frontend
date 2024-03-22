import React from 'react'
import Section2 from './Section2'
import backgrnd from '../../assets/Images/pexels-lisa-fotios-776538.jpg'

const bkStyle = `bg-[url('/src/assets/Images/pexels-lisa-fotios-776538.jpg')] 
h-screen bg-contain flex flex-col justify-center items-center relative border`
const Section1 = () => {
    return (
        <>
            <div className='h-full w-full block'>
                <div
                    className="relative h-screen flex w-full overflow-hidden"
                >
                    <img
                        className='absolute h-full w-full object-cover top-0'
                        src={backgrnd}
                        alt="" />
                    <div className='absolute h-full w-full flex flex-col items-center justify-center'>
                        <h1 className=' text-[5rem] font-bold text-[#eaeaea] tracking-widest'>Juma</h1>
                        <p className=' text-[2rem] tracking-wide text-[#eaeaea]'>
                            Your Taste Of Pleasure
                        </p>
                        <div>
                            <button className=' bg-projectRed-2 text-white font-semibold hover:bg-white hover:text-projectRed-2 duration-300 px-4 py-2 rounded-lg mx-2'>Join Us As We Satisfy Your Cravings</button>
                        </div>
                    </div>
                </div>
                <Section2 />
            </div>
        </>
    )
}

export default Section1
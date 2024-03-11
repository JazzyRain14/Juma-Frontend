import React from 'react'
import Section2 from './Section2'
const Section1 = () => {
    return (
        <>
            <div>
                <div
                    className="
                bg-[url('/src/assets/Images/pexels-lisa-fotios-776538.jpg')] 
                h-screen bg-contain flex flex-col justify-center items-center relative"
                >
                    <h1 className=' text-[5rem] font-bold text-[#eaeaea] tracking-widest'>Juma</h1>
                    <p className=' text-[2rem] tracking-wide text-[#eaeaea]'>
                        Your Taste Of Pleasure
                    </p>
                    <div>
                        <button className=' bg-projectRed-2 text-white font-semibold hover:bg-white hover:text-projectRed-2 duration-300 px-4 py-2 rounded-lg mx-2'>Join Us As We Satisfy Your Cravings</button>
                    </div>
                </div>
                <Section2 />
            </div>
        </>
    )
}

export default Section1
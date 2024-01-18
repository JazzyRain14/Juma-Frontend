import React from 'react'
import burger from '../../assets/Images/chicken_nuggets 2.png'
const Section1 = () => {
    return (
        <>
            <div
                className='h-[450px] flex 
        justify-around
        text-[#f5fffa]'
            >
                <section className='flex flex-col justify-center'>
                    <div
                        className=' h-[80%] flex 
            flex-col justify-center bg-[#ffffff1e] rounded-2xl px-[25px]
            '
                    // bg-[rgba(255,255,255,.54)]
                    >
                        <div className=''>
                            {/* 238, 225, 179 */}
                            <h1 className='text-6xl font-extrabold text-[#f5fffa]'>Fast & Fresh</h1>
                        </div>
                        <div className='mb-6'>
                            <h1 className='text-xl font-medium'>
                                Convenience Without Compromise
                            </h1>
                        </div>
                        <p className='w-fit'>
                            We deliver as you want it, Fast and Fresh. Conveniently without Compromise.<br />
                            Fast. Fresh. Flavorful. Come, lets satisfy your cravings
                        </p>
                        <table className='mt-10 flex justify-center'>
                            <tr className='grid w-fit grid-flow-col gap-4 border p-2  rounded-xl'>
                                <td
                                    className=' overflow-hidden relative
                  w-[110px] h-[50px] text-center py-2 px-6 border
                  text-lg rounded-xl text-[#f5fffa]  cursor-pointer font-semibold 
                  '
                                //  bg-projectRed-2 hover:bg-[#f5fffa] hover:text-projectRed-2  transition ease-in delay-75
                                >
                                    <span className=' absolute top-0 left-0 overflow-hidden
                  h-full w-full flex justify-center items-center z-[1] delay-75 hover:spacing
                  
                  before:absolute before:top-0 before:left-0 before:w-[50%] before:h-[100%] before:bg-blue-500 before:skew-x-[25deg] before:translate-x-[0] hover:before:skew-x-[45deg] hover:before:translate-x-[100%]       
                  '>
                                        Fast
                                    </span>
                                </td>
                                <td
                                    className='w-[110px] text-center py-2 px-6 border text-lg 
                  rounded-xl text-[#f5fffa] cursor-pointer bg-projectRed-2 transition ease-in delay-75
                  hover:bg-[#f5fffa] hover:text-projectRed-2 font-semibold'>Fresh</td>
                                <td className='w-[110px] text-center py-2 px-4 border text-lg 
                  rounded-xl  cursor-pointer bg-projectRed-2
                  text-[#f5fffa] hover:bg-[#f5fffa] 
                  hover:text-projectRed-2  transition ease-in delay-75 font-semibold'>Flavorful</td>
                            </tr>
                        </table>
                    </div>
                </section>
                <section className=' flex flex-col justify-center'>
                    <div className=' h-[80%] flex flex-col justify-center px-2'>
                        <img src={burger} alt="" className=' rounded-[50%] -rotate-12 hover:rotate-0  transition ease-in delay-200' />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Section1
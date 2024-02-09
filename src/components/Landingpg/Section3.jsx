import React from 'react'
import burger from '../../assets/Images/chicken_nuggets 2.png'
const Section3 = () => {
    return (
        <>
            <section
                className='bg-[#050609] h-[450px] flex justify-around text-[#f5fffa] mt-[14rem]'
            >
                <div className='flex flex-col justify-center w-[50%]'>
                    <div
                        className=' h-[80%] flex flex-col justify-center bg-[#ffffff1e] rounded-2xl px-[25px]'
                    >
                        <div className=' text-center'>
                            <h1 className='text-6xl font-extrabold text-[#f5fffa]'>Fast & Fresh</h1>
                        </div>
                        <div className='mb-6  text-center'>
                            <h1 className='text-xl font-medium'>
                                Convenience Without Compromise
                            </h1>
                        </div>
                        <p className=' text-center break-words'>
                            We deliver as you want it.
                            Conveniently without Compromise.<br />
                            <span className=' text-lg font-semibold mr-2 font'>Fast.</span>
                            <span className=' text-lg font-semibold mr-2 font'>Fresh.</span>
                            <span className=' text-lg font-semibold mr-2 font'>Flavorful.</span><br />
                            Come, lets satisfy your cravings
                        </p>
                        <table className='mt-10 flex justify-center'>
                            <tr className='grid w-fit grid-flow-col gap-4 border p-2  rounded-xl'>
                                <td
                                    className='w-[110px] text-center py-2 px-6 border text-lg 
                                    rounded-xl text-[#f5fffa] cursor-pointer bg-projectRed-2 transition ease-in delay-75
                                    hover:bg-[#f5fffa] hover:text-projectRed-2 font-semibold'>Fast</td>
                                <td
                                    className='w-[110px] text-center py-2 px-6 border text-lg 
                                    rounded-xl text-[#f5fffa] cursor-pointer bg-projectRed-2 transition ease-in delay-75 hover:bg-[#f5fffa] hover:text-projectRed-2 font-semibold'>Fresh</td>
                                <td className='w-[110px] text-center py-2 px-6 border text-lg 
                                rounded-xl text-[#f5fffa] cursor-pointer bg-projectRed-2 transition ease-in delay-75
                                hover:bg-[#f5fffa] hover:text-projectRed-2 font-semibold'>Flavorful</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className=' flex items-center justify-center'>
                    <div className=' h-[80%] flex items-center justify-center px-2'>
                        <img src={burger} alt="" className=' rounded-[50%] -rotate-12 hover:rotate-0  transition ease-in delay-200' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section3
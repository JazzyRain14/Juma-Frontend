import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import { FaEye, FaMoneyBillTransfer, FaPiggyBank } from 'react-icons/fa6'
import { TbTruckDelivery } from "react-icons/tb";
const Wallet = () => {
    return (
        <div className='overflow-hidden flex flex-col h-screen border border-black'>
            <section className='px-4 py-4 bg-white'>
                <div className=' mx-12 my-6 max-sm:m-0 flex justify-between items-center'>
                    <div className='relative wallet text-white h-32 grid grid-flow-row grid-rows-2 w-[400px] rounded-lg max-md:w-full'>
                        <aside className=' row-span-1 ml-4 flex text-lg items-center gap-2'>
                            <h1>Available Balance</h1>
                            <FaEye />
                        </aside>
                        <aside
                            className=' row-span-1 ml-4 flex text-lg items-center gap-1'

                        >
                            <span className='text-base'>&#8358;</span>
                            80.00
                        </aside>
                        <div className='absolute -bottom-4 w-full flex'>
                            <button className='px-6 m-auto py-3 wallet border-t border-l 
                            text-white rounded-lg'>Deposit</button>
                        </div>
                    </div>
                    <div className='rounded-l-full overflow-hidden w-[400px] h-full max-md:hidden'>
                        <svg className=" w-full h-full shadow-md" viewBox="0 0 904.2488888888889 508.64" xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none" >
                            <rect class="bg" id="bg" x="0" y="0" width="904.2488888888889" height="508.64" fill="#ffffff"></rect>
                            <path d="M 0 -50.864 L 0 -50.86
                L 60.28 -11.86
                L 180.84977777777777 -50.86 L 180.84977777777777 -50.86
                L 241.13 -8.86
                L 361.69955555555555 -50.86 L 361.69955555555555 -50.86
                L 473.70 -25.43
                L 542.5493333333334 -50.86 L 542.5493333333334 -50.86
                L 657.55 -18.86
                L 723.3991111111111 -50.86 L 723.3991111111111 -50.86
                L 783.68 -25.43
                L 904.2488888888888 -50.86 L 904.2488888888888 -50.86
                L 1008.25 -6.86
                L 1085.0986666666665 -50.86  V 508.64 H 0 V -50.86 Z" fill="#EB0029"></path>
                            <path d="M 0 0 L 0 0.00
                L 60.28 25.43
                L 180.84977777777777 0.00 L 180.84977777777777 0.00
                L 241.13 47.00
                L 361.69955555555555 0.00 L 361.69955555555555 0.00
                L 426.70 44.00
                L 542.5493333333334 0.00 L 542.5493333333334 0.00
                L 654.55 47.00
                L 723.3991111111111 0.00 L 723.3991111111111 0.00
                L 858.40 35.00
                L 904.2488888888888 0.00 L 904.2488888888888 0.00
                L 987.25 25.43
                L 1085.0986666666665 0.00  V 508.64 H 0 V 0.00 Z" fill="#d90025"></path>
                            <path d="M 0 50.864 L 0 50.86
                L 134.00 76.30
                L 180.84977777777777 50.86 L 180.84977777777777 50.86
                L 255.85 86.86
                L 361.69955555555555 50.86 L 361.69955555555555 50.86
                L 491.70 76.30
                L 542.5493333333334 50.86 L 542.5493333333334 50.86
                L 633.55 95.86
                L 723.3991111111111 50.86 L 723.3991111111111 50.86
                L 786.40 76.30
                L 904.2488888888888 50.86 L 904.2488888888888 50.86
                L 998.25 76.30
                L 1085.0986666666665 50.86  V 508.64 H 0 V 50.86 Z" fill="#c70021"></path>
                            <path d="M 0 101.728 L 0 101.73
                L 92.00 127.73
                L 180.84977777777777 101.73 L 180.84977777777777 101.73
                L 241.13 127.16
                L 361.69955555555555 101.73 L 361.69955555555555 101.73
                L 421.98 127.16
                L 542.5493333333334 101.73 L 542.5493333333334 101.73
                L 602.83 142.73
                L 723.3991111111111 101.73 L 723.3991111111111 101.73
                L 819.40 128.73
                L 904.2488888888888 101.73 L 904.2488888888888 101.73
                L 982.25 145.73
                L 1085.0986666666665 101.73  V 508.64 H 0 V 101.73 Z" fill="#b5001d"></path>
                            <path d="M 0 152.59199999999998 L 0 152.59
                L 60.28 178.02
                L 180.84977777777777 152.59 L 180.84977777777777 152.59
                L 300.85 185.59
                L 361.69955555555555 152.59 L 361.69955555555555 152.59
                L 424.70 178.02
                L 542.5493333333334 152.59 L 542.5493333333334 152.59
                L 602.83 191.59
                L 723.3991111111111 152.59 L 723.3991111111111 152.59
                L 783.68 178.02
                L 904.2488888888888 152.59 L 904.2488888888888 152.59
                L 969.25 178.02
                L 1085.0986666666665 152.59  V 508.64 H 0 V 152.59 Z" fill="#a30019"></path>
                            <path d="M 0 203.456 L 0 203.46
                L 81.00 250.46
                L 180.84977777777777 203.46 L 180.84977777777777 203.46
                L 261.85 228.89
                L 361.69955555555555 203.46 L 361.69955555555555 203.46
                L 492.70 229.46
                L 542.5493333333334 203.46 L 542.5493333333334 203.46
                L 602.83 252.46
                L 723.3991111111111 203.46 L 723.3991111111111 203.46
                L 798.40 230.46
                L 904.2488888888888 203.46 L 904.2488888888888 203.46
                L 964.53 248.46
                L 1085.0986666666665 203.46  V 508.64 H 0 V 203.46 Z" fill="#910015"></path>
                            <path d="M 0 254.32 L 0 254.32
                L 121.00 279.75
                L 180.84977777777777 254.32 L 180.84977777777777 254.32
                L 285.85 279.75
                L 361.69955555555555 254.32 L 361.69955555555555 254.32
                L 421.98 279.75
                L 542.5493333333334 254.32 L 542.5493333333334 254.32
                L 626.55 279.75
                L 723.3991111111111 254.32 L 723.3991111111111 254.32
                L 783.68 279.75
                L 904.2488888888888 254.32 L 904.2488888888888 254.32
                L 1032.25 279.75
                L 1085.0986666666665 254.32  V 508.64 H 0 V 254.32 Z" fill="#7f0011"></path>
                            <path d="M 0 305.18399999999997 L 0 305.18
                L 60.28 342.18
                L 180.84977777777777 305.18 L 180.84977777777777 305.18
                L 241.13 331.18
                L 361.69955555555555 305.18 L 361.69955555555555 305.18
                L 426.70 339.18
                L 542.5493333333334 305.18 L 542.5493333333334 305.18
                L 602.83 354.18
                L 723.3991111111111 305.18 L 723.3991111111111 305.18
                L 808.40 348.18
                L 904.2488888888888 305.18 L 904.2488888888888 305.18
                L 1006.25 330.62
                L 1085.0986666666665 305.18  V 508.64 H 0 V 305.18 Z" fill="#6d000d"></path>
                            <path d="M 0 356.048 L 0 356.05
                L 72.00 401.05
                L 180.84977777777777 356.05 L 180.84977777777777 356.05
                L 241.13 396.05
                L 361.69955555555555 356.05 L 361.69955555555555 356.05
                L 421.98 381.48
                L 542.5493333333334 356.05 L 542.5493333333334 356.05
                L 602.83 381.48
                L 723.3991111111111 356.05 L 723.3991111111111 356.05
                L 783.68 382.05
                L 904.2488888888888 356.05 L 904.2488888888888 356.05
                L 1012.25 388.05
                L 1085.0986666666665 356.05  V 508.64 H 0 V 356.05 Z" fill="#5b0009"></path>
                            <path d="M 0 406.912 L 0 406.91
                L 86.00 432.34
                L 180.84977777777777 406.91 L 180.84977777777777 406.91
                L 241.13 432.34
                L 361.69955555555555 406.91 L 361.69955555555555 406.91
                L 421.98 438.91
                L 542.5493333333334 406.91 L 542.5493333333334 406.91
                L 645.55 435.91
                L 723.3991111111111 406.91 L 723.3991111111111 406.91
                L 783.68 432.34
                L 904.2488888888888 406.91 L 904.2488888888888 406.91
                L 1026.25 447.91
                L 1085.0986666666665 406.91  V 508.64 H 0 V 406.91 Z" fill="#490005"></path>
                            <path d="M 0 457.77599999999995 L 0 457.78
                L 92.00 483.21
                L 180.84977777777777 457.78 L 180.84977777777777 457.78
                L 241.13 504.78
                L 361.69955555555555 457.78 L 361.69955555555555 457.78
                L 421.98 486.78
                L 542.5493333333334 457.78 L 542.5493333333334 457.78
                L 602.83 483.21
                L 723.3991111111111 457.78 L 723.3991111111111 457.78
                L 817.40 496.78
                L 904.2488888888888 457.78 L 904.2488888888888 457.78
                L 977.25 503.78
                L 1085.0986666666665 457.78  V 508.64 H 0 V 457.78 Z" fill="#370001"></path>
                        </svg>
                    </div>
                </div>
            </section>
            <section className=' overflow-scroll flex-1 px-4 py-4'>
                {/* <div className=' overflow-scroll h-full w-full'> */}
                <table className='table-auto min-w-full border-collapse'>
                    <thead className=''>
                        <tr className='text-center'>
                            <th className='border-b-2 border-gray-200 px-4 py-2'>S/N</th>
                            <th className='border-b-2 border-gray-200 px-4 py-2'>ReferenceID</th>
                            <th className='border-b-2 border-gray-200 px-4 py-2'>Amount Deposited</th>
                            <th className='border-b-2 border-gray-200 px-4 py-2'>Deposit Source</th>
                            <th className='border-b-2 border-gray-200 px-4 py-2'>Date & Time</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr className='text-center '>
                            <td className='border-b border-gray-200 px-4 py-2'>1</td>
                            <td className='border-b border-gray-200 px-4 py-2'>028668737uy</td>
                            <td className='border-b border-gray-200 px-4 py-2'><span className='text-base'>&#8358;</span>80</td>
                            <td className='border-b border-gray-200 px-4 py-2'>nisnio</td>
                            <td className='border-b border-gray-200 px-4 py-2'>309-</td>
                        </tr>
                        <tr className='text-center bg-projectRed-2 text-white'>
                            <td className='border-b border-gray-200 px-4 py-2'>2</td>
                            <td className='border-b border-gray-200 px-4 py-2'>028668737uy</td>
                            <td className='border-b border-gray-200 px-4 py-2'><span className='text-base'>&#8358;</span>80</td>
                            <td className='border-b border-gray-200 px-4 py-2'>nisnio</td>
                            <td className='border-b border-gray-200 px-4 py-2'>309-</td>
                        </tr>
                    </tbody>
                </table>
                {/* </div> */}
            </section>
        </div>
    )
}

export default Wallet
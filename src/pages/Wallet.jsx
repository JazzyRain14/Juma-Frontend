import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import { FaEye, FaMoneyBillTransfer, FaPiggyBank } from 'react-icons/fa6'
import { TbTruckDelivery } from "react-icons/tb";

const Wallet = () => {
    return (
        <section className='px-4 py-4'>
            <div className=' mx-16 my-8 border flex justify-between'>
                <div className='wallet text-white h-32 grid grid-flow-row grid-rows-2 w-[400px] rounded-lg'>
                    <aside className=' row-span-1 ml-4 flex text-lg items-center gap-2'>
                        <h1>Available Balance</h1>
                        <FaEye />
                    </aside>
                    <aside className=' row-span-1 ml-4 flex text-lg items-center gap-1'>
                        <span className='text-base'>&#8358;</span>
                        80.00
                    </aside>
                </div>
                <div>
                    <div>
                        <FaPiggyBank />
                        <span>deposit</span>
                    </div>
                    <div>
                        <FaRegCheckCircle />
                        <span>Checkout</span>
                    </div>
                    <div>
                        <TbTruckDelivery />
                        <span>Product Delivered</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Wallet
import React from 'react'
import HorizontalBarChat from '../../pages/HorizontalBarChat'
import { BiFoodMenu } from "react-icons/bi";
import { CiMoneyBill } from "react-icons/ci";
import diamond from '../../assets/Images/diamond_636197.png'

const AdminHomeSection1 = () => {
    // const data = [
    //     { category: 'Electronics', totalPrice: 2000 },
    //     { category: 'Clothing', totalPrice: 1500 },
    //     { category: 'Electronics', totalPrice: 2000 },
    //     { category: 'Clothing', totalPrice: 1500 },
    //     { category: 'Electronics', totalPrice: 2000 },
    //     { category: 'Clothing', totalPrice: 1500 },
    //     { category: 'Electronics', totalPrice: 2000 }
    // ];

    return (
        <>
            <div>
                <HorizontalBarChat />
                <div className='grid grid-flow-col gap-4'>
                    <div className='flex gap-2 p-2 bg-projectBlack text-white rounded-lg'>
                        <aside className='p-2 bg-projectRed-2 rounded-lg w-fit flex'>
                            <img className='m-auto' src={diamond} width={25} alt="" />
                        </aside>
                        <div className=''>
                            <h1>N23.4K</h1>
                            <p>Income</p>
                        </div>
                    </div>
                    <div className='flex gap-2 p-2 bg-projectBlack text-white rounded-lg'>
                        <aside className='p-2 bg-projectRed-2 rounded-lg w-fit flex'>
                            <BiFoodMenu className='m-auto text-2xl' />
                        </aside>
                        <div className=''>
                            <h1>234</h1>
                            <p>New Orders</p>
                        </div>
                    </div>
                    <div className='flex gap-2 p-2 bg-projectBlack text-white rounded-lg'>
                        <aside className='p-2 w-fit flex bg-projectRed-2 rounded-lg'>
                            <CiMoneyBill className='m-auto text-2xl'/>
                        </aside>
                        <div className=''>
                            <h1>N12K</h1>
                            <p>Expenses</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminHomeSection1
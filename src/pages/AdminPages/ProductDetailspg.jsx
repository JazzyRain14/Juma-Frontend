import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import goods from '../../../Project Upload/Ethnic Food/jollof rice.jfif'
import { FaHeart, FaTimes } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
const ProductDetailspg = () => {
    const location = useLocation()
    const [storedArray, setStoredArray] = useState([])
    useEffect(() => {
        getProducts()
        // window.addEventListener('beforeunload', handleBeforeUnload);

        // return () => {
        //     window.removeEventListener('beforeunload', handleBeforeUnload);
        // };
    }, [])

    const getProducts = () => {
        const arrayString = localStorage.getItem('ProductDesc')
        const RetrievedArray = JSON.parse(arrayString);
        if (RetrievedArray) {
            setStoredArray(RetrievedArray)
        } else {
            console.log('No array found in localStorage.');
        }
    }
    const handleBeforeUnload = () => {
        localStorage.removeItem('ProductDesc');
    };
    return (
        <section className='flex px-4 py-4'>
            <section className='flex-1 px-4 py-4'>
                {storedArray.map((product, index) => (
                    <>
                        <div className='flex' key={index}>
                            <div className='h-[300px] w-[300px] relative rounded-lg overflow-hidden'>
                                <img src={product.productImage} className='object-cover absolute top-0 left-0 w-full h-full' alt="" />
                            </div>
                            <div className=' flex-1 w-full flex flex-col px-2'>
                                <div className='w-full flex justify-between'>
                                    <div className='w-4/5'>
                                        <h1 className='text-2xl text-ellipsis gap-2 font-semibold mb-2'>{product.productName}</h1>
                                        <p className='text-[2rem] font-bold text-projectBlack'>${product.productPrice}</p>
                                    </div>
                                    <FaHeart className=' flex-1 mr-4 mt-4 text-2xl text-projectBorder hover:text-projectRed-2 transition-colors duration-200 ease-in-out cursor-pointer' />
                                </div>
                                <div className='my-4 flex-1 flex items-center justify-center'>
                                    <button className='cardButton'>
                                        Add to cart
                                        <FaCartShopping />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='border rounded-lg my-4 shadow-lg p-5'>
                            <h1 className='text-lg font-semibold'>Product Details</h1>
                            <hr className='rounded-lg bg-[#585757] h-[2px] my-2' />
                            <div>
                                {product.productdescription}
                            </div>
                        </div>
                    </>
                ))}
            </section>


            <section className='border p-2 rounded-lg shadow-lg w-1/4 max-h-[30rem] h-full flex flex-col overflow-hidden'>
                <div className='px-2'>
                    <h1 className='text-center my-2'>Cart Contents</h1>
                    <hr className='rounded-lg bg-[#585757] h-[2px] my-2' />
                </div>
                <div className=' w-full px-2 sideBarScroll flex-1'>
                    <div className='flex gap-2 border border-projectBorder rounded-lg p-2 mb-2'>
                        <div className='w-20 h-20 rounded-full overflow-hidden relative'>
                            <img src={goods} className='w-full absolute object-contain h-full' alt="" />
                        </div>
                        <div>
                            <h1 className='text-base font-semibold'>Jollof Rice X Plate</h1>
                            <p>$1300</p>
                            <p className='w-4/5 truncate text-projectBlack font-semibold'>
                                Category
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-2 border border-projectBorder rounded-lg p-2 mb-2'>
                        <div className='w-20 h-20 rounded-full overflow-hidden relative'>
                            <img src={goods} className='w-full absolute object-contain h-full' alt="" />
                        </div>
                        <div>
                            <h1 className='text-base font-semibold'>Jollof Rice X Plate</h1>
                            <p>$1300</p>
                            <p className='w-4/5 truncate text-projectBlack font-semibold'>
                                Category
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-2 border border-projectBorder rounded-lg p-2 mb-2'>
                        <div className='w-20 h-20 rounded-full overflow-hidden relative'>
                            <img src={goods} className='w-full absolute object-contain h-full' alt="" />
                        </div>
                        <div>
                            <h1 className='text-base font-semibold'>Jollof Rice X Plate</h1>
                            <p>$1300</p>
                            <p className='w-4/5 truncate text-projectBlack font-semibold'>
                                Category
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-2 border border-projectBorder rounded-lg p-2 mb-2'>
                        <div className='w-20 h-20 rounded-full overflow-hidden relative'>
                            <img src={goods} className='w-full absolute object-contain h-full' alt="" />
                        </div>
                        <div>
                            <h1 className='text-base font-semibold'>Jollof Rice X Plate</h1>
                            <p>$1300</p>
                            <p className='w-4/5 truncate text-projectBlack font-semibold'>
                                Category
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-2 border border-projectBorder rounded-lg p-2 mb-2'>
                        <div className='w-20 h-20 rounded-full overflow-hidden relative'>
                            <img src={goods} className='w-full absolute object-contain h-full' alt="" />
                        </div>
                        <div>
                            <h1 className='text-base font-semibold'>Jollof Rice X Plate</h1>
                            <p>$1300</p>
                            <p className='w-4/5 truncate text-projectBlack font-semibold'>
                                Category
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-2 border border-projectBorder rounded-lg p-2 mb-2'>
                        <div className='w-20 h-20 rounded-full overflow-hidden relative'>
                            <img src={goods} className='w-full absolute object-contain h-full' alt="" />
                        </div>
                        <div>
                            <h1 className='text-base font-semibold'>Jollof Rice X Plate</h1>
                            <p>$1300</p>
                            <p className='w-4/5 truncate text-projectBlack font-semibold'>
                                Category
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-2 border border-projectBorder rounded-lg p-2 mb-2'>
                        <div className='w-20 h-20 rounded-full overflow-hidden relative'>
                            <img src={goods} className='w-full absolute object-contain h-full' alt="" />
                        </div>
                        <div>
                            <h1 className='text-base font-semibold'>Jollof Rice X Plate</h1>
                            <p>$1300</p>
                            <p className='w-4/5 truncate text-projectBlack font-semibold'>
                                Category
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-2 border border-projectBorder rounded-lg p-2 mb-2'>
                        <div className='w-20 h-20 rounded-full overflow-hidden relative'>
                            <img src={goods} className='w-full absolute object-contain h-full' alt="" />
                        </div>
                        <div>
                            <h1 className='text-base font-semibold'>Jollof Rice X Plate</h1>
                            <p>$1300</p>
                            <p className='w-4/5 truncate text-projectBlack font-semibold'>
                                Category
                            </p>
                        </div>
                    </div>
                </div>
                <div className='p-2'>
                    <button className='cardButton '>
                        Clear Cart
                    </button>
                </div>
            </section>
        </section>
        //     {storedArray.map((items) => (
        //         <>
        //         <h1>{ items.productName}</h1>
        //         <img src={items.productImage } alt="" />
        //         <p>{ }</p>
        //     </>
        // ))}
    )
}

export default ProductDetailspg
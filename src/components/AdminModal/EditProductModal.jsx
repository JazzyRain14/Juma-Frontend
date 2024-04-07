import React, { useState } from "react"

const EditProductModal = ({ editProduct, itemData, productName, setHandleProductName, productCategory, setHandleProductCategory, productImage, setProductImage, productPrice, setHandleProductPrice }) => {

    return (
        <>
            <div className='w-full h-full top-0 right-0 bottom-0 fixed'>
                <div
                    onClick={editProduct}
                    className="w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-[rgba(49,49,49,0.8)]"></div>
                <div className='absolute top-[40%] left-[50%] -translate-x-2/4 -translate-y-2/4 p-4 max-w-3xl max-md:max-w-xl max-sm:max-w-[20rem] transition-all duration-200 ease-out w-full bg-[#f1f1f1]'>
                    <div className='flex items-center justify-between border-b'>
                        <h2 className='text-lg font-semibold mb-2'>Add Product</h2>
                        <button
                            onClick={editProduct}
                            className="border rounded mb-2 text-white bg-projectRed-2 py-1  px-3">
                            close
                        </button>
                    </div>
                    {itemData && (
                        <form action="">
                            {/* <div className='gri'> */}
                            {/* <div className="flex">
                                <input type="text" value={productImage} onChange={(e) => setProductImage(e.target.value)} className=' my-2 py-2 px-2 w-full bg-slate-200  placeholder:text-[#3a3a3a]  text-[#3a3a3a] font-semibold outline-projectRed-2' />
                                <input type="image" src="" alt="" className="my-2 py-2 px-2" />
                            </div> */}
                            <input type="text" value={productName} onChange={(e) => setHandleProductName(e.target.value)} className=' my-2 py-2 px-2 w-full bg-slate-200  placeholder:text-[#3a3a3a]  text-[#3a3a3a] font-semibold outline-projectRed-2' />
                            <input type="text" value={productCategory} onChange={(e) => setHandleProductCategory(e.target.value)} className=' my-2 py-2 px-2 w-full bg-slate-200  placeholder:text-[#3a3a3a]  text-[#3a3a3a] font-semibold outline-projectRed-2' />
                            <input type="text" value={productPrice} onChange={(e) => setHandleProductPrice(e.target.value)} className=' my-2 py-2 px-2 w-full bg-slate-200  placeholder:text-[#3a3a3a]  text-[#3a3a3a] font-semibold outline-projectRed-2' />

                            <button className=' my-2  mt-4 py-2 px-2 w-full bg-projectRed-2 text-lg rounded-lg  placeholder:text-[#3a3a3a] text-white font-semibold outline-projectRed-2'>Submit</button>
                        </form>
                    )}
                </div>
            </div>
        </>
    )
}

export default EditProductModal
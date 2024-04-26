import React, { useState } from "react"
import Success from '../../assets/Images/Success.gif'
const EditProductModal = ({ editProduct, itemData, handleProductName, setHandleProductName, handleProductCategory, setHandleProductCategory, handleProductImage, setProductImage, handleProductPrice, setHandleProductPrice, updateProduct }) => {

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
                        <>
                            {/* <div className='gri'> */}
                            {/* <div className="flex">
                                <input type="text" value={productImage} onChange={(e) => setProductImage(e.target.value)} className=' my-2 py-2 px-2 w-full bg-slate-200  placeholder:text-[#3a3a3a]  text-[#3a3a3a] font-semibold outline-projectRed-2' />
                                <input type="image" src="" alt="" className="my-2 py-2 px-2" />
                            </div> */}
                            <input type="text" value={handleProductName} onChange={(e) => setHandleProductName(e.target.value)} className=' my-2 py-2 px-2 w-full bg-slate-200  placeholder:text-[#3a3a3a]  text-[#3a3a3a] font-semibold outline-projectRed-2' />
                            <input type="text" readOnly value={handleProductCategory} onChange={(e) => setHandleProductCategory(e.target.value)} className=' my-2 py-2 px-2 w-full bg-slate-200  placeholder:text-[#3a3a3a]  text-[#3a3a3a] font-semibold outline-projectRed-2' />
                            <input type="text" value={handleProductPrice} onChange={(e) => setHandleProductPrice(e.target.value)} className=' my-2 py-2 px-2 w-full bg-slate-200  placeholder:text-[#3a3a3a]  text-[#3a3a3a] font-semibold outline-projectRed-2' />

                            <button className=' my-2  mt-4 py-2 px-2 w-full bg-projectRed-2 text-lg rounded-lg  placeholder:text-[#3a3a3a] text-white font-semibold outline-projectRed-2' onClick={updateProduct}>Submit</button>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

const UpdateProductSuccessModal = ({ messages }) => {
    return (
        <>
            <div className='w-full h-full'>
                <div
                    className="w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-[rgba(49,49,49,0.8)]"></div>
                <div className='absolute top-[40%] left-[50%] -translate-x-2/4 -translate-y-2/4 w-fit max-md:max-w-lg max-sm:max-w-[20rem] transition-all duration-200 ease-out bg-white p-4 rounded-lg overflow-hidden'>
                    <img src={Success} alt="" />
                    <h1 className="text-center text-lg font-semibold">{messages}</h1>
                </div>
            </div>
        </>
    )
}

const DeleteProductModal = ({ deleteProduct, index, deleteModal }) => {
    return (
        <div className='w-full h-full'>
            <div
                className="w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-[rgba(49,49,49,0.8)]"></div>
            <div className='absolute top-[40%] left-[50%] -translate-x-2/4 -translate-y-2/4 w-fit max-md:max-w-lg max-sm:max-w-[20rem] transition-all duration-200 ease-out bg-white p-4 rounded-lg overflow-hidden'>
                <h1 className="text-xl mb-4">Are you sure you want to delete this product?</h1>
                <div className="flex justify-evenly">
                    <button className="py-4 px-8 border-2 border-projectBorder rounded-lg text-lg font-semibold bg-white hover:text-projectRed-2 cursor-pointer" onClick={deleteModal}>
                        Cancel
                    </button>
                    <button className="py-4 px-8 border-2 border-projectBorder rounded-lg text-lg font-semibold bg-projectRed-2 hover:text-white cursor-pointer" onClick={() => deleteProduct(index)}>
                        Delete
                    </button>
                </div>
                {/* <h1 className="text-center text-lg font-semibold">{messages}</h1> */}
            </div>
        </div>
    )
}

export {
    EditProductModal, UpdateProductSuccessModal, DeleteProductModal
}
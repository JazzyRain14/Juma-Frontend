import React, { useEffect, useState } from 'react'
import loading from '../../assets/LoadingTxt.svg'
import { FaTrash, FaUserEdit } from 'react-icons/fa'
const productTable = ({ selectedData }) => {
    const [isTrue, setIsTrue] = useState(false)
    const editProduct = (index) => {
        setIsTrue(!isTrue)
        let filterArray = selectedData.filter((item, ind) => index === ind);
        console.log(filterArray)
    }
    console.log(selectedData)
    return (
        <>
            <div className='overflow-x-scroll w-full px-4 mt-4'>
                <table className=' text-left rounded-t-xl overflow-hidden rtl:text-right text-gray-400 dark:text-gray-400'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                            <th scope='col' className='px-6 py-3'>S/N</th>
                            <th scope='col' className='px-6 py-3'>ProductName</th>
                            <th scope='col' className='px-6 py-3'>ProductCategory</th>
                            <th scope='col' className='px-6 py-3'>ProductPrice</th>
                            <th scope='col' className='px-6 py-3'>Edit</th>
                            <th scope='col' className='px-6 py-3'>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='striped'>
                        {selectedData.length > 0 ?
                            selectedData.map((item, index) => (
                                <tr key={index} className='text-center'>
                                    {/* <td>{item.productImage}</td> */}
                                    <td className='px-6 py-4'>{index + 1}</td>
                                    <td className='px-6 py-4'>{item.productName}</td>
                                    <td className='px-6 py-4'>{item.productCategory}</td>
                                    <td className='px-6 py-4'>{item.productPrice}</td>
                                    <td className='px-6 py-4'><FaUserEdit onClick={()=>editProduct(index)} className=' cursor-pointer text-lg' /></td>
                                    <td className='px-6 py-4'><FaTrash className=' cursor-pointer text-lg' /></td>
                                </tr>
                            )) :
                            <tr className='text'>
                                {/* <td>{item.productImage}</td> */}
                                <td className=''><img width={150} src={loading} alt="loading..." /></td>
                                <td className=''><img width={150} src={loading} alt="loading..." /></td>
                                <td className=''><img width={150} src={loading} alt="loading..." /></td>
                                <td className=''><img width={150} src={loading} alt="loading..." /></td>
                                <td className=''><img width={150} src={loading} alt="loading..." /></td>
                                <td className=''><img width={150} src={loading} alt="loading..." /></td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
            {isTrue && (<EditModal/>)}
        </>
    )
}
const EditModal = () => {
    
    return (
        <>
            <div className='w-full h-full top-0 right-0 bottom-0 fixed'>
                <div
                    onClick={editProduct}
                    className="w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-[rgba(49,49,49,0.8)]"></div>
                <div className='absolute top-[40%] left-[50%] -translate-x-2/4 -translate-y-2/4 p-4 max-w-3xl w-full bg-[#f1f1f1]'>
                    <div className='flex items-center justify-between border-b'>
                        <h2 className='text-lg font-semibold mb-2'>Add Product</h2>
                        <button
                            onClick={editProduct}
                            className="border rounded mb-2 text-white bg-projectRed-2 py-1  px-3">
                            close
                        </button>
                    </div>
                    <form action="">
                        {/* <div className='gri'> */}
                        <input type="text" value='' className=' my-2 py-2 px-2 w-full bg-slate-200  placeholder:text-[#3a3a3a]  text-[#3a3a3a] font-semibold outline-projectRed-2' />
                        <button className=' my-2  mt-4 py-2 px-2 w-full bg-projectRed-2 text-lg rounded-lg  placeholder:text-[#3a3a3a] text-white font-semibold outline-projectRed-2'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default productTable
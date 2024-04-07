import React, { useEffect, useState } from 'react'
import loading from '../../assets/LoadingTxt.svg'
import { FaTrash, FaUserEdit } from 'react-icons/fa'
import EditProductModal from '../../components/AdminModal/EditProductModal'
const productTable = ({ selectedData }) => {
    const [isTrue, setIsTrue] = useState(false)
    const [selectedItemData, setSelectedItemData] = useState(null);
    const [handleProductImage, setHandleProductImage] = useState('')
    const [handleProductName, setHandleProductName] = useState('')
    const [handleProductPrice, setHandleProductPrice] = useState('')
    const [handleProductCategory, setHandleProductCategory] = useState('')
    // const editProduct = (index) => {
    //     setIsTrue(!isTrue)
    //     let filterArray = selectedData.filter((item, ind) => index === ind);
    //     console.log(filterArray)
    // }
    const editProduct = (item) => {
        setSelectedItemData(item)
        setIsTrue(!isTrue)
        setHandleProductImage(item.productImage)
        setHandleProductName(item.productName)
        setHandleProductPrice(item.productPrice)
        setHandleProductCategory(item.productCategory)
    }
    console.log(selectedData)
    return (
        <>
            <div className='max-lg:overflow-x-scroll w-full px-4 mt-4'>
                <table className=' text-left rounded-t-xl overflow-hidden rtl:text-right text-gray-200 dark:text-gray-400 w-full'>
                    <thead className='text-xs uppercase text-gray-200 bg-projectRed-2'>
                        <tr>
                            <th scope='col' className='px-6 py-3'>S/N</th>
                            <th scope='col' className='px-6 py-3'>Product Image</th>
                            <th scope='col' className='px-6 py-3'>Product Name</th>
                            <th scope='col' className='px-6 py-3'>Product Category</th>
                            <th scope='col' className='px-6 py-3'>Product Price</th>
                            <th scope='col' className='px-6 py-3'>Edit</th>
                            <th scope='col' className='px-6 py-3'>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='striped'>
                        {selectedData.length > 0 ?
                            selectedData.map((item, index) => (
                                <tr key={index}>
                                    {/* <td>{item.productImage}</td> */}
                                    <td className='px-6 py-4'>{index + 1}</td>
                                    <td className='overflow-hidden px-6 py-4'>
                                        <img className='w-14 h-14 rounded-full' src={item.productImage} alt={item.productName} />
                                    </td>
                                    <td className='px-6 py-4'>{item.productName}</td>
                                    <td className='px-6 py-4'>{item.productCategory}</td>
                                    <td className='px-6 py-4'>{item.productPrice}</td>
                                    <td className='px-6 py-4'><FaUserEdit onClick={() => editProduct(item)} className=' cursor-pointer text-lg' /></td>
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
                                <td className=''><img width={150} src={loading} alt="loading..." /></td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
            {isTrue && (<EditProductModal editProduct={editProduct} productImage={handleProductImage} setProductImage={setHandleProductImage} productCategory={handleProductCategory} setHandleProductCategory={setHandleProductCategory} productName={handleProductName} setHandleProductName={setHandleProductName} productPrice={handleProductPrice} setHandleProductPrice={setHandleProductPrice} itemData={selectedItemData} />)}
        </>
    )
}


export default productTable
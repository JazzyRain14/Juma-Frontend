import React, { useEffect, useState } from 'react'
import Loading from '../../assets/LoadingTxt.svg'
import { FaTrash, FaUserEdit } from 'react-icons/fa'
import EditProductModal from './AdminModal/EditProductModal'
import filenotfound from '../../assets/Images/File-Not-Found.jpeg'
import axios from 'axios'
const ProductTable = ({ selectedData, isLoading, getProduct }) => {
    const [isTrue, setIsTrue] = useState(false)
    const [selectedItemData, setSelectedItemData] = useState(null);
    const [handleProductImage, setHandleProductImage] = useState('')
    const [handleProductName, setHandleProductName] = useState('')
    const [handleProductPrice, setHandleProductPrice] = useState('')
    const [handleProductCategory, setHandleProductCategory] = useState('')
    const [handleProductId, setHandleProductId] = useState('')
    const deleteEndpoints = "https://juma-backend-delta.vercel.app/productcontrol/deleteproduct"
    const editEndpoints = "https://juma-backend-delta.vercel.app/productcontrol/editproduct"


    const editProduct = (index) => {
        let filterArray = selectedData.filter((item, ind) => index === ind);
        console.log(filterArray);
        setSelectedItemData(filterArray)
        setIsTrue(!isTrue)
        setHandleProductImage(filterArray[0].productImage);
        setHandleProductName(filterArray[0].productName);
        setHandleProductPrice(filterArray[0].productPrice);
        setHandleProductCategory(filterArray[0].productCategory);
        setHandleProductId(filterArray[0]._id)
    }

    const updateProduct = async () => {
        let editedObj = { handleProductName, handleProductCategory, handleProductPrice, handleProductId }
        console.log(editedObj)
        setIsTrue(!isTrue);
        try {
            let result = await axios.post(editEndpoints, editedObj);
            if (result) {
                const messages = result.data.message
                console.log(result);
                alert(messages);
                getProduct()
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProduct = async (index) => {
        let filterArray = selectedData.filter((item, ind) => index === ind);
        let productId = filterArray[0]._id
        let productCategory = filterArray[0].productCategory
        alert(productCategory)
        let obj = { productId, productCategory }
        try {
            let result = await axios.post(deleteEndpoints, obj);
            if (result) {
                const messages = result.data.message
                console.log(result.data);
                alert(messages);
                getProduct()
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <div className='w-full flex-1 rounded-xl sideBarScroll px-4 my-4'>
                <table className='text-left rounded-t-xl overflow-hidden rtl:text-right text-gray-200 dark:text-gray-400 w-full h-fit transition-all duration-200 ease-out'>
                    <thead className='text-xs  uppercase text-gray-200 bg-projectRed-2'>
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
                        {
                            isLoading ? (
                                <tr>
                                    <td colSpan={7} >
                                        <div className=''><img width={150} src={Loading} alt="Loading..." /></div>
                                    </td>
                                </tr>
                            ) : selectedData.length > 0 ? (
                                selectedData.map((item, index) => (
                                    <tr key={index}>
                                        <td className='px-6 py-4'>{index + 1}</td>
                                        <td className='overflow-hidden px-6 py-4'>
                                            <img className='w-14 h-14 rounded-full' src={item.productImage} alt={item.productName} />
                                        </td>
                                        <td className='px-6 py-4'>{item.productName}</td>
                                        <td className='px-6 py-4'>{item.productCategory}</td>
                                        <td className='px-6 py-4'>{item.productPrice}</td>
                                        <td className='px-6 py-4'><FaUserEdit onClick={() => editProduct(index)} className=' cursor-pointer text-lg' /></td>
                                        <td className='px-6 py-4'><FaTrash className=' cursor-pointer text-lg' onClick={() => deleteProduct(index)} /></td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className='py-10 transition-all duration-200 ease-out'>
                                        <div className='flex flex-col'>
                                            <h1 className='text-4xl text-center'>
                                                No data to display
                                            </h1>
                                            <img className='m-auto' src={filenotfound} width={200} alt="" />
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {isTrue && (<EditProductModal editProduct={editProduct} handleProductImage={handleProductImage} setProductImage={setHandleProductImage} handleProductCategory={handleProductCategory} setHandleProductCategory={setHandleProductCategory} handleProductName={handleProductName} setHandleProductName={setHandleProductName} handleProductPrice={handleProductPrice} setHandleProductPrice={setHandleProductPrice} itemData={selectedItemData} updateProduct={updateProduct} />)}
        </>
    )
}


export default ProductTable
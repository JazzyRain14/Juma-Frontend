import React, { useEffect, useState } from 'react'
import loading from '../../assets/LoadingTxt.svg'
import { FaTrash, FaUserEdit } from 'react-icons/fa'
import EditProductModal from '../../components/AdminModal/EditProductModal'
import axios from 'axios'
const productTable = ({ selectedData,getSnacksProduct }) => {
    const [isTrue, setIsTrue] = useState(false)
    const [selectedItemData, setSelectedItemData] = useState(null);
    const [handleProductImage, setHandleProductImage] = useState('')
    const [handleProductName, setHandleProductName] = useState('')
    const [handleProductPrice, setHandleProductPrice] = useState('')
    const [handleProductCategory, setHandleProductCategory] = useState('')
    const [handleProductId, setHandleProductId] = useState('')
    const deleteEndpoints = "https://juma-backend-delta.vercel.app/productcontrol/deleteproduct"
    // const editEndpoints = "https://juma-backend-delta.vercel.app/productcontrol/editproduct"
    const editEndpoints = "http://localhost:3500/productcontrol/editproduct"
    // const editProduct = (index) => {
    //     setIsTrue(!isTrue)
    //     let filterArray = selectedData.filter((item, ind) => index === ind);
    //     console.log(filterArray)
    // }
    const editProduct = (index) => {
        let filterArray = selectedData.filter((item,ind)=> index === ind);
        console.log(filterArray);
        setSelectedItemData(filterArray)
        setIsTrue(!isTrue)
        setHandleProductImage(filterArray[0].productImage);
        setHandleProductName(filterArray[0].productName);
        setHandleProductPrice(filterArray[0].productPrice);
        setHandleProductCategory(filterArray[0].productCategory);
        setHandleProductId(filterArray[0]._id)
    }
    
    const updateProduct = async () =>{
        let editedObj = {handleProductName,handleProductCategory,handleProductPrice,handleProductId}
        console.log(editedObj)
        setIsTrue(!isTrue);
        try {
            let result = await axios.post(editEndpoints,editedObj);
            if(result){
                const messages = result.data.message
                console.log(result);
                alert(messages);
                getSnacksProduct()
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProduct = async (index)=>{
        let filterArray = selectedData.filter((item,ind)=> index === ind);
        let productId = filterArray[0]._id
        let productCategory = filterArray[0].productCategory
        alert(productCategory)
        let obj = {productId,productCategory}
        try {
            let result = await axios.post(deleteEndpoints,obj);
            if(result){
                const messages = result.data.message
                console.log(result.data);
                alert(messages);
                getSnacksProduct()
            }
        } catch (error) {
            console.log(error);
        }
        
    }

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
                                    <td className='px-6 py-4'><FaUserEdit onClick={() => editProduct(index)} className=' cursor-pointer text-lg' /></td>
                                    <td className='px-6 py-4'><FaTrash className=' cursor-pointer text-lg' onClick={()=>deleteProduct(index)}/></td>
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
            {isTrue && (<EditProductModal editProduct={editProduct} handleProductImage={handleProductImage} setProductImage={setHandleProductImage} handleProductCategory={handleProductCategory} setHandleProductCategory={setHandleProductCategory} handleProductName={handleProductName} setHandleProductName={setHandleProductName} handleProductPrice={handleProductPrice} setHandleProductPrice={setHandleProductPrice} itemData={selectedItemData} updateProduct={updateProduct}/>)}
        </>
    )
}


export default productTable
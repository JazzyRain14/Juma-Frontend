import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Enterproduct from '../../components/Enterproduct';
import axios from 'axios';
import ProductTable from '../../components/ProductTable';
import AdminSideBar from '../../components/AdminSidebar';
import { SharedContext } from '../../components/User/home/SharedContextProvider';
import AdminTopNav from '../../components/Admin/AdminTopNav';

const DesertSwtUploadPg = () => {
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);
  const { isOpen, toggleOpen } = useContext(SharedContext);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [productImage, setproductimage] = useState("");
  const [productName, setproductname] = useState("");
  const [productCategory, setproductcategory] = useState("");
  const [productdescription, setproductdescription] = useState("")
  const [productPrice, setproductprice] = useState("");
  const [first, setfirst] = useState([])
  const endpoints = "https://juma-backend-delta.vercel.app/addproduct/newdesertproduct"
  const productEndpoints = "https://juma-backend-delta.vercel.app/getproduct/getdesertswt"
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    getDesertSwtProduct();
  }, [])
  const getDesertSwtProduct = async () => {
    setisLoading(true)
    try {
      const response = await axios.get(productEndpoints);
      console.log(response.data.desertSwtProduct);
      setfirst(response.data.desertSwtProduct);
    }
    catch (error) {
      console.log(error)
    } finally {
      setisLoading(false)
    }
  }
  const handleIsOpen = () => {
    setIsModalOpened(!isModalOpened);
  }
  const handleIsClose = async () => {
    let productCategory = "desertAndSweets"
    let productObj = { productImage, productName, productCategory, productdescription, productPrice }
    console.log(productObj)
    setIsModalOpened(!isModalOpened);

    try {
      let result = await axios.post(endpoints, productObj);
      if (result) {
        console.log(result);
        const messages = result.data.message
        alert(messages);
        getDesertSwtProduct();
      }
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <>
      <div className='flex gap-4 justify-between h-full w-full'>
        <AdminSideBar />
        <div className={`w-full border overflow-hidden rounded-md sm:ml-0 max-sm:ml-0 lg:ml-[300px] transition-all duration-300 ease-in-out  h-screen flex flex-col
    ${isOpen ? 'sm:translate-x-[300px] max-sm:translate-x-[300px]' : 'sm:ml-0 max-sm:ml-0'}`}>
          <div className='border py-4 px-4 h-[25%]'>
            <AdminTopNav />
            <h2 className='text-center mt-5 text-5xl font-semibold sm:text-2xl transition-all duration-200 ease-out max-sm:text-2xl'>Add New Desert & Sweet Product</h2>
            <button className='w-fit h-[50px] p-2 bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold' onClick={handleIsOpen}>Add Product</button>
          </div>
          <ProductTable isLoading={isLoading} selectedData={first} getProduct={getDesertSwtProduct} />
        </div>
      </div>
      {isModalOpened && (<Enterproduct Enterproduct={handleIsOpen} setproductname={setproductname} setproductimage={setproductimage} setproductprice={setproductprice} setproductdescription={setproductdescription} isClose={handleIsClose} />)}
    </>
  )
}

export default DesertSwtUploadPg;
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Enterproduct from '../../components/Enterproduct';
import axios from 'axios';
import AdminSideBar from '../../components/AdminSidebar';
import ProductTable from '../../components/ProductTable';
import { SharedContext } from '../../components/User/home/SharedContextProvider';
import AdminTopNav from '../../components/Admin/AdminTopNav';
import { Toaster, toast } from 'sonner';
import { UpdateProductSuccessModal } from '../../components/Admin/AdminModal';

const EthnicFoodUploadPg = () => {
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);
  const { isOpen, toggleOpen } = useContext(SharedContext);
  const [message, setMessage] = useState('')
  const [modalOpened, setModalOpened] = useState(false)
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [productImage, setproductimage] = useState("");
  const [productName, setproductname] = useState("");
  const [productCategory, setproductcategory] = useState("");
  const [productdescription, setproductdescription] = useState("")
  const [productPrice, setproductprice] = useState("");
  const [first, setfirst] = useState([])
  const endpoints = "https://juma-backend-delta.vercel.app/addproduct/newethnicproduct"
  const productEndpoints = "https://juma-backend-delta.vercel.app/getproduct/getethnicfood"
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    getEthnicFoodProduct();
  }, [])
  const getEthnicFoodProduct = async () => {
    setisLoading(true)
    try {
      const response = await axios.get(productEndpoints);
      console.log(response.data.ethnicFoodProduct)
      setfirst(response.data.ethnicFoodProduct)
    }
    catch (error) {
      toast.error(error)
    } finally {
      setisLoading(false)
    }
  }
  const handleIsOpen = () => {
    setIsModalOpened(!isModalOpened);
  }
  const handleIsClose = async () => {
    let productCategory = "ethnicFood"
    let productObj = { productImage, productName, productCategory, productdescription, productPrice }
    console.log(productObj)
    setIsModalOpened(!isModalOpened);

    try {
      let result = await axios.post(endpoints, productObj);
      if (result) {
        console.log(result);
        const messages = result.data.message
        setMessage(messages);
        setModalOpened(!modalOpened)
        getEthnicFoodProduct();
        setTimeout(() => {
          setModalOpened(false)
        }, 2000);
      }
    } catch (error) {
      toast.error(error);
    }

  }
  return (
    <>
      <Toaster position='top-center' richColors />
      <div className='flex gap-4 justify-between w-full h-screen overflow-hidden'>
        <AdminSideBar />
        <div className={`w-full border overflow-hidden rounded-md sm:ml-0 max-sm:ml-0 lg:ml-[300px] transition-all duration-300 ease-in-out  flex flex-col
    ${isOpen ? 'sm:translate-x-[300px] max-sm:translate-x-[300px]' : 'sm:ml-0 max-sm:ml-0'}`}>
          <div className='border py-4 px-4 h-[25%]'>
            <AdminTopNav />
            <h2 className='text-center mt-5 text-5xl font-semibold  sm:text-2xl transition-all duration-200 ease-out max-sm:text-2xl'>Add New Ethnic Food Product</h2>
            <button className='w-fit h-[50px] p-2 bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold' onClick={handleIsOpen}>Add Product</button>
          </div>
          <ProductTable isLoading={isLoading} selectedData={first} getProduct={getEthnicFoodProduct} />
        </div>
      </div>
      {modalOpened && (<UpdateProductSuccessModal messages={message} />)}
      {isModalOpened && (<Enterproduct Enterproduct={handleIsOpen} setproductname={setproductname} setproductimage={setproductimage} setproductprice={setproductprice} setproductdescription={setproductdescription} isClose={handleIsClose} />)}
    </>
  )
}

export default EthnicFoodUploadPg;
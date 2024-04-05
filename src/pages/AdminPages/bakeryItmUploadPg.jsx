import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Enterproduct from '../../components/Enterproduct';
import axios from 'axios';
import ProductTable from './ProductTable';
import AdminSideBar from '../../components/AdminSidebar';

const BakeryItmUploadPg = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [productImage, setproductimage] = useState("");
  const [productName, setproductname] = useState("");
  const [productCategory, setproductcategory] = useState("");
  const [selectedData, setSelectedData] = useState([]);
  const [productdescription, setproductdescription] = useState("")
  const [productPrice, setproductprice] = useState("");
  const endpoints = "https://juma-backend-delta.vercel.app/addproduct/newbakeryproduct"


  const handleIsOpen = () => {
    setIsModalOpened(!isModalOpened);
  }

  const handleCloseIsOpen = async () => {
    let productCategory = "bakeryItems"
    let productObj = { productImage, productName, productCategory, productdescription, productPrice }
    console.log(productObj);
    setIsOpen(false);

    try {
      let result = await axios.post(endpoints, productObj);
      if (result) {
        console.log(result);
        const messages = result.data.message
        alert(messages);
      }
    } catch (error) {

    }

  }

  return (
    <>
      <div className='flex gap-4 justify-between h-full w-full'>
        <AdminSideBar />
        <div className={`w-full overflow-hidden rounded-md sm:ml-20 max-sm:ml-20 lg:ml-[300px] transition-all duration-300 ease-in-out 
    ${isOpen ? 'sm:translate-x-[220px] max-sm:translate-x-[220px]' : 'sm:ml-0 max-sm:ml-0'}`}>
          <h2 className='text-center mt-5 text-5xl font-semibold'>Add New Snacks Product</h2>
          <div className='flex justify-evenly mt-10 mb-10'>
            {/* <Link to="/adminhome/snacks"><button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold'>Snacks</button></Link> */}
            {/* <Link to="/adminhome/saucesAndCondiments"><button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold'>Sauces and cond</button></Link> */}
            {/* <Link to="/adminhome/ethnicFood"><button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold'>Ethn food</button></Link> */}
            <Link to="/adminhome/bakeryItems"><button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold'>Bakery itm</button></Link>
            {/* <Link to="/adminhome/softDrinks"><button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold'>Soft drk</button></Link> */}
            {/* <Link to="/adminhome/alcoholicBeverages"><button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold'>Alcoholic bev</button></Link> */}
            {/* <Link to="/adminhome/desertAndSweets"><button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold'>Desert and swts</button></Link> */}
          </div>

          <button className='w-fit h-[50px] p-2 bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold' onClick={handleIsOpen}>Add Product</button>
          <ProductTable selectedData={selectedData} />
        </div>
      </div>
      {/* {isOpen && <div className="fixed inset-0 bg-gray-800 opacity-50"></div>}
    <Enterproduct isOpen={isOpen} setIsOpen={setIsOpen} onClose={handleCloseIsOpen} setproductname={setproductname} setproductimage={setproductimage} setproductcategory={setproductcategory} setproductprice={setproductprice} setproductdescription={setproductdescription}/> */}
      {isModalOpened && (<Enterproduct Enterproduct={handleIsOpen} setproductname={setproductname} setproductimage={setproductimage} setproductprice={setproductprice} setproductdescription={setproductdescription} />)}
    </>
  )
}

export default BakeryItmUploadPg;
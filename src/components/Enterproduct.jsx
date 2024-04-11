import React, { useState } from 'react'
import myCategory from './category'
import { FaCamera } from 'react-icons/fa6'

const Enterproduct = ({ Enterproduct, isClose, setproductname, setproductimage, setproductcategory, setproductprice, setproductdescription }) => {


  const fileChange = (e) => {
    let myImage = e.target.files[0]
    let reader = new FileReader();
    reader.readAsDataURL(myImage);
    reader.onload = () => {
      setproductimage(reader.result);
    }
  }

  return (
    <>
      {/* <div className="fixed h-full w-full inset-0 bg-gray-800 opacity-50"></div>
      <div className='fixed h-full w-full inset-0 flex items-center justify-center z-50'>
        <div className='bg-white max-w-[500px] w-full py-6 h-fit'>
          <div className=' flex justify-center items-center flex-col '>
            <h3 className='text-[30px] font-medium mb-4'>Enter Product Info</h3>
            <input type="file" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#FE0000] border-[#FE0000] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter product image' onChange={(e) => fileChange(e)} />
            <input type="text" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#FE0000] border-[#FE0000] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter product name' onChange={(e) => setproductname(e.target.value)} />
            <textarea type="text"
              className='lg:w-[70%] md:w-[70%] w-[75%] bg-[#F3F3F3] rounded-[4px] focus:outline-[#FE0000] border-[#FE0000] 
              border-[2px] text-[#67656E] text-[14px] font-semibold mb-2 h-24 max-h-24 py-2 px-2'
              placeholder='Enter product description'
              onChange={(e) => setproductdescription(e.target.value)} />
            <input type="text" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#FE0000] border-[#FE0000] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter product price' onChange={(e) => setproductprice(e.target.value)} />
            <button className='block mt-[15px] lg:w-[70%] md:w-[70%] w-[75%] h-[55px] bg-[#FE0000] rounded-[4px] text-[#FFFFFF] text-[18px] font-semibold font-sans' onClick={onClose}>Send</button>
          </div>
        </div>
      </div> */}
      <div className='w-full h-full top-0 right-0 bottom-0 fixed'>
        <div
          onClick={Enterproduct}
          className="w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-[rgba(49,49,49,0.8)]"></div>
        <div className='absolute top-[40%] left-[50%] -translate-x-2/4 -translate-y-2/4 p-4 max-w-3xl w-full bg-[#f1f1f1]'>
          <div className='flex items-center justify-between border-b'>
            <h2 className='text-lg font-semibold mb-2'>Add Product</h2>
            <button
              onClick={Enterproduct}
              className="border rounded mb-2 text-white bg-projectRed-2 py-1  px-3">
              close
            </button>
          </div>
         
            {/* <div className='gri'> */}
            <div
              className="grid my-2">
              <span className='text-lg font-semibold'>Select Image</span>
              <div className=" w-full cursor-pointer rounded bg-white shadow outline-projectRed-2 py-1 flex items-center">
                <FaCamera className="mx-2" />
                <input
                  className="file:hidden w-full cursor-pointer py-2 bg-transparent placeholder:text-[#3a3a3a]  text-[#3a3a3a] font-semibold outline-projectRed-2"
                  type="file"
                  src=""
                  alt="" accept="image/*"  onChange={(e)=>fileChange(e)}/>
              </div>
            </div>
            <input type="text" placeholder='Enter product name' className=' my-2 py-2 px-2 w-full bg-slate-200  placeholder:text-[#3a3a3a]  text-[#3a3a3a] font-semibold outline-projectRed-2' onChange={(e)=>setproductname(e.target.value)}/>
            <textarea id="" rows="10" placeholder='Product Description'
              className=' my-2 py-2 px-2 w-full bg-slate-200  placeholder:text-[#3a3a3a] text-[#3a3a3a] font-semibold outline-projectRed-2 max-h-[150px] h-full' onChange={(e)=>setproductdescription(e.target.value)}/>
            <input type="text" placeholder='Enter product price' className=' my-2 py-2 px-2 w-full bg-slate-200  placeholder:text-[#3a3a3a]  text-[#3a3a3a] font-semibold outline-projectRed-2' onChange={(e)=>setproductprice(e.target.value)}/>
            <button className=' my-2  mt-4 py-2 px-2 w-full bg-projectRed-2 text-lg rounded-lg  placeholder:text-[#3a3a3a] text-white font-semibold outline-projectRed-2' onClick={isClose}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default Enterproduct;
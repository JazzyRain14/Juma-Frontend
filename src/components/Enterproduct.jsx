import React ,{useState}from 'react'
import myCategory from './category'

const Enterproduct = ({isOpen, setIsOpen, onClose, setproductname, setproductimage, setproductcategory, setproductprice, setproductdescription}) => {
    if(!isOpen) return null

    const fileChange=(e)=>{
      let myImage = e.target.files[0]
      let reader = new FileReader();
      reader.readAsDataURL(myImage);
      reader.onload=()=>{
        setproductimage(reader.result);
      }
    }
    
  return (
    <>
    <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
    <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className='bg-white lg:w-[50%] lg:h-[500px] lg:p-4 lg:rounded lg:shadow-lg md:w-[90%] md:h-[300px] md:p-4 md:rounded md:shadow-lg w-[90%] h-[300px] p-4 rounded shadow-lg'>
        <div className=' flex justify-center items-center flex-col '>
       <h3 className='text-[30px] font-medium mb-4'>Enter Product Info</h3>
         <input type="file" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#FE0000] border-[#FE0000] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter product image' onChange={(e)=>fileChange(e)}/>
         <input type="text" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#FE0000] border-[#FE0000] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter product name' onChange={(e)=>setproductname(e.target.value)}/>
         <select name="" id="" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#FE0000] border-[#FE0000] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' onChange={(e)=>setproductcategory(e.target.value)}>
          {
                myCategory.map((item,index)=>(
                  <option  value={item.cat} key={index}>{item.cat}</option>
                ))
          }
        </select>
         <input type="text" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#FE0000] border-[#FE0000] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter product description' onChange={(e)=>setproductdescription(e.target.value)}/>
         <input type="text" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#FE0000] border-[#FE0000] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter product price' onChange={(e)=>setproductprice(e.target.value)}/>
         <button className='block mt-[15px] lg:w-[70%] md:w-[70%] w-[75%] h-[55px] bg-[#FE0000] rounded-[4px] text-[#FFFFFF] text-[18px] font-semibold font-sans' onClick={onClose}>Send</button>
         </div>
         </div>
     </div>
    </>
  )
}

export default Enterproduct;
import React from 'react'
import myCategory from './category'

const Enterproduct = ({isOpen, setIsOpen, onClose}) => {
    if(!isOpen) return null
  return (
    <>
    <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
    <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className='bg-white lg:w-[50%] lg:h-[500px] lg:p-4 lg:rounded lg:shadow-lg md:w-[90%] md:h-[300px] md:p-4 md:rounded md:shadow-lg w-[90%] h-[300px] p-4 rounded shadow-lg'>
        <div className=' flex justify-center items-center flex-col '>
       <h3 className='text-[30px] font-medium mb-4'>Enter Product Info</h3>
         <input type="file" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#FE0000] border-[#FE0000] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter product image'/>
         <input type="text" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#FE0000] border-[#FE0000] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter product name'/>
         <select type="text" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#FE0000] border-[#FE0000] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2'>
          {
                myCategory.map((item,index)=>{
                  <option value="" key={index}>{item.cat}</option>
                })
            
          }
        </select>
         <input type="text" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#FE0000] border-[#FE0000] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter card number'/>
         <input type="text" className='lg:w-[70%] md:w-[70%] w-[75%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#FE0000] border-[#FE0000] border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold mb-2' placeholder='Enter card number'/>
         <button className='block mt-[15px] lg:w-[70%] md:w-[70%] w-[75%] h-[55px] bg-[#FE0000] rounded-[4px] text-[#FFFFFF] text-[18px] font-semibold font-sans' onClick={onClose}>Send</button>
         </div>
         </div>
     </div>
    </>
  )
}

export default Enterproduct;
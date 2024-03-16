import React, { useEffect, useState} from 'react'
import { Link , useNavigate} from 'react-router-dom';
import Enterproduct from '../components/Enterproduct';



const AdminHomePg = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  const logout = () =>{
    localStorage.clear();
    navigate("/signin");
  }

  const handleIsOpen = ()=>{
     setIsOpen(true);
  }

const handleCloseIsOpen = () =>{
   setIsOpen(false)
}
  
  return (
    <>
    <h2 className='text-center mt-5 text-5xl font-semibold'>Add New Product</h2>
    <div className='flex justify-evenly mt-10'>
      <button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold' onClick={handleIsOpen}>Snacks</button>
      <button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold' onClick={handleIsOpen}>Sauces and cond</button>
      <button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold' onClick={handleIsOpen}>Ethn food</button>
      <button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold' onClick={handleIsOpen}>Bakery itm</button>
      <button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold' onClick={handleIsOpen}>Soft drk</button>
      <button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold' onClick={handleIsOpen}>Alcoholic bev</button>
      <button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold' onClick={handleIsOpen}>Desert and swts</button>
    </div>
    <Link to="/signin" onClick={logout}>Signout</Link>
    {isOpen && <div className="fixed inset-0 bg-gray-800 opacity-50"></div>}
    <Enterproduct isOpen={isOpen} setIsOpen={setIsOpen} onClose={handleCloseIsOpen}/>
    </>
  )
}

export default AdminHomePg;
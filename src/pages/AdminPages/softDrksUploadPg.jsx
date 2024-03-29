import React, { useEffect, useState} from 'react'
import { Link , useNavigate} from 'react-router-dom';
import Enterproduct from '../../components/Enterproduct';
import axios from 'axios';


const SoftDrksUploadPg = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [productImage, setproductimage] = useState("");
  const [productName, setproductname] = useState("");
  const [productCategory, setproductcategory] = useState("");
  const [productdescription, setproductdescription] = useState("")
  const [productPrice, setproductprice] = useState("");
    const endpoints="https://juma-backend-delta.vercel.app/addproduct/newsoftdrinksproduct"


  const handleIsOpen = ()=>{
     setIsOpen(true);
  }

const handleCloseIsOpen = async () =>{
  let productCategory = "softDrinks"
  let productObj={productImage,productName,productCategory,productdescription,productPrice}
  console.log(productObj);
   setIsOpen(false);

   try {
    let result = await axios.post(endpoints,productObj);
    if(result){
      console.log(result);
      const messages = result.data.message
      alert(messages);
    }
   } catch (error) {
    
   }
  
}
  
  return (
    <>
    <h2 className='text-center mt-5 text-5xl font-semibold'>Add New Soft Drinks Product</h2>
    <div className='flex justify-evenly mt-10 mb-10'>
      <Link to="/adminhome/snacks"><button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold'>Snacks</button></Link>
      <Link to="/adminhome/saucesAndCondiments"><button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold'>Sauces and cond</button></Link>
      <Link to="/adminhome/ethnicFood"><button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold'>Ethn food</button></Link>
      <Link to="/adminhome/bakeryItems"><button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold'>Bakery itm</button></Link>
      <Link to="/adminhome/softDrinks"><button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold'>Soft drk</button></Link>
      <Link to="/adminhome/alcoholicBeverages"><button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold'>Alcoholic bev</button></Link>
      <Link to="/adminhome/desertAndSweets"><button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold'>Desert and swts</button></Link>
    </div>

    <button className='w-fit h-[50px] p-2 bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold' onClick={handleIsOpen}>Add Product</button>
    <table className='table-auto w-[90%]'>
    <thead>
    <tr>
      <th>S/N</th>
      <th>ProductName</th>
      <th>ProductCategory</th>
      <th>ProductPrice</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead> 
  <tbody className='bg-[black]'>
    
  </tbody>
    </table>
    {isOpen && <div className="fixed inset-0 bg-gray-800 opacity-50"></div>}
    <Enterproduct isOpen={isOpen} setIsOpen={setIsOpen} onClose={handleCloseIsOpen} setproductname={setproductname} setproductimage={setproductimage} setproductcategory={setproductcategory} setproductprice={setproductprice} setproductdescription={setproductdescription}/>
    </>
  )
}

export default SoftDrksUploadPg;
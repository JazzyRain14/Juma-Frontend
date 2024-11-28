import React, { useEffect, useState } from 'react'
import axios from 'axios'
import burger1 from '../../../assets/Images/pexels-horizon-content-3738730.jpg'
import { FaCartShopping, FaHeart, FaNairaSign } from 'react-icons/fa6'
import { projectImport } from '../../ProjectImgImport'
import { Link, json, useNavigate } from 'react-router-dom'
import { LoadingScreen } from './Modals'
const Section5 = () => {
  const productEndpoints = "https://juma-backend-delta.vercel.app/getproduct/getethnicfood"
  const [newProduct, setnewProduct] = useState([])
  const [isTrue, setisTrue] = useState(false);
  const [AllCart, setAllCart] = useState([])
  const endPoints = "https://juma-backend-delta.vercel.app/usercontrol/addtocart"
  const navigate = useNavigate()
  useEffect(() => {
    const shoco = async () => {
      let product = await axios.get(productEndpoints)
      setnewProduct(product.data.ethnicFoodProduct)
    }
    shoco()
  }, []);

  const goToDetails = (index) => {
    let filteredArray = newProduct.filter((item, ind) => index == ind)
    localStorage.setItem('ProductDesc', JSON.stringify(filteredArray))
    let itemCategory = filteredArray[0].productCategory
    let item_id = filteredArray[0]._id
    setisTrue(true)
    setTimeout(() => {
      navigate(`/home/${itemCategory}/${item_id}`, { state: { filteredArray } })
      setisTrue(false)
    }, 1000);
  }

  const AddToCart = async (index) => {
    let filteredArray = newProduct.filter((item, ind) => index == ind)
    if (filteredArray.length > 0) {
      let userId = localStorage.getItem('userId')
      let productName = filteredArray[0].productName
      let productCategory = filteredArray[0].productCategory
      let productPrice = filteredArray[0].productPrice
      let productdescription = filteredArray[0].productdescription
      let productImage = filteredArray[0].productImage
      let productOBJ = {
        productImage,
        productName,
        productCategory,
        productdescription,
        productPrice,
        userId
      };
      console.log(productOBJ)
      try {
        let result = await axios.post(endPoints, productOBJ);
        if (result) {
          console.log(result);
        }
        else {
          console.log(error)
          
        }
      }
      catch (error) {
        console.log(error)
      }
    }
    else {
      console.log('No matching record')
    }
  }
  return (
    <>
      <section className='py-4'>
        <div className='flex items-center justify-between'>
          <h1 className="lg:text-xl sm:text-lg max-sm:text-base font-semibold">Ethnic Food</h1>
          <Link className='text-projectRed-2'>see more...</Link>
        </div>
        <div>
          <div className='grid grid-flow-col gap-4 mt-2 sideBarScroll pb-6'>
            {newProduct.map((card, index) => (
              <div key={index} className='card'>
                <div onClick={() => goToDetails(index)}>
                  <div className=' h-[200px]
                            relative overflow-hidden'>
                    <img src={card.productImage} alt="" className='w-full absolute h-full object-contain' />
                  </div>
                  <div className='cardTitle'>
                    <h1 className='truncate font-semibold'>{card.productName}</h1>
                    <p className='flex items-center font-semibold text-[14px]'>
                      <FaNairaSign className=' text-[14px] text-[#434242]' />
                      {card.productPrice}
                    </p>
                  </div>
                </div>
                <div className='flex text-lg justify-between gap-4 items-center'>
                  <button className='cardButton' onClick={() => AddToCart(index)}>
                    Add to cart
                    <FaCartShopping />
                  </button>
                  <FaHeart className=' text-2xl text-projectBorder mr-4 hover:text-projectRed-2 transition-colors duration-200 ease-in-out cursor-pointer' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {isTrue && (<LoadingScreen />)}
    </>
  )
}

export default Section5
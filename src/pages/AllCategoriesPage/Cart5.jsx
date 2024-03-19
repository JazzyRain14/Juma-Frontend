import React from 'react'
import ComponentBg from '/public/Images/YUMMY.png'
import { FaCartShopping, FaHeart, FaNairaSign } from 'react-icons/fa6'
import {projectImport} from '../../components/ProjectImgImport'
import { Link } from 'react-router-dom'
const Cart5 = () => {
  return (
    <>
      <div className='border relative justify-center items-center h-[300px]'>
        <img
          className='absolute w-full h-full object-cover'
          src={ComponentBg} alt="" />
        <h1
            className=' absolute text-[5rem] flex justify-center items-center 
            text-white w-full h-full text-center font-semibold tracking-widest z-10'>Soft Drinks</h1>
      </div>
      <div className='px-4'>
        <section className='py-4'>
          {projectImport.map((card) => (
            card.Product5.map((allSnacks, index) => (
              <div key={index}>
                <div className='flex items-center justify-between'>
                  <h1 className="text-xl font-semibold">{allSnacks.categoryName}</h1>
                  <Link className='text-projectRed-2' to={allSnacks.categoryLink}>see more...</Link>
                </div>
                <div className='grid grid-flow-col gap-4 mt-2 overflow-x-auto'>
                  {allSnacks.categories.map((cardInfo, index) => (
                    <div key={index} className='card'>
                      <div className='border border-cyan-700 h-[200px]
                                    relative overflow-hidden'>
                        <img src={cardInfo.productImage} alt="" className='w-full absolute h-full object-cover' />
                      </div>
                      <div className='cardTitle'>
                        <h1 className='truncate font-semibold'>{cardInfo.productName}</h1>
                        <p className='flex items-center font-semibold text-[14px]'>
                          <FaNairaSign className=' text-[14px] text-[#434242]' />
                          {cardInfo.productPrice}
                        </p>
                      </div>
                      <div className='flex text-lg justify-between gap-4 items-center'>
                        <button className='cardButton'>
                          Add to cart
                          <FaCartShopping />
                        </button>
                        <FaHeart className=' text-2xl text-projectBorder mr-4 hover:text-projectRed-2 transition-colors duration-200 ease-in-out cursor-pointer' />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ))}
        </section>
      </div>
    </>
  )
}

export default Cart5
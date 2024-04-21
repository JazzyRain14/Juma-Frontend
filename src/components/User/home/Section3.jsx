import React, { useEffect, useState } from 'react'
import axios from 'axios'
import burger1 from '../../../assets/Images/pexels-horizon-content-3738730.jpg'
import { FaCartShopping, FaHeart, FaNairaSign } from 'react-icons/fa6'
import { projectImport } from '../../ProjectImgImport'
import { Link } from 'react-router-dom'
const Section3 = () => {
    const productEndpoints = "https://juma-backend-delta.vercel.app/getproduct/getsnacks"
    const [newProduct, setnewProduct] = useState([])
    useEffect(() => {
        const shoco = async () => {
            let product = await axios.get(productEndpoints)
            setnewProduct(product.data.snacksProduct)
        }
        shoco()
    }, [])

    return (
        <section className='py-4'>
            <div className='flex items-center justify-between'>
                <h1 className="lg:text-xl sm:text-lg max-sm:text-base font-semibold">Snacks</h1>
                <Link className='text-projectRed-2'>see more...</Link>
            </div>
            <div>
                <div className='grid grid-flow-col gap-4 mt-2 sideBarScroll pb-6'>
                    {newProduct.map((card, index) => (
                        <div key={index} className='card'>
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
        </section>
    )
}

export default Section3
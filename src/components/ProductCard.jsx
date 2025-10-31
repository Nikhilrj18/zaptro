import React from 'react'
import { IoCafeOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductCard = ({Product}) => {
 
  const navigate = useNavigate()
  const {addToCart} = useCart()

  return (
    <div className='border relative border-gray-100 rounded-2xl  hover:scale-105 cursor-pointer hover:shadow-2xl transition-all p-2 h-max'>
     <img src={Product.images} alt='' className='bg-gray-100 aspect-square' onClick={()=>navigate(`/products/${Product.id}`)} />
       <h1 className='line-clamp-2 p-1 font-semibold'>{Product.title}</h1>
       <p className='my-1 text-lg text-gray-800 font-bold'>₹{Product.price}</p>
       <button onClick={()=>addToCart(Product)} className='bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold' > <IoCafeOutline className=' w-6 h-6' /> Add to Cart</button>
        </div>
  )
}

export default ProductCard
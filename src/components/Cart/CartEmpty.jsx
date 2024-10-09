import React from 'react'
import { useCart } from './CartContext'
import { UseProduct } from '../Product/ProductContext'
import ProductRecommendation from '../Product/ProductRecommendation'

const CartEmpty = () => {
  const{random}=UseProduct()
  return (
    <div>
      <div class="m-32">
        <h1 className="flex items-center justify-center  text-2xl font-bold mb-10">Cart</h1>
        <p class='flex justify-center items-center mb-8 mt-5'>Your cart is Empty</p>
        <a href="/sale" class='flex justify-center items-center'>
        <button className="px-5 py-2 bg-orange-800 text-stone-200 rounded flex items-center justify-center font-semibold">
         START SHOPPING
        </button>
        </a>
      </div>
      <h1 className="flex items-center justify-center mt-28 text-3xl font-bold mb-10">Add-ons</h1>
      <ProductRecommendation item={random.slice(0,8)}/>
      <div>
      </div>
    </div>
  )
}

export default CartEmpty

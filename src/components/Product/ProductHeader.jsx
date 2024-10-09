import React from 'react'
import products from '../cloth_data.json'; // Or fetch from API 
import { useParams } from 'react-router-dom';

const ProductHeader = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id)); // Assuming id is a number

  return (
<div class=" laptop:w-full s:w-full  l:w-full m:w-full tablet:w-full">
<p class="laptop:text-3xl  font-semibold mb-2 text-amber-700 mt-3  l:text-2xl flex tablet:justify-center tablet:text-2xl s:justify-center laptop:justify-between">
  {product.name}
</p>
  <div class="tablet:w-full laptop:w-[410px] flex tablet:justify-center s:justify-center items-center laptop:justify-start ">
    <p class="s:text-xxs font-semibold pt-2 pr-1">₹ 5,599.00 INR</p>
    <p class="s:text-xl font-semibold">{product.prices.displayprice}</p>
  </div>
  <p class="w-full s:text-xxs font-semibold  mt-2  flex tablet:justify-center s:justify-center laptop:justify-start">SAVE ₹ 2,399.00 INR</p>
  <p class="border-b-2 border-slate-500 my-2 s:w-full m:w-full l:w-full tablet:w-full  laptop-l:w-[550px]  laptop:w-[410px]"></p>
</div>
  )
}

export default ProductHeader

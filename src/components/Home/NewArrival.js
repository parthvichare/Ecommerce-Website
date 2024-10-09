import React from 'react'
import ProductList from '../Product/ProductList'
import items from '../cloth_data.json'

const NewArrival = () => {
  return (
    <div>
      <div className='border-2 border-stone-900'></div>
      <h1 className='flex justify-center items-center mb-6 md:text-5xl'>New Arrival</h1>

      {/* Dsiplay Images Items */}
        {/* ProductList */}
        <ProductList items={items}/>

        
      <div class='flex justify-center items-center'>
        {/* To know More Button */}
        <button class=''>
          <span class='bg-orange-900 text-white p-2 rounded-lg'>View More</span>
        </button>
      </div>
      <div className='border-2 border-stone-900 mt-5'></div>
    </div>
  )
}

export default NewArrival

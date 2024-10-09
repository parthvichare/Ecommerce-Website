import React from 'react'

const ProductSizes = () => {
  return (
    <div class="laptop:w-[200px] tablet:w-full  l:w-full m:w-full">
        <div class="mb-2  laptop:w-[410px] laptop-l:w-[550px] s:w-full l:w-full m:w-full tablet:w-full flex tablet:justify-between s:justify-between l:justify-between m:justify-between laptop:justify-between">
            <span class="text-xxs">Size:S</span>
             <span class="text-xxs">Size Chart</span>
        </div>

         {/*  Sizes Button */}
        <div class='mb-2 laptop:w-[400px] tablet:w-full s:w-full s:h-[100px] m:w-full l:w-full  flex tablet:justify-center items-center s:justify-center l:justify-center'>
                <button class='bg-orange-600 s:px-5 py-3 rounded-lg border border-orange-900 mr-1 '>
                <label class='font-color'>S</label>
                </button>
                <button class='bg-orange-600 s:px-5 py-3 rounded-lg border border-orange-900 mr-1 m:mr-2 l:mx-1'>
                <label class='font-color'>M</label>
                </button>
                <button class='bg-orange-600 s:px-5 py-3 rounded-lg border border-orange-900 mr-1 m:mr-2 l:mx-1'>
                <label class='font-color'>L</label>
                </button>
                <button class='bg-orange-600 s:px-4 py-3 rounded-lg border border-orange-900 mr-1 l:mx-1'>
                <label class='font-color'>XL</label>
                </button>
                <button class='bg-orange-600 s:px-3 py-3 rounded-lg border border-orange-900'>
                <label class='font-color'>XXL</label>
                </button>
        </div>
    </div>
  )
}

export default ProductSizes

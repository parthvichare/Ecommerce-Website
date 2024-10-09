import React from 'react'
import { useCart } from './CartContext'
import { motion } from 'framer-motion';

const CartSummary = () => {
   const{ calculateTotalPrice,cartItems }=useCart()

  return (
     <div>
     <form class=' bg-orange-200  rounded-lg  m:px-5 s:ml-3 m:mr-6 l:ml-6  tablet:pt-2 tablet:w-[420px] s:w-[300px] m:w-[350px] l:w-[380px] tablet:ml-48 laptop:px-2 laptop:-mx-10  laptop:w-[290px] laptop-l:w-[360px] laptop-l:px-5 laptop-l:ml-44'>
      <div>
      <p class='laptop:ml-4'>
             <span class='text-xxs font-semi-bold s:pr-32 s:pl-5  m:pr-18 m:-ml-4  l:pr-44 laptop:-ml-8 laptop:-mr-10 laptop-l:pr-60'>Subtotal</span>
               <span>
                    <b class='font-thin text-xxs'>₹ {calculateTotalPrice(cartItems).toFixed(2)}</b>
             </span>
       </p>
       <p class=''>
             <span class='text-xxs font-semi-bold s:pr-14 s:pl-4 l:pr-20 m:pl-1 tablet:mr-10 laptop:-mr-9 laptop-l:pr-32'>Estimated Shopping</span>
             <span>
               <b class='font-thin text-xxs '>Calculated at Checkout</b>
             </span>
       </p>
        <p class=''>
             <span class='text-xxs font-semi-bold s:pr-20 s:pl-4 l:pr-24 laptop:pr-32 tablet:pr-36 m:pl-1 laptop:-mr-16 laptop-l:pr-44'>Estimated Taxes</span>
             <span>
               <b class='font-thin text-xxs'>Calculated at Checkout</b>
             </span>
       </p>
       <p class=''>
             <span class='text-xxs font-bold s:pr-28 s:pl-4 l:pr-32 tablet:pr-40 m:pl-1 m:pr-18 laptop:-mr-16 laptop-l:pr-52'>For Charity</span>
             <span>
               <b class='font-bold text-xxs'>₹ 10 INR (Included)</b>
             </span>
        </p>
        <p class=''>
             <span class='text-xxs font-bold  s:pr-40 s:pl-4 l:pr-32 m:pl-10 m:pr-28 tablet:pl-5 tablet:pr-44 laptop:-mr-10 laptop-l:pr-52'>Total</span>
                  <span>
                  <b class='font-bold text-xxs'>₹ {calculateTotalPrice(cartItems).toFixed(2)}</b>
                 </span> 
        </p>
         <motion.button 
         class='bg-orange-600 px-6 py-1 s:ml-14 m:ml-18 l:ml-20  tablet:ml-20  mb-7 rounded-lg s:mt-8 l:mr-20'
         transition={{ duration: 2 }}
         whileHover={{ scale: 1.2 }} // Zoom in effect on hover
         >
           <span class='text-neutral-50 text-sm'>Proceed to Checkout</span>
         </motion.button>
         {/*<button class="bg-orange-600  px-2 py-1 rounded-lg s:px-20 s:ml-8 mt-5 l:px-20 ml-10">
           <span class='text-neutral-50 text-sm '>View offers</span>
       </button>*/}
      </div> 
         
     </form>
   </div> 

  )
}

export default CartSummary

import React from 'react';
import { useCart } from './CartContext';
import CartSummary from './CartSummary';
import CartItem from './CartItem';
import CartEmpty from './CartEmpty';
import ProductList from '../Product/ProductList';
import items from '../cloth_data.json'
import { UseProduct } from '../Product/ProductContext';
import ProductRecommendation from '../Product/ProductRecommendation';
import { motion } from 'framer-motion';

// initial={{ opacity: 0, x: -50 }}
// animate={{ opacity: 1, x: 0 }}
// transition={{ duration: 2 }}
// whileHover={{ scale: 1.05 }} // Zoom in effect on hover

const Cart = () => {
    const {cartItems} = useCart();
    const{random}=UseProduct()

  return (
    <div class="laptop-l:px-56  laptop:px-24">
       {cartItems.length===0?(
        <div class="">
          <CartEmpty/>
        </div>
       ):(
        <div>
        <h1 className="flex items-center justify-center mt-10 text-4xl font-bold mb-36">Cart</h1>
        <div class='laptop-l:flex laptop:flex mb-28'>
        <div class="tablet:py-4">
        <CartItem/>
        </div>
        <motion.div 
         class="tablet:py-4 s:py-6 l:py-10 mb-20"
         initial={{ opacity: 0, x: 100 }}   // Positive x for right side
         animate={{ opacity: 1, x: 0 }}    // Move it to original position (x: 0)
         transition={{ duration: 1 }}
        >
         <CartSummary/>
       </motion.div>

        </div>
        <h1 className="flex items-center justify-center mt-28 text-3xl font-bold mb-10">Add-ons</h1>
        <ProductRecommendation item={random.slice(0,8)}/>
        </div>
       )}
    </div>
  )
}

export default Cart



import React from "react";
import { useCart } from "./CartContext";
import { motion } from 'framer-motion';

const MobileItem = () => {
  const { cartItems, removeItemFromCart,incrementItemQuantity,decrementItemQuantity,calculatePriceByQuantity} = useCart();


  const Incrementquantity=(item)=>{
    incrementItemQuantity(item.id)
  }
  
  const Decrementquantity=(item)=>{
    decrementItemQuantity(item.id)
  }

  return (
    <div 
    className="flex-row mr-10 laptop:hidden tablet:hidden l:mx-16 s:mx-2 m:mx-4">
      {cartItems.map((item) => (
        <motion.div 
        key={item.id} 
        className="flex mt-8"
        initial={{opacity:0,x:-50}}
        animate={{opacity:1,x:0}}
        transition={{duration:2}}
        whileHover={{scale:1.05}}
        >
          <a>
            <img
              src={item.image.image_1}
              className="rounded-lg h-[109px] w-[82px] mt-2"
              alt={item.name}
            />
          </a>
          <div>
            <a class="w-full"> 
              <span className="s:text-xxs text-xs mx-5 font-bold">{item.name}</span>
            </a>
            <div className="ml-3">
              <span className="text-sm">S</span>
            </div>
            <div className="ml-3">
              {/* <span className="text-xs font-bold">{item.prices.displayprice}</span> */}
              <span className="text-xs font-bold">₹{calculatePriceByQuantity(item).toFixed(2)}</span>
            </div>
            <div className="bg-white ml-3 mb-1">
              <button onClick={()=>Incrementquantity(item)} className="focus:outline-none bg-white">
                <span className="text-gray-700">+</span>
              </button>
              <span className="mx-8 text-gray-700">{item.quantity}</span>
              <button onClick={()=>Decrementquantity(item)} className="focus:outline-none">
                <span className="text-gray-700">-</span>
              </button>
            </div>
            <button
              type="button"
              onClick={() => removeItemFromCart(item)}  // Pass the item's ID
              className="flex justify-center items-center s:mx-10"
            >
              <span className="text-xx">Remove</span>
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MobileItem;
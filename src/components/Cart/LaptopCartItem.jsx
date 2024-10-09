/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useCart } from './CartContext'
import { motion } from 'framer-motion';

const LaptopCartItem = () => {
  const { cartItems, removeItemFromCart,incrementItemQuantity,decrementItemQuantity,calculatePriceByQuantity} = useCart();
    console.log(cartItems)
 
  const IncrementItemQuantity=(item)=>{
    incrementItemQuantity(item.id)
  }

  const DecrementItemQuantity=(item)=>{
    decrementItemQuantity(item.id)
  }

  return (
<div>
  {cartItems.map((item) => (
    <motion.table
      key={item.id}
      className="tablet:ml-5 hidden tablet:block laptop:block"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      whileHover={{ scale: 1.05 }} // Zoom in effect on hover
    >
      <tbody>
        <tr className="laptop:mr-36">
          <td className="pr-6 pt-6">
            <div className="flex">
              <a>
                <img
                  src={item.image.image_1}
                  className="rounded-lg h-[109px] w-[89px] mt-2"
                  alt="Tulip Anarkali Suit Set With Pent"
                />
              </a>
              <div className="ml-1 w-36">
                <a>
                  <span className="text-sm font-bold">{item.name}</span>
                </a>
                <div className="mt-2">
                  <span className="text-sm mx-2">S</span>
                </div>
                <div className="mt-2">
                  <span className="text-xs font-bold mx-2">
                    ₹{calculatePriceByQuantity(item).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </td>

          {/* Quantity */}
          <td className="px-8 text-center">
            <div className="bg-white border-2 px-1 flex items-center justify-center">
              <button
                onClick={() => DecrementItemQuantity(item)}
                className="focus:outline-none"
              >
                <span className="text-gray-700">-</span>
              </button>
              <span className="mx-6 text-gray-700">{item.quantity}</span>
              <button
                onClick={() => IncrementItemQuantity(item)}
                className="focus:outline-none bg-white"
              >
                <span className="text-gray-700">+</span>
              </button>
            </div>
            <button
              onClick={() => removeItemFromCart(item)}
              className="flex justify-center items-center mt-2 ml-5"
            >
              <span className="text-xs">Remove</span>
            </button>
          </td>
          {/* Total */}
          <td className="laptop:pl-14 tablet:pl-28 min-w-[110px]">
            <div className="flex justify-center items-center">
              <p className="text-sm font-bold">
                ₹ {calculatePriceByQuantity(item)} INR
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </motion.table>
  ))}
</div>

  );
}

export default LaptopCartItem
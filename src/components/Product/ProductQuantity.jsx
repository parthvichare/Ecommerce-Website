import React from "react";
import { useCart } from "../Cart/CartContext";


const ProductQuantity = () => {
  const { ProductItems,setProductItems,incrementQuantity } = useCart();

  const increaseQuantity = (product) => {
    incrementQuantity(product.id)
  };

  // const decreaseQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity(prevQuantity => prevQuantity - 1);
  //   }
  // };

  return (
    <div className="laptop:w-[450px] tablet:w-[670px] l:w-[350px] s:w-[280px]">
      <div className="mb-1w l:w-[320px] m:w-[330px] tablet:w-[680px] laptop:w-[400px] mt-3 flex tablet:justify-center laptop-l:ml-4 laptop:ml-6 l:justify-center m:justify-center s:justify-center">
        <span className="text-xx font-semibold s:text-xl m:text-sm tablet:text-lg laptop-l:text-sm">
          Quantity:
        </span>
      </div>
        <div className="flex tablet-[300px] m:w-[320px] l:w-[340px] tablet:w-[680px] laptop:w-[400px] py-2 mb-2 m:justify-center l:justify-center tablet:justify-center s:justify-center laptop-l:mx-4 laptop:ml-6">
              <div className="bg-white flex tablet:flex items-center justify-center m:py-1 px-2">
                <div className="border-2 px-2">
                  <button className="focus:outline-none">
                    <span className="text-gray-700 font-bold text-2xl">-</span>
                  </button>
                  <span className="mx-6 px-2 text-gray-700 font-bold text-2xl">{ProductItems.quantity}</span>
                  <button className="focus:outline-none" onClick={()=>increaseQuantity()}>
                    <span className="text-gray-700 font-bold text-2xl">+</span>
                  </button>
                </div>
              </div>
          </div>
      })}
      {/* Quantity Buttons */}
    </div>
  );
};

export default ProductQuantity;

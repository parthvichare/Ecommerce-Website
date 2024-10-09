import React, { useContext, useEffect, useState } from "react";
import { useCart } from "./CartContext";

const CartIcon = () => {
  const { totalcart, UpdateCartTotal,cartItems } = useCart();

  useEffect(()=>{
    UpdateCartTotal(cartItems)
  },[cartItems])

  return (
    <div>
      <svg
        focusable="false"
        width="24"
        height="24"
        className="text-yellow-800"
        viewBox="0 0 24 24"
      >
        <path
          d="M3 7H17L18 18H2L3 7Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        ></path>
        <path
          d="M13 4V4C13 2.34315 11.6569 1 10 1V1C8.34315 1 7 2.34315 7 4V4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        ></path>

        {/* Circle for count */}
        <circle cx="18" cy="6" r="6" fill="black" />

        {/* Text inside the circle */}
        <text
          x="18"
          y="9"
          textAnchor="middle"
          fontSize="8"
          fill="white"
          fontWeight="bold"
        >
          {totalcart}
        </text>
      </svg>
    </div>
  );
};

export default CartIcon;

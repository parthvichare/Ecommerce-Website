/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import MobileCartItem from "./MobileCartItem";
import LaptopCartItem from "./LaptopCartItem";

const CartItem = () => {
  return (
<div>
  <div className="max-w-[600px] mr-16 tablet:ml-5 laptop:mr-24 laptop-l:mr-10 hidden tablet:block laptop:block">
    <table className="w-full mb-2">
      <thead>
        <tr className="text-left ">
          <th className="text-1xl font-normal laptop:pr-52 tablet:pr-32 ">Product</th>
          <th className="text-1xl font-normal laptop:px-10 tablet:px-16">Quantity</th>
          <th className="text-1xl font-normal pl-24">Total</th>
        </tr>
      </thead>
    </table>
    <div className="border-b-2 w-full border-neutral-950"></div>
  </div>
      <LaptopCartItem/>
      < MobileCartItem/>
    </div>
  );
};

export default CartItem;

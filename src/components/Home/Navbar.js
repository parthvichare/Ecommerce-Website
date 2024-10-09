import React,{useRef,useEffect} from 'react';

import CartIcon from '../Cart/CartIcon';
import Searchbar from '../Search/Searchbar';
import SearchbarToggle from '../Search/SearchbarToggle';
import MenuToggle from '../MenuToggle/MenuToggle';
import NavbarFilterSort from '../Filters/NavbarFilterSort';


const Navbar = () => {
  return (
    <>
      <div className="h-5 bg-orange-800"></div>
      <div className=" bg-white sticky top-0 z-10">
        <div className="max-h-[10vh] min-h-[40px] laptop-l:flex s:flex justify-center items-center laptop-l:px-20 tablet:px-5 mt-4 mb-5">
          {/* Toggle button */}
          <div className="s:flex justify-start items-center laptop-l:w-[400px] s:w-full">
              <MenuToggle/>
              <SearchbarToggle/>
          </div>

          {/* Logo */}
          <div className="mt-3 laptop-l:w-48 s:w-64 justify-center">
            <a href="/">
            <img
              className="h-16  text-bold mb-3"
              src="//www.bullionknot.com/cdn/shop/files/color_1_4x-8_260x.png?v=1709625374"
              alt="Logo"
            />
            </a>
          </div>

          <ul className="hidden laptop-l:flex w-screen space-x-7  mb-1 text-purple-700 font-semibold laptop-l:items-center justify-center">
            <li className="cursor-pointer hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300">
              <a href="/new_arrival" className="text-lg laptop-l:pr-2">
                NEW ARRIVAL
              </a>
            </li>
            <li className="cursor-pointer hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300">
              <a href="/sale" className=''>
                SALE
              </a>
            </li>
            <li className="cursor-pointer hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300">
              <a href="/dresses">
                DRESSES
              </a>
            </li>
            <li className="cursor-pointer hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300">
              <a href="/product/name">
                Kids Wear
              </a>
            </li>
            <li className="cursor-pointer hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300">
              <a href="/tutorial/cplusplus/">
                AboutUs
              </a>
            </li>
            <li className="cursor-pointer hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300">
              <a href="/HappyCustomer">
                Happy Customer
              </a>
            </li>
          </ul>

          {/* SVG Icons */}
          <div className="space-x-3 relative s:flex justify-end items-center laptop-l:w-[420px] s:w-full">
            <div class='flex'>
              <a href="/cart">
                <CartIcon/>
              </a>
              <a href='/wishlist' class='px-3'>
               <svg 
               xmlns="http://www.w3.org/2000/svg" 
               width="24" height="24" 
               viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              </a>
                <Searchbar/>
            </div>            
          </div>
        </div>
        <hr className="border-gray-300 dark:border-gray-700 shadow-md"/>
        <NavbarFilterSort/>
      </div>
    </>
  );
};

export default Navbar;

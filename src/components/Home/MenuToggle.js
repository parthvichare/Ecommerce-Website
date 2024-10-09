import React from 'react';

const MenuToggle = () => {
  return (
    // Displaying the Menus in the Navigation Bar
    <div className="flex flex-col md:hidden ">
      <ul className="flex flex-col space-y-2 text-purple-700 font-semibold items-center">
        <li>
          <a href="/tutorial/html-home/" className="text">NEW ARRIVAL</a>
        </li>
        <li>
          <a href="/tutorial/css-home/" className="text">SALE</a>
        </li>
        <li>
          <a href="/tutorial/js/" className="text">DRESSES</a>
        </li>
        <li>
          <a href="/tutorial/c/" className="text">Kids Wear</a>
        </li>
        <li>
          <a href="/tutorial/cplusplus/" className="text">About Us</a>
        </li>
      </ul>
    </div>
  );
};

export default MenuToggle;

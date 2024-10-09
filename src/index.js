import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure this path is correct
import './index.css';
import { SearchProvider } from './components/Search/SearchContext';
import { FilterProvider } from './components/Filters/FilterContext';
import { MenuProvider } from './components/MenuToggle/MenuContext';
import { ProductProvider } from './components/Product/ProductContext';
import { WishlistProvider } from './components/WishList/WishlistContext';

// import { CartProvider } from './components/CartContext';
import { CartProvider } from './components/Cart/CartContext';
import Sidebar from './components/Search/Sidebar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WishlistProvider>
    <ProductProvider>
    <SearchProvider>
    <MenuProvider>
    <CartProvider>
    <FilterProvider>
      <App />
      <Sidebar/>
    </FilterProvider>
    </CartProvider>
    </MenuProvider>
    </SearchProvider>
    </ProductProvider>
    </WishlistProvider>
  </React.StrictMode>
);

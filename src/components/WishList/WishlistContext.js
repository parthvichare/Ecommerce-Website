import React, { createContext, useState, useContext } from "react";


// Create a Context for the wishlist
export const WishlistContext = createContext();

export const useWishList = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isWishOpen, setIsWishOpen] = useState(false);

  const addToWishlist = (item) => {
    setWishlistItems((prevItems) => [...prevItems, item]);
  };

  const ToggleWishList = () => {
    setIsWishOpen((prevIsOpen) => !prevIsOpen); // Toggle the sidebar open/close
  };


  // const [isFavorited, setIsFavorited] = useState(() => {
  //   const savedFavorited = localStorage.getItem(`isFavorited-${product.id}`);
  //   return savedFavorited ? JSON.parse(savedFavorited) : false; // Default to false if not found
  // });

  return (
    // eslint-disable-next-line no-dupe-keys
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, isWishOpen,setIsWishOpen, ToggleWishList }}>
      {children}
    </WishlistContext.Provider>
  );
};

import React from 'react';
import SideBar from "./SideBarWishlist";

const AddToWishlist = ({ isOpen, addToWish,toggle }) => {
  // Get the last product in the wish array
  const lastProduct = addToWish.length > 0 ? addToWish[addToWish.length - 1] : null;

  const preventLink = (e) => {
    e.preventDefault()
  };


  return (
    <div>
      <div
        className={`fixed bottom-4 left-28 transform  border-2 border-black ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        } bg-white text-black w-[330px] h-[130px] z-50 rounded-lg transition-all duration-300 ease-in-out`}
        onClick={preventLink}
      >
        <div className="bg-orange-600 rounded-md relative w-[330px]">
          <h1 className="border-b-2 border-black pl-2">Product Added To Wishlist</h1>
        </div>
        <div className="p-2">
          {/* Display the name of the last product */}
          {lastProduct && (
            <ul className="flex">
              <img 
                src={lastProduct.image.image_1} 
                className="h-[82px] w-[60px] object-cover rounded mr-2" 
                alt={lastProduct.name}
              />
              {/* Non-clickable product name */}
              <p key={lastProduct.id} className="">{lastProduct.name}</p>
              <button class="text-xs font-bold mb-0 text-orange-500" onClick={toggle}>
                  <p>ViewWishList</p>
              </button>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddToWishlist;

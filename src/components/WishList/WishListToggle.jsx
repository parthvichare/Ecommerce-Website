import React, { useState, useEffect } from "react";
import { useWishList } from "./WishlistContext";
import SideBar from "./SideBarWishlist";
import AddToWishlist from "./AddToWishlist";
import RemovedProduct from "./RemovedProduct";

const WishListToggle = ({product,addToWish,setAddToWish}) => {
  const { isWishOpen, ToggleWishList, setIsWishOpen } = useWishList();

  // Initialize isFavorited state from local storage
  const [isFavorited, setIsFavorited] = useState(() => {
    const savedFavorited = localStorage.getItem(`isFavorited-${product.id}`);
    return savedFavorited ? JSON.parse(savedFavorited) : false; // Default to false if not found
  });

  console.log()


  const[showAddedModal,setShowAddedModal]=useState(false);
  const[showRemovalModal,setShowRemovalModal]=useState(false)

  const handleToggleClick = (e) => {
    e.preventDefault();
    
    // Toggle favorite state
    const newFavoritedState = !isFavorited;
    setIsFavorited(newFavoritedState);
    
    // Update local storage with new favorite state
    localStorage.setItem(`isFavorited-${product.id}`, JSON.stringify(newFavoritedState));

    // Check if the product is already in the wishlist
    if (!addToWish.some((wishItem) => wishItem.id === product.id)) {
      // Add the product to the wishlist
      setAddToWish([...addToWish, product]);
      setShowAddedModal(true)
      setShowRemovalModal(false)
    } else {
      // Remove the product from the wishlist
      setAddToWish(addToWish.filter((wishItem) => wishItem.id !== product.id));
      setShowAddedModal(false)
      setShowRemovalModal(true)
    }
  };

  const RemovalClose=(e)=>{
    e.preventDefault()

    if(showRemovalModal){
      setShowRemovalModal(false)
    }
  }





  // const handleMouseEnter=(id)=>{
  //   if(!addToWish.included(id)){
  //     setAddToWish([...addToWish,id])
  //   }
  // }


  useEffect(() => {
    const handleBodyOverflow = () => {
      if (isWishOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isWishOpen]);

  useEffect(() => {
    let timer;
    if (showAddedModal) {
      timer = setTimeout(() => {
        setShowAddedModal(false);
      }, 3000); // 3 seconds
    }
    return () => clearTimeout(timer); // Clean up the timer if component unmounts
  }, [showAddedModal]);

  useEffect(()=>{
    let timer;
    if(showRemovalModal){
      timer = setTimeout(() => {
        setShowRemovalModal(false);
      }, 3000); // 3 seconds
    }
    return ()=> clearTimeout(timer)
  },[showRemovalModal])
  
  const ToggleList=()=>{
    setIsWishOpen(!isWishOpen)
  }

  return (
    <div>
      {/* Toggle Button for Wishlist */}
      <button
              className="bg-gray-50 hover:bg-slate-500 hover:bg-opacity-50 hover:border-none bg-opacity-50  rounded-full w-10 h-10 flex justify-center items-center absolute top-2 right-1 tablet:w-11 tablet:h-11"
              onClick={handleToggleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="100"
                height="100"
                className="h-8"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill={isFavorited ? "red" : "none"}
                  stroke="darkred"
                  stroke-width="2"
                />
              </svg>
      </button>

      {/* All SideBars */}
      <SideBar AddTowish={addToWish} isOpen={isWishOpen} toggleWishList={ToggleWishList} />
      <AddToWishlist isOpen={showAddedModal} addToWish={addToWish} toggle={ToggleList}/>
      <RemovedProduct isOpen={showRemovalModal} toggleWishList={RemovalClose} />
      

      <div
  className={`fixed top-0 left-0 w-screen h-full z-20 bg-stone-100 duration-300 ${
    isWishOpen ? "bg-opacity-10" : "opacity-0 pointer-events-none"
  }`}
  onClick={handleToggleClick}
></div>
    </div>
  );
};

export default WishListToggle;
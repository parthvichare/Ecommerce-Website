import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../cloth_data.json'; // Or fetch from API
import { useCart } from '../Cart/CartContext';
import ProductImages from './ProductImages';
import ProductHeader from './ProductHeader';
import ProductQuantity from './ProductQuantity';
import ProductSizes from './ProductSizes';
import ProductRecommendation from './ProductRecommendation';
import { UseProduct } from './ProductContext';
import items from '../cloth_data.json'

const ProductDetail = () => {
  //Passing functionality from the Contexts
  const { addItemToCart} = useCart(); // Destructure addItemToCart from useCart hook
  const { id } = useParams();
  const productRef = useRef(null);
  const [recentlyView, setRecentlyView] = useState(()=>{
    const storedViewItem=localStorage.getItem('recentlyView')
    return storedViewItem?JSON.parse(storedViewItem):[]
  });
  const[visibleItem,setVisibleItem]=useState(recentlyView)
  const[filteredItem,setfilteredItem]=useState([])

  const idToFilter=parseInt(id,10)

    //Filtered the current Id-product from the product List
  useEffect(()=>{
      const filteritem=items.filter(item=>item.id!==idToFilter)
      setfilteredItem(filteritem)
      console.log("filterItem",filteritem)
  },[id])

  const addRecentlyViewedItem = (item) => {
    setRecentlyView((prevItems) => {
      const existingItem = prevItems.find((recentlyViewed) => recentlyViewed.id === item.id);
  
      // If the item already exists, don't add it again
      if (existingItem) {
        return prevItems;
      } else {
        // Add the new item to the recently viewed list
        const updatedItems = [...prevItems, { ...item}];
        
        // Store the updated list in localStorage
        localStorage.setItem('recentlyView', JSON.stringify(updatedItems));
        
        return updatedItems;
      }
    });
  };

    //Filtering the Id of current Page
  useEffect(() => {
      // Find the product based on the current id
      const item = items.find(item => item.id === idToFilter);
  
      // If item is found, add it to recently viewed
      if (item) {
        addRecentlyViewedItem(item);
      }
  
  }, [id]); // Add `items` to dependencies
  

  //Filtering the Current Page-id temporary
  useEffect(()=>{
      const filtered=recentlyView.filter(item=>item.id!==idToFilter)
      setVisibleItem(filtered)
  },[id])
  
  
  //Scroll addEventListener
  useEffect(() => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
    window.scrollTo(0, 0);
  }, [id]);

   //For example how useEffect help in addEventListener 
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY === 0) {
  //       console.log("Hello");
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   // Unmounting the EventListener to avoid memory leaks and maintain performance
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [id]);

  const product = products.find(p => p.id === idToFilter); // Assuming id is a number

  //Adding Item to Cart
  const handleAddToCart = () => {
    if (product) {
      addItemToCart({ ...product }); // Add product to cart with initial quantity 1
    } else {
      console.error('Product not found');
    }
  };

  //Shuffling Random Arrays
  const shuffledArray=(array)=>{
      let shuffled=[...array]
      for(let i=shuffled.length-1; i>0; i--){
        const j=Math.floor(Math.random()*(i+1));
        [shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];
      }
      return shuffled;
  }
  
  const getRandomItems=(items)=>{
      return shuffledArray(items)
  }
  
  const productItem= filteredItem.filter(item=>item.id!==visibleItem.id)
  const random=getRandomItems(productItem)


  return (
    <div ref={productRef} className="min-h-screen mt-5 laptop:w-full laptop-l:w-full laptop:px-16 laptop-l:justify-center laptop:justify-center tablet:justify-center xl:pl-32">
      <section className="laptop:flex">
        {/* All Thumbnail Image */}
        <ProductImages />

        {/* Details section */}
        <div className="laptop-l:mt-5 s:px-5 s:w-full m:w-full l:w-full tablet:w-full tablet:px-6">
          <ProductHeader />

          {/* Size section */}
          <ProductSizes />

          {/* Add to wishlist */}
          <div className='flex tablet:w-full l:w-full laptop:w-[450px] tablet:flex justify-center mb-7 cursor-pointer laptop-l:mx-4'>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16 fa-1x" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" color="#9E2F21">
              <path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
            </svg>
            <p className='text-sm ml-2'>Add to wishlist</p>
          </div>

          {/* Add to Cart */}
          <div className='flex m:w-full tablet:w-full l:w-full s:justify-center cursor-pointer mb-7 laptop:w-full laptop:justify-start'>
            <a href="/cart">
              <button className="bg-orange-600 hover:bg-orange-800 s:px-16 py-2 m:px-24 l:px-28 tablet:px-56 rounded-lg laptop:px-44" onClick={() => handleAddToCart()}>
                <span className='text-lg text-stone-200'>
                  Add to Cart
                </span>
              </button>
            </a>
          </div>

          {/* Product Description */}
          <div>
            <h3 className="text-sm font-semibold mb-5 s:flex s:justify-center l:justify-center tablet:justify-center laptop:justify-start items-center ">Product Description</h3>
            <div className="bg-white rounded-lg grid s:w-full m:w-full tablet:w-full l:w-full l:justify-center m:justify-center s:justify-center tablet:justify-center laptop:justify-start ">
              <p className='border-spacing-x-11  text-xx tablet:text-sm'>Get ready to be the embodiment of grace, beauty, and tradition on your special day.</p>
              <p className='text-smx  text-xx tablet:text-sm'>Cherish the memories, and let your attire reflect the magic of Indian weddings.</p>
              <p className='text-smx  mb-3 text-xx tablet:text-sm'>
                Choose this <strong className='font-bold'>Dark Mauve Pure Georgette Anarkali Dress</strong> with Gold Zari and Mirror
              </p>
              <span className='text-sm font-bold tablet:text-sm'>#IndianBride #CulturalAttire #IndianWedding</span>
              <div className="m:w-full tablet:w-full l:w-full tablet:justify-center l:justify-center m:justify-center s:justify-center">
                <p className='text-xx font-semibold mt-4 tablet:text-sm'>Copyright protection in India is governed by the Copyright Act of 1957. Under this Act,</p>
                <p className='text-xx font-semibold tablet:text-sm'>a photograph is considered an 'artistic work' and is thus protected. If someone</p>
                <p className='text-xx font-semibold tablet:text-sm'>violates the copyright, the photographer can seek legal remedies, including</p>
                <p className='text-xx font-semibold tablet:text-sm'>compensation for damages.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-20 mb-10">
      <div className="mt-20 mb-10">
        {recentlyView.length>3?(
          <div>
              <h1 className="flex items-center justify-center text-2xl font-bold mb-10">Recently Viewed</h1>
               <ProductRecommendation item={visibleItem.slice(-4).reverse()}/>
          </div>
        ):(
          <div>
            Null
          </div>
        )}
      </div>
      <h1 className="flex items-center justify-center text-2xl font-bold mb-10">You May Also Like</h1>
      <ProductRecommendation item={random.slice(0,4)} />
      </div>
    </div>
  );
};

export default ProductDetail;
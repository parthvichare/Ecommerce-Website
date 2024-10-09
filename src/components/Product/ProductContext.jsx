// ProductContext.js
import React, { useRef, useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import items from '../cloth_data.json'
import { useParams } from 'react-router-dom';

const ProductContext = createContext();

export const UseProduct = () => {
  return useContext(ProductContext);
};

// Example of how filteredItems might be implemented
export const ProductProvider = ({ children }) => {
  const {id}=useParams()
  const [filteredItem,setfilteredItem]=useState([])
  const [recentlyView, setRecentlyView] = useState(()=>{
    const storedViewItem=localStorage.getItem('recentlyView')
    return storedViewItem?JSON.parse(storedViewItem):[]
  });
  const[visibleItem,setVisibleItem]=useState(recentlyView)
  const [loadedItems, setLoadedItems] = useState([]);
  const productRef = useRef(null);


  //Converting into Integ
  const idToFilter=parseInt(id,10)

  //Filtered the current Id-product from the product List
  useEffect(()=>{
    const filteritem=items.filter(item=>item.id!==idToFilter)
    setfilteredItem(filteritem)
    // console.log("filterItem",filteritem)
  },[id])

  //Adding Items which is Recently Viewed
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
    <ProductContext.Provider value={{ filteredItem,recentlyView,visibleItem,random,loadedItems,getRandomItems,setfilteredItem}}>
      {children}
    </ProductContext.Provider>
  );
};

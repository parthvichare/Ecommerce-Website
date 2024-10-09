import { useEffect, useState } from 'react';
import { UseProduct } from './ProductContext';

export const useLazyLoading = (items, delay=10) => {
  const {randomItems}=UseProduct()
  const [loadedItems, setLoadedItems] = useState([]);
  items=randomItems
  
  useEffect(() => {
    let timer;
    const loadImages = () => {
      timer = setTimeout(() => {
        setLoadedItems((prev) => {
          const nextIndex = prev.length;
          if (nextIndex < items.length) {
            return [...prev, items[nextIndex]];
          }
          return prev;
        });
      }, delay);
    };

    if (loadedItems.length < items.length) {
      loadImages();
    }

    return () => clearTimeout(timer);
  }, [loadedItems, items, delay]);

  return loadedItems;
};

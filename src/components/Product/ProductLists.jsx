// import React, { useState, useRef, useEffect } from 'react';
// import items from '../cloth_data.json';
// import { UseFilter } from '../Filters/FilterContext';
// import { Link } from 'react-router-dom';
// import { useLazyLoading } from './LazyLoading';

// const ProductLists = () => {
//   const { minPrice, maxPrice } = UseFilter();
//   const filteredItems = items.filter((item) => {
//     const price = parseFloat(item.prices.filterprice);
//     const min = parseFloat(minPrice) || 0;
//     const max = parseFloat(maxPrice) || Infinity;

//     return price >= min && price <= max;
//   });

//   const lazyLoadedItems = useLazyLoading(filteredItems.slice(0,50));

//   //Here we stored the true boolean value based on the image-id where we check if the img tag is thier or not (State Management)
//   const [imageLoaded, setImageLoaded] = useState({});          
//   const [contentLoaded, setContentLoaded] = useState({});     

//   console.log(imageLoaded)
  
//   //We use Ref to manipulate the DOM-div which help to check the true and false
//   const imageRefs = useRef([]);


//   //ViewPort checking if the Element(Image,content) inside the viewport screen or not 
//   const isElementInViewport = (el) => {
//     const rect = el.getBoundingClientRect();      //Its giving the sizes of the viewport (Images size:- Top,bottom,right,left) so items should get in viewport

//     console.log('Viewport Size:', {
//       width: window.innerWidth || document.documentElement.clientWidth,
//       height: window.innerHeight || document.documentElement.clientHeight,
//     });
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth   || document.documentElement.clientWidth)
//     );
//   };

//   // Here we are Create HandleScroll which load the Image by checking the img src and write true boolean value
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const handleScroll = () => {
//     imageRefs.current.forEach((ref) => {
//       if (ref) {
//         const isInViewport = isElementInViewport(ref);
//         console.log(`Element ${ref.dataset.id} in viewport:`, isInViewport);
//         if (!imageLoaded[ref.dataset.id] && isInViewport) {
//           const imgElement = ref.querySelector('img');
//           if (imgElement) {
//             imgElement.src = imgElement.dataset.src;
//             setImageLoaded((prevState) =>({ ...prevState, [ref.dataset.id]: true }));
//           }
//           setContentLoaded((prevState) => ({ ...prevState, [ref.dataset.id]: true }));
//         }
//       }
//     });
//   };

  
  
//   //The useEffect 
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('resize', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', handleScroll);
//     };
//   }, [handleScroll, imageLoaded]);

//   useEffect(() => {
//     handleScroll(); // Trigger the scroll handler once on mount
//   }, [imageLoaded,handleScroll]);

//   //Mark as Image is already loaded and stored into stateImageLoaded
//   function handleImageLoad(id) {
//     setImageLoaded((prevState) => ({ ...prevState, [id]: true }));
//     console.log("Image Loaded",imageLoaded)
//   }

  
//   return (
//     <div className="mx-2 laptop:mr-8 tablet:ml-4">
//       <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4">
//         {lazyLoadedItems.map((item, index) => (
//           <div
//             key={item.id}
//             className="p-2 mt-5"
//             ref={(el) => (imageRefs.current[item.id] = el)}
//             data-id={item.id}
//           >
//             <Link to={`/product/${item.id}`}>
//               <div className={`bg-gray-200 h-5 rounded-lg  transition-opacity ${imageLoaded[item.id] ? "opacity-0" : "opacity-100"}`}></div>
//               <img
//                 data-src={item.image.image_1}
//                 data-id={item.id}
//                 data-index={index}
//                 className={`w-full rounded-lg cursor-pointer transition-shadow duration-500 ${imageLoaded[item.id] ? "opacity-100" : "opacity-0"}`}
//                 alt={item.name}
//                 onLoad={() => handleImageLoad(item.id)}
//                 style={{ display: imageLoaded[item.id] ? 'block' : 'none' }}
//               />
//               <div className={`flex flex-col justify-center items-center text-center transition-opacity duration-500 ${contentLoaded[item.id] ? 'opacity-100' : 'opacity-0'}`}>
//                 <span className="text-xs font-bold tablet:text-xl w-full laptop:text-lg">
//                   {item.name}
//                 </span>
//                 <div>
//                   <span className="flex justify-center items-center mt-1">
//                     <span className="text-base font-bold tablet:mx-16 tablet:text-sm laptop:text-lg">
//                       {item.prices.displayprice}
//                     </span>
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductLists;





// import React,{useState,useEffect,useRef} from 'react';
// import { Link } from 'react-router-dom';
// import { UseFilter } from '../Filters/FilterContext';
// import { useLazyLoading } from './LazyLoading';


// const ProductList = ({ items }) => {
//   const { minPrice, maxPrice } = UseFilter();
//   // const LazyLoadItemDisplay=useLazyLoading()
//   // console.log(filteringItem)

//   const filteredItems = items.filter((item) => {
//     const price = parseFloat(item.prices.filterprice);
//     const min = parseFloat(minPrice) || 0;
//     const max = parseFloat(maxPrice) || Infinity;

//     return price >= min && price <= max;
//   });

//   // console.log('filtereItems',filteredItems)


//   // console.log("Itemed",LazyLoadItemDisplay)
//   // const LazyLoadRandom=randomItems(LazyLoadItemDisplay,20)

//   // useEffect(()=>{
//   //   setFilteringItem(filteringItem)
//   // },[minPrice,maxPrice])
//   useEffect(() => {
//     const handleBeforeUnload = (event) => {
//       console.log("Page is about to be reloaded or closed.");
      
//       // This is required for Chrome to display the dialog (optional)
//       event.preventDefault(); 
//       event.returnValue = ''; 
//     };

//     window.addEventListener('beforeunload', handleBeforeUnload);

//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);

 
//   //Here we stored the true boolean value based on the image-id where we check if the img tag is thier or not (State Management)
//   const [imageLoaded, setImageLoaded] = useState({});          
//   const [contentLoaded, setContentLoaded] = useState({});
  


//   // console.log("ImageLoad",imageLoaded)
  
//   //We use Ref to manipulate the DOM-div which help to check the true and false
//   const imageRefs = useRef([]);


//   //ViewPort checking if the Element(Image,content) inside the viewport screen or not 
//   const isElementInViewport = (el) => {
//     const rect = el.getBoundingClientRect();      //Its giving the sizes of the viewport (Images size:- Top,bottom,right,left) so items should get in viewport

//     // console.log('Viewport Size:', {
//     //   width: window.innerWidth || document.documentElement.clientWidth,
//     //   height: window.innerHeight || document.documentElement.clientHeight,
//     // });
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth   || document.documentElement.clientWidth)
//     );
//   };

//   // Here we are Create HandleScroll which load the Image by checking the img src and write true boolean value
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const handleScroll = () => {
//     imageRefs.current.forEach((ref) => {
//       if (ref) {
//         const isInViewport = isElementInViewport(ref);
//         // console.log(`Element ${ref.dataset.id} in viewport:`, isInViewport);
//         if (!imageLoaded[ref.dataset.id] && isInViewport) {
//           const imgElement = ref.querySelector('img');
//           if (imgElement) {
//             imgElement.src = imgElement.dataset.src;
//             setImageLoaded((prevState) =>({ ...prevState, [ref.dataset.id]: true }));
//           }
//           setContentLoaded((prevState) => ({ ...prevState, [ref.dataset.id]: true }));
//         }
//       }
//     });
//   };

  
  
//   //The useEffect 
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('resize', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', handleScroll);
//     };
//   }, [handleScroll, imageLoaded]);

//   useEffect(() => {
//     handleScroll(); // Trigger the scroll handler once on mount
//   }, [imageLoaded,handleScroll]);

//   //Mark as Image is already loaded and stored into stateImageLoaded
//   function handleImageLoad(id) {
//     setImageLoaded((prevState) => ({ ...prevState, [id]: true }));
//     // console.log("Image Loaded",imageLoaded)
//   }

  
//   return (
//     <div className="mx-2 laptop:mr-8 tablet:ml-4">
//       <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4">
//         {filteredItems.map((item, index) => (
//           <div
//             key={item.id}
//             className="p-2 mt-5"
//             ref={(el) => (imageRefs.current[item.id] = el)}
//             data-id={item.id}
//           >
//             <Link to={`/product/${item.id}`}>
//               <div className={`bg-gray-200 h-5 rounded-lg  transition-opacity ${imageLoaded[item.id] ? "opacity-0" : "opacity-100"}`}></div>
//               <img
//                 src={item.image.image_1}
//                 id={item.id}
//                 data-index={index}
//                 className={`w-full rounded-lg cursor-pointer transition-shadow duration-500 ${imageLoaded[item.id] ? "opacity-100" : "opacity-0"}`}
//                 alt={item.name}
//               />
//               <div className={`flex flex-col justify-center items-center text-center transition-opacity duration-500 ${contentLoaded[item.id] ? 'opacity-100' : 'opacity-0'}`}>
//                 <span className="text-xs font-bold tablet:text-xl w-full laptop:text-lg">
//                   {item.name}
//                 </span>
//                 <div>
//                   <span className="flex justify-center items-center mt-1">
//                     <span className="text-base font-bold tablet:mx-16 tablet:text-sm laptop:text-lg">
//                       {item.prices.displayprice}
//                     </span>
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;




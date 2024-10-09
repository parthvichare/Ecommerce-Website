import React,{useState,useEffect,useRef} from 'react';
import { Link } from 'react-router-dom';
import { UseFilter } from '../Filters/FilterContext';
import { useLazyLoading } from './LazyLoading';
import WishListToggle from '../WishList/WishListToggle';
import AddToWishlist from '../WishList/AddToWishlist';



const ProductList = ({ items }) => {
  const { minPrice, maxPrice } = UseFilter();
  const[hoverProductId,setHoveredProductId]=useState(null)
  console.log(hoverProductId)
  // const LazyLoadItemDisplay=useLazyLoading()
  // console.log(filteringItem)

  const[addToWish,setAddToWish]=useState(()=>{
    const savedWishList = localStorage.getItem('wishlist');
    return savedWishList ? JSON.parse(savedWishList):[]
  });

  useEffect(()=>{
    localStorage.setItem('wishlist',JSON.stringify(addToWish))
  },[addToWish])


  const filteredItems = items.filter((item) => {
    const price = parseFloat(item.prices.filterprice);
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || Infinity;

    return price >= min && price <= max;
  });

  // console.log('filtereItems',filteredItems)


  // console.log("Itemed",LazyLoadItemDisplay)
  // const LazyLoadRandom=randomItems(LazyLoadItemDisplay,20)

  // useEffect(()=>{
  //   setFilteringItem(filteringItem)
  // },[minPrice,maxPrice])
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      console.log("Page is about to be reloaded or closed.");
      
      // This is required for Chrome to display the dialog (optional)
      event.preventDefault(); 
      event.returnValue = ''; 
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

 
  //Here we stored the true boolean value based on the image-id where we check if the img tag is thier or not (State Management)
  const [imageLoaded, setImageLoaded] = useState({});          
  const [contentLoaded, setContentLoaded] = useState({});
  


  // console.log("ImageLoad",imageLoaded)
  
  //We use Ref to manipulate the DOM-div which help to check the true and false
  // const imageRefs = useRef([]);


  // //ViewPort checking if the Element(Image,content) inside the viewport screen or not 
  // const isElementInViewport = (el) => {
  //   const rect = el.getBoundingClientRect();      //Its giving the sizes of the viewport (Images size:- Top,bottom,right,left) so items should get in viewport

  //   // console.log('Viewport Size:', {
  //   //   width: window.innerWidth || document.documentElement.clientWidth,
  //   //   height: window.innerHeight || document.documentElement.clientHeight,
  //   // });
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth   || document.documentElement.clientWidth)
  //   );
  // };

  // // Here we are Create HandleScroll which load the Image by checking the img src and write true boolean value
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // const handleScroll = () => {
  //   imageRefs.current.forEach((ref) => {
  //     if (ref) {
  //       const isInViewport = isElementInViewport(ref);
  //       // console.log(`Element ${ref.dataset.id} in viewport:`, isInViewport);
  //       if (!imageLoaded[ref.dataset.id] && isInViewport) {
  //         const imgElement = ref.querySelector('img');
  //         if (imgElement) {
  //           imgElement.src = imgElement.dataset.src;
  //           setImageLoaded((prevState) =>({ ...prevState, [ref.dataset.id]: true }));
  //         }
  //         setContentLoaded((prevState) => ({ ...prevState, [ref.dataset.id]: true }));
  //       }
  //     }
  //   });
  // };

  
  
  // //The useEffect 
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   window.addEventListener('resize', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     window.removeEventListener('resize', handleScroll);
  //   };
  // }, [handleScroll, imageLoaded]);

  // useEffect(() => {
  //   handleScroll(); // Trigger the scroll handler once on mount
  // }, [imageLoaded,handleScroll]);

  // //Mark as Image is already loaded and stored into stateImageLoaded
  // function handleImageLoad(id) {
  //   setImageLoaded((prevState) => ({ ...prevState, [id]: true }));
  //   // console.log("Image Loaded",imageLoaded)
  // }
  // const containerVariants = {
  //   hidden: {
  //     opacity: 2,
  //     transition: { staggerChildren: 3 }, // Adjust stagger duration
  //   },
  //   visible: {
  //     opacity: 2,
  //     transition: { staggerChildren: 3 },
  //   },
  // };
  
  // // Define individual item variants
  // const itemVariants = {
  //   hidden: {
  //     opacity: 0,
  //     y: 40, // Start from a lower Y position
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 20, // Final position
  //   },
  // };
  
  return (
    <div className="px-2">
      <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-2 laptop-l:grid-cols-4 gap-4 w-full overflow-y-hidden">
        {filteredItems.map((item, index) => (
          <div
            key={index.id}
            className="p-2 mt-5"
            onMouseEnter={() => setHoveredProductId(item.id)}
            onMouseLeave={() => setHoveredProductId(null)}
            style={{ position: "relative" }}
          >
            <Link to={`/product/${item.id}`}>
              <div className="relative">
                <img
                  src={hoverProductId === item.id ? item.image.image_3 : item.image.image_1}
                  className="w-full rounded-lg cursor-pointer transition-shadow duration-500"
                  alt={item.name}
                />
                {/* Wishlist and zoom icons */}
                <WishListToggle product={item} addToWish={addToWish} setAddToWish={setAddToWish} />
                <AddToWishlist product={item} addToWish={addToWish} />
  
                {/* Zoom SVG on hover */}
                {hoverProductId === item.id && (
                  <div className="absolute inset-0 flex justify-center items-center transition-transform duration-700 ease-in-out translate-y-10 hover:translate-y-2">
                    <div className="bg-white rounded-full py-2 px-4 absolute bottom-16">
                      <svg
                        fill="#000000"
                        width="32"
                        height="36"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <g>
                          <path
                            stroke="currentColor"
                            strokeWidth="2"
                            d="m494.8,241.4l-50.6-49.4c-50.1-48.9-116.9-75.8-188.2-75.8s-138.1,26.9-188.2,75.8l-50.6,49.4c-11.3,12.3-4.3,25.4 0,29.2l50.6,49.4c50.1,48.9 116.9,75.8 188.2,75.8s138.1-26.9 188.2-75.8l50.6-49.4c4-3.8 11.7-16.4 0-29.2zm-238.8,84.4c-38.5,0-69.8-31.3-69.8-69.8 0-38.5 31.3-69.8 69.8-69.8 38.5,0 69.8,31.3 69.8,69.8 0,38.5-31.3,69.8-69.8,69.8zm-195.3-69.8l35.7-34.8c27-26.4 59.8-45.2 95.7-55.4-28.2,20.1-46.6,53-46.6,90.1 0,37.1 18.4,70.1 46.6,90.1-35.9-10.2-68.7-29-95.7-55.3l-35.7-34.7zm355,34.8c-27,26.3-59.8,45.1-95.7,55.3 28.2-20.1 46.6-53 46.6-90.1 0-37.2-18.4-70.1-46.6-90.1 35.9,10.2 68.7,29 95.7,55.4l35.6,34.8-35.6,34.7z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
  
              <div className="flex flex-col justify-center items-center mt-5 text-center transition-opacity duration-500">
                <span className="text-xs font-semibold s:font-bold tablet:text-sm w-full laptop:text-lg text-slate-700">
                  {item.name}
                </span>
                <div>
                  <span className="flex justify-center items-center mt-1">
                    <span className="text-base font-bold tablet:mx-2 tablet:text-lg laptop:text-lg text-slate-700">
                      {item.prices.displayprice} INR 
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;













// <svg fill="#000000" width="30" height="30" class="icon icon--quickview-eye   " version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
//         <g>
//           <path stroke="currentColor" stroke-width="2" d="m494.8,241.4l-50.6-49.4c-50.1-48.9-116.9-75.8-188.2-75.8s-138.1,26.9-188.2,75.8l-50.6,49.4c-11.3,12.3-4.3,25.4 0,29.2l50.6,49.4c50.1,48.9 116.9,75.8 188.2,75.8s138.1-26.9 188.2-75.8l50.6-49.4c4-3.8 11.7-16.4 0-29.2zm-238.8,84.4c-38.5,0-69.8-31.3-69.8-69.8 0-38.5 31.3-69.8 69.8-69.8 38.5,0 69.8,31.3 69.8,69.8 0,38.5-31.3,69.8-69.8,69.8zm-195.3-69.8l35.7-34.8c27-26.4 59.8-45.2 95.7-55.4-28.2,20.1-46.6,53-46.6,90.1 0,37.1 18.4,70.1 46.6,90.1-35.9-10.2-68.7-29-95.7-55.3l-35.7-34.7zm355,34.8c-27,26.3-59.8,45.1-95.7,55.3 28.2-20.1 46.6-53 46.6-90.1 0-37.2-18.4-70.1-46.6-90.1 35.9,10.2 68.7,29 95.7,55.4l35.6,34.8-35.6,34.7z"></path>
//         </g>
//       </svg>
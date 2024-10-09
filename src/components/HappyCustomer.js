import React, { useState, useEffect } from 'react';
import products from '../components/cloth_data.json';
import { useCart } from './CartCont';

const HappyCustomer = () => {
  const { items, setItems } = useCart();
  // const [count, setCount] = useState(() => {
  //   // Retrieve count from local storage or default to 0
  //   const savedCount = localStorage.getItem('count');
  //   const initialCount = savedCount  ? parseInt(savedCount, 10) : 0;
  //   return isNaN(initialCount) ? 0 : initialCount;
  // });

  // // Save count to local storage whenever it changes
  // useEffect(() => {
  //   localStorage.setItem('count', count);
  // }, [count]);
  const [count,setCount]=useState(0)
  const addToCart = (product) => {
    setItems([...items, product]); // Add the new product to the cart
  };

  return (
    <div>
      <ul>
        <li>
          <p>Count is {count}</p>
          {/* <button onClick={() => setCount(prevCount => prevCount + 1)}>
            Increment
          </button> */}
          <button onClick={()=>setCount(count- 1)}>
            Decrement
          </button>
        </li>
        {products.map((product) => (
          <li key={product.id}> {/* Ensure each item has a unique key */}
            <h1>{product.name}</h1>
            <button onClick={() => addToCart({ name: product.name, price: product.price })}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HappyCustomer;






// import React, { useState, useEffect } from 'react';


// // Example product data
// const products = [
//   { id: 1, name: 'Product 1', price: 100 },
//   { id: 2, name: 'Product 2', price: 200 },
// ];

// const HappyCustomer = () => {
//   const [cart, setCart] = useState([]);
//   const [visible, setVisible] = useState(true);
//   const [itemToAdd, setItemToAdd] = useState(null);

//   const addToCart = (product) => {
//     setItemToAdd(product);
//   };

//   const updateCart = (item) => {
//     if (item) {
//       setCart((prevCart) => [...prevCart, item]);
//     }
//   };

//   const removeCart = (itemToRemove) => {
//     setCart((prevCart) => prevCart.filter(item => item.id !== itemToRemove.id));
//   };

//   useEffect(() => {
//     updateCart(itemToAdd);
//   }, [itemToAdd]);

//   return (
//     <div>
//       <h1>Products</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name} - ${product.price}
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>

//       <button onClick={() => setVisible(!visible)}>
//         {visible ? 'Hide Cart' : 'Show Cart'}
//       </button>

//       {visible && (
//         <div>
//           <h2>Cart</h2>
//           <ul>
//             {cart.map((item, index) => (
//               <li key={index}>
//                 {item.name} - ${item.price}
//                 <button onClick={() => removeCart(item)}>Remove</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HappyCustomer;






















// import React, { useState } from 'react';
// import clothdata from './cloth_data.json';

// const HappyCustomer = () => {
//   const [cart, setCart] = useState([]);
//   const [visible, setVisible] = useState(true);

//   const addToCart = (item) => {
//     // Add the item to the cart if it is not already there
//     if (!cart.find(cartItem => cartItem.name === item.name)) {
//       setCart([...cart, item]);
//     }
//     return(
//       <li>{item.name}</li>
//     )
//   };

//   const removeFromCart = (itemToRemove) => {
//     setCart(cart.filter(item => item.name !== itemToRemove.name));
//   };

//   return (
//     <div>
//        {visible ? <addToCart /> : <></>}
//       <svg
//         focusable="false"
//         width="56"
//         height="24"
//         className="text-yellow-800 mt-5 mb-28"
//         onClick={() => setVisible(!visible)}
//         viewBox="0 0 56 24"
//       >
//         <path
//           d="M3 7H17L18 18H2L3 7Z"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//         ></path>
//         <path
//           d="M13 4V4C13 2.34315 11.6569 1 10 1V1C8.34315 1 7 2.34315 7 4V4"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//         ></path>
//         <circle
//           cx="50" // Center x-coordinate of the circle
//           cy="8"  // Center y-coordinate of the circle
//           r="8"   // Radius of the circle
//           fill="black"
//         />
//         <text
//           x="50"  // Center x-coordinate of the text, same as circle center
//           y="12"  // Center y-coordinate of the text, adjust as needed
//           textAnchor="middle"
//           fontSize="12"
//           fill="white"
//         >
//           {cart.length}
//         </text>
//       </svg>

//       <ul>
//         {clothdata.map((item, index) => (
//           <li key={index}>
//             {item.name} - {item.price}
//             <button
//               className="bg-red-600 p-1"
//               onClick={() => addToCart(item)}
//             >
//               Add to cart
//             </button>
//           </li>
//         ))}
//       </ul>

//       {visible && cart.length > 0 && (
//         <div>
//           <h2>Cart Items:</h2>
//           <ul>
//             {cart.map((item, index) => (
//               <li key={index}>
//                 {item.name} - {item.price}
//                 <button
//                   className="bg-gray-600 p-1 ml-2"
//                   onClick={() => removeFromCart(item)}
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HappyCustomer;



{/* <svg
focusable="false"
width="56"
height="24"
className="text-yellow-800 mt-5"
viewBox="0 0 56 24" // Adjusted viewBox to fit the icon and badge
>
<path
  d="M3 7H17L18 18H2L3 7Z"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
></path>
<path
  d="M13 4V4C13 2.34315 11.6569 1 10 1V1C8.34315 1 7 2.34315 7 4V4"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
></path>
<text
  x="32"  // Center x-coordinate of the text, same as circle center
  y="12"  // Center y-coordinate of the text, adjust as needed
  textAnchor="middle"
  fontSize="12"
  fill="black"
>
  {count}
</text>
</svg> */}
import React from "react";

const SideBar = ({ AddTowish, isOpen, toggleWishList }) => {
  const handleToggleClick = (e) => {
    e.preventDefault();
    toggleWishList();
  };

  const preventLink = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`fixed top-32 left-1/4 border-2 border-black ${
        isOpen ? "" : "hidden"
      } bg-white text-black w-[900px] h-[700px] z-50 rounded-lg transition-all duration-300 ease-in-out`}
      onClick={preventLink}
    >
      <div className="h-full p-4 flex flex-col">
        <h1 className="text-lg font-bold mb-4">We are Glad you Liked It</h1>
        {/* This div is set to grow and has overflow for scrolling */}
        <div className="flex-grow overflow-y-auto">
          {/* Add a min-height to ensure the grid takes enough space */}
          <div className="grid grid-cols-3 gap-4">
            {AddTowish.length > 0 ? (
              AddTowish.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between border border-gray-300 p-2"
                >
                  <p>{item.name}</p>
                  <img src={item.image.image_1} alt={item.name} className="h-[200px] w-[200px] object-cover"/>
                </div>
              ))
            ) : (
              <p>No items in your wishlist.</p> // Handling empty state
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;





// return (
//   <div
//     className={`fixed top-80 left-1/2 transform border-2 border-black ${
//       isOpen ? "-translate-x-1/2 ml-0 -translate-y-0" : "hidden"
//     } bg-white text-black w-[1120px] mr-44 h-[700px] z-50 rounded-lg transition-all duration-300 ease-in-out overflow-y-auto`} // <-- Applied overflow-y-auto here
//   >
//     <div className="grid grid-cols-6 gap-4 p-4">
//       {AddTowish.map((item, index) => (
//         <div
//           key={index}
//           className="flex items-center justify-center border border-gray-300 p-2"
//         >
//           <p>{item.name}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );




// import React from "react";

// const SideBar = ({ isOpen,toggleWishList }) => {
//   const handleToggleClick = (e) => {
//     e.preventDefault();
//     toggleWishList();
//   };

//   return (
//     <div
//       className={`fixed top-1/2 left-1/2 transform border-2 border-black ${
//         isOpen ? "-translate-x-3/4 ml-52  -translate-y-56" : "hidden"
//       } bg-white text-black w-[1120px] mr-44 h-[250px] z-50 rounded-lg  transition-all duration-300 ease-in-out`}
//     >
//     <div>
//       <div className="flex justify-between items-center border-b-2 border-black pb-2">
//         <h1 className="flex text-3xl w-full pl-6">
//            <svg
//                     aria-hidden="true"
//                     focusable="false"
//                     data-prefix="far"
//                     data-icon="heart"
//                     className="h-7 border-gray-50 pl-2"
//                     role="img"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 512 512"
//                     color="rgb(159 44 0)"
//                   >
//                     <path
//                       fill="currentColor"
//                       d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
//                     ></path>
//                   </svg>
//           <span class="pl-4">We're Glad you liked It!</span>
//           </h1>
//              <svg
//                 onClick={handleToggleClick}
//                 className={`text-orange-600 s:mr-2 cursor-pointer mr-auto font-extrabold text-8xl transform transition-transform duration-300 ${
//                   isOpen ? "hover:rotate-180 cursor-pointer" : ""
//                 }`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 width="56"
//                 height="44"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//       </div>
//       <div class="p-8 text-2xl border-b-2 border-black">
//         <span>
//         You have limit of 30 items that you can access by clicking on heart icon at the top of the page. increase your maximum to 1000 favorites that you can access from anywhere!
//         </span>
//       </div>
//       <button class="w-full flex items-center justify-center pt-4">
//         <span class="bg-orange-500 px-4 py-2 rounded-lg">LoginIn Or Signup</span>
//       </button>
//     </div>
//    </div>
//   );
// };

// export default SideBar;

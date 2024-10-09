import React,{useState} from 'react'

const RemovedProductNot = ({ isOpen,toggleWishList}) => {
  return (
    <div>
      <div
       className={`fixed bottom-4 left-2/4 transform -translate-x-1/2 border-2 border-black ${
        isOpen ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      } bg-white text-black   z-50 rounded-lg transition-all duration-300 ease-in-out`}
    >

      <div className="bg-black rounded-md  relative w-72 flex">
        <h1 className=" text-zinc-50 text-ss pt-2 ">Product Removed from wishlist successfully</h1>
        <svg
                onClick={toggleWishList}
                className={`text-orange-600 s:mr-2 cursor-pointer mr-auto font-extrabold transform transition-transform duration-300 left-7 ${
                  isOpen ? "hover:rotate-180 cursor-pointer" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="60"
                height="38"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
        </svg>
      </div>
      </div>
    </div>
  )
}

export default RemovedProductNot



// import React from 'react'

// const AddToWishlist = ({ isOpen, toggleWishList }) => {
//   return (
//     <div>
//       <div
//        className={`fixed bottom-4 left-44 transform -translate-x-1/2 border-2 border-black ${
//         isOpen ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
//       } bg-white text-black w-[290px] h-[100px] z-50 rounded-lg transition-all duration-300 ease-in-out`}
//     >

//       <div className="bg-orange-600 rounded-md  relative w-72">
//         <h1 className="border-b-2  border-black pl-2">Product Adde To Wishlist</h1>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default AddToWishlist;

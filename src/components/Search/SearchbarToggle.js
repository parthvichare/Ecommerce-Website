import React from 'react'
import { useSearch } from './SearchContext'
import Sidebar from './Sidebar'

const SearchbarToggle = () => {
  const { isOpen, toggleSearchbar } = useSearch();
  return (
    <div>
      <button onClick={toggleSearchbar}> {/* Add onClick here */}
        <svg
          focusable="false"
          width="18"
          height="18"
          className="laptop-l:hidden mx-4"
          viewBox="0 0 18 18"
        >
          <path
            d="M12.336 12.336c2.634-2.635 2.682-6.859.106-9.435-2.576-2.576-6.8-2.528-9.435.106C.373 5.642.325 9.866 2.901 12.442c2.576 2.576 6.8 2.528 9.435-.106zm0 0L17 17"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
        </svg>
      </button>

      {/* Sidebar logic */}
      <div
        className={`fixed top-0 left-0 z-20 h-full  bg-white transform transition-transform duration-700 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "24rem" }}
      >
        <Sidebar isOpen={isOpen} toggleSearchbar={toggleSearchbar} />
      </div>
      <div
            className={`fixed top-0 inset-0 bg-black  z-10 transition-opacity duration-300 ${
              isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
            }`}
            onClick={toggleSearchbar}
        ></div>
    </div>
  );
};


export default SearchbarToggle



// const MenuToggle = () => {
//   const { isOpenMenu, ToggleMenu } = UseMenu();

//   useEffect(() => {
//     if (isOpenMenu) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }
//   });

//   return (
//     <div>
//       <button className="laptop-l:hidden text-purple-700" onClick={ToggleMenu}>
//         <svg
//           focusable="false"
//           width="28"
//           height="18"
//           className="ml-5 md:ml-auto"
//           viewBox="0 0 18 14"
//         >
//           <path
//             d="M0 1h18M0 13h18H0zm0-6h18H0z"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//           ></path>
//         </svg>
//       </button>
//       <div>
//         {/* Sidebar */}
//         <div
//           className={`fixed top-0 left-0 z-20 h-full bg-white transform transition-transform duration-700 ease-in-out ${
//             isOpenMenu ? "translate-x-0" : "-translate-x-full"
//           }`}
//           style={{ width: "24rem" }}
//         >
//           <Sidebarmenu isOpenMenu={isOpenMenu} ToggleMenu={ToggleMenu} />
//         </div>

//         <div
//             className={`fixed top-0 inset-0 bg-black  z-10 transition-opacity duration-300 ${
//               isOpenMenu ? "opacity-50" : "opacity-0 pointer-events-none"
//             }`}
//             onClick={ToggleMenu}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default MenuToggle;

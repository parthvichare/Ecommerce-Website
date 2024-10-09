import React, { useEffect, useRef } from "react";
import SidebarNavSort from "./SidebarNavsort";
import { UseFilter } from "./FilterContext";

const SortbyNavbar = () => {
  const { ToggleNavbarSortby, navbarSortOpen } = UseFilter();
  const navbarRef = useRef(null);

  // Function to handle clicks outside the navbar
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target) && navbarSortOpen) {
      ToggleNavbarSortby();
    }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navbarSortOpen]);



  return (
    <div ref={navbarRef}>
      <button className="tablet:px-28 s:px-6  flex items-center" onClick={ToggleNavbarSortby}>
        <span className="mr-2">Sort by</span>
        <svg
          focusable="false"
          width="12"
          height="24"
          className="icon icon--chevron"
          viewBox="0 0 12 8"
        >
          <path
            fill="none"
            d="M1 1l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
        </svg>
      </button>
      <div
  className={`fixed bottom-0 right-0 z-20 h-full w-full transform transition-transform duration-700 ease-in-out tablet:w-full laptop:w-full laptop-l:w-[28rem] ${
    navbarSortOpen ? "translate-y-0 duration-700" : "translate-y-full"
  }`}
      > 
       <SidebarNavSort 
        navbarSortOpen={navbarSortOpen} 
        ToggleNavbarSort={ToggleNavbarSortby} 
       />
      </div>
    </div>
  );
};

export default SortbyNavbar;



// {/* <div
// className={`fixed top-0 s:left-0 laptop-l:right-10 z-20 h-full transform transition-transform duration-700 ease-in-out ${
//   navbarFilterOpen ? "translate-x-0" : "-translate-x-full"
// }`}
// style={{ width: "28rem" }}
// >
// <SidebarNavfilter
//   navbarFilterOpen={navbarFilterOpen}
//   ToggleNavbarfilter={ToggleNavbarfilter}
// />
// </div>
//  <div
// className={`fixed inset-0 bg-black  z-10 transition-opacity duration-500 ${
//   navbarFilterOpen ? "opacity-60" : "opacity-0 pointer-events-none"
// }`}
// onClick={ToggleNavbarfilter}
// ></div>
// </div> 
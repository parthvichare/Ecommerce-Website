import React, { useRef, useEffect } from "react";
import { UseFilter } from "./FilterContext";
import SidebarNavfilter from "./SidebarNavfilter";

const FilterNavbar = () => {
  const { navbarFilterOpen, ToggleNavbarfilter } = UseFilter();
  const navbarRef = useRef();

  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      navbarFilterOpen
    ) {
      ToggleNavbarfilter();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navbarFilterOpen]);

  return (
    <div ref={navbarRef}>
      <button
        className="tablet:px-28 s:px-11 flex items-center border-r border-gray-300 dark:border-gray-700"
        onClick={ToggleNavbarfilter}
      >
        <svg
          focusable="false"
          width="16"
          height="16"
          className="icon icon--filters mr-2"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 4h16M0 12h16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
          <circle
            cx="5"
            cy="4"
            r="2"
            fill="rgb(var(--background))"
            stroke="currentColor"
            strokeWidth="2"
          ></circle>
          <circle
            cx="11"
            cy="12"
            r="2"
            fill="rgb(var(--background))"
            stroke="currentColor"
            strokeWidth="2"
          ></circle>
        </svg>
        <span>Filter</span>
      </button>
      <div
        className={`fixed top-0 s:left-0 laptop-l:right-10 z-20 h-full transform transition-transform duration-700 ease-in-out ${
          navbarFilterOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "28rem" }}
      >
        <SidebarNavfilter
          navbarFilterOpen={navbarFilterOpen}
          ToggleNavbarfilter={ToggleNavbarfilter}
        />
      </div>
      <div
        className={`fixed inset-0 bg-black  z-10 transition-opacity duration-500 ${
          navbarFilterOpen ? "opacity-60" : "opacity-0 pointer-events-none"
        }`}
        onClick={ToggleNavbarfilter}
      ></div>
    </div>
  );
};

export default FilterNavbar;

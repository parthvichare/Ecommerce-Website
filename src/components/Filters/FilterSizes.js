import React, { useRef } from "react";
import SidebarSizes from "./SidebarSizes";
import { UseFilter } from "./FilterContext";

const FilterSizes = () => {
  const { sizesopen, ToggleSize } = UseFilter();
  const contentRef = useRef(null); // Reference to the content
  
  return (
    <div>
      <button
        className="flex justify-between items-center mb-4"
        onClick={ToggleSize}
      >
        <p>Size</p>
        <div className="ml-44 pl-1">
          <svg
            className={`transform transition-transform duration-300 ${
              sizesopen ? "rotate-180" : " "
            }`}
            focusable="false"
            width="12"
            height="8"
            viewBox="0 0 12 8"
          >
            <path
              fill="none"
              d="M1 1l5 5 5-5"
              stroke="currentColor"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
      </button>
      <div
        ref={contentRef}
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          sizesopen ? "max-h-[1000px]" : "max-h-0"
        }`}
        style={{ maxHeight: sizesopen ? contentRef.current.scrollHeight : 0 }}
      >
        <SidebarSizes />
      </div>
      <p className="border-b-2"></p>
    </div>
  );
};

export default FilterSizes;

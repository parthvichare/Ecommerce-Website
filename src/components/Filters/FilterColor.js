import React, { useRef } from "react";
import SidebarColor from "./SidebarColor";
import { UseFilter } from "./FilterContext";

const FilterColor = () => {
  const { coloropen, ToggleColor } = UseFilter();
  const contentRef = useRef(null); // Reference to the content

  return (
    <div>
      <button
        className="flex justify-between items-center mb-4"
        onClick={ToggleColor}
      >
        <p>Color</p>
        <div className="ml-40 pl-2">
          <svg
            className={`transform transition-transform duration-300 ${
              coloropen ? "rotate-180" : " "
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
          coloropen ? "max-h-[1000px]" : "max-h-0"
        }`}
        style={{ maxHeight: coloropen ? contentRef.current.scrollHeight : 0 }}
      >
        <SidebarColor />
      </div>
    </div>
  );
};

export default FilterColor;

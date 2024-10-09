import React, { useState, useRef, useEffect } from "react";
import { useSearch } from "./SearchContext";
import Sidebar from "./Sidebar";


const Searchbar = () => {
  const { toggleSearchbar, isOpen } = useSearch();
  const searchRef = useRef();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div ref={searchRef}>
      <button onClick={() => toggleSearchbar()}>
        <svg
          focusable="false"
          width="18"
          height="18"
          className="s:hidden m:hidden tablet:hidden laptop-l:block"
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
    </div>
  );
};

export default Searchbar;

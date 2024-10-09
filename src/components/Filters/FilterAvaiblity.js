import React, { useRef } from 'react';
import { UseFilter } from './FilterContext';
import SidebarAvaibility from './SidebarAvaibility';

const FilterAvaiblity = () => {
    const{avabilityOpen,ToggleAvability}=UseFilter()
    const contentRef=useRef(null)
  return (
    <div>
      <button
        className="flex justify-center items-center mb-4"
        onClick={ToggleAvability}
      >
        <p className="mx-auto">Availability</p>
        <div className="ml-32 pl-2">
          <svg 
          className={`transform transition-transform duration-300 ${
              avabilityOpen? 'rotate-180':''
            }`}
          focusable="false" width="12" height="8" viewBox="0 0 12 8">
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
        className={`transistion-all duration-500 ease-in-out overflow-hidden ${
          avabilityOpen ? 'max-h-[1000px]':'max-h-0'
          }`}
        style={{maxHeight:avabilityOpen? contentRef.current.scrollHeight:0}}>
        <SidebarAvaibility/>
      </div>
     <p className="border-b-2"></p>
    </div>
  );
};

export default FilterAvaiblity;

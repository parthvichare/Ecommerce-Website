import React from 'react';
import FilterPrice from './FilterPrice';
import FilterSizes from './FilterSizes';
import FilterColor from './FilterColor';
import FilterAvaiblity from './FilterAvaiblity';

const SidebarNavfilter = ({ navbarFilterOpen, ToggleNavbarfilter }) => {
  return (
    <>
      {navbarFilterOpen && (
        <>
          <div className="fixed left-0 top-0 z-20 w-80 h-full bg-white">
            <div className="flex items-center top-0 p-4 border-b-2">
              <h1 className="pl-20 text-2xl">Filter</h1>
              <svg
                onClick={ToggleNavbarfilter}
                className={`text-orange-600 cursor-pointer ml-auto font-extrabold text-8xl transform transition-transform duration-300 ${
                  navbarFilterOpen ? "hover:rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="56"
                height="44"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div class="py-10">
              <div class="px-10">
              <FilterAvaiblity/>
              </div>
              <div class="px-10 pt-8">
              <FilterPrice/>
              </div>
              <div class="px-10 pt-8">
              <FilterSizes/>
              </div>
              <div class="px-10 pt-8">
              <FilterColor/>
              </div>
            </div>
            </div>
        </>
      )}
    </>
  );
};

export default SidebarNavfilter;

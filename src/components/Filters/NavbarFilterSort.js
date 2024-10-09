import React from "react";
import FilterNavbar from "./FilterNavbar";
import SortbyNavbar from "./SortbyNavbar";

const NavbarFilterSort = () => {

  return (
    <div className="flex items-center justify-center py-4 laptop:hidden laptop-l:hidden tablet:block s:block m:block l:block mt-0 border-gray-300 dark:border-gray-700 shadow-md">
      <div className="flex items-center justify-center space-x-4 ">
        <FilterNavbar />
        <div>
        <SortbyNavbar/>
        </div>
      </div>
    </div>
  );
};

export default  NavbarFilterSort;

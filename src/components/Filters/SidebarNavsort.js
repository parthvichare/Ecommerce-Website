import React from "react";

const SidebarNavSort = ({ navbarSortOpen, ToggleNavbarSort }) => {
  return (
    <>
      {navbarSortOpen && (
        <>
          {/* Overlay */}
          <div
            className="opacity-0 z-10"
            onClick={() => ToggleNavbarSort()}
          ></div>
          {/* Sidebar */}
          <div className="fixed bottom-0 right-0 w-full h-2/4 pb-64 bg-white z-20">
            <div className=" mx-auto top-0 p-4 border-b-2 w-full">
              <div className="flex items-center justify-center w-full relative">
                <h1 className="text-2xl">Sort by</h1>
                <svg
                  onClick={ToggleNavbarSort}
                  className={`text-orange-600 cursor-pointer font-extrabold transform transition-transform duration-300 ${
                    navbarSortOpen ? "hover:rotate-180" : ""
                  } absolute right-0`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="44"
                  height="36"
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

            {/* Menus Of SortBy */}
            <div class="flex flex-col items-center justify-center w-screen">
              <h1 class="px-6 pb-8 pt-5 cursor-pointer">Featured</h1>
              <h1 class="px-6 pb-8 cursor-pointer">Best Selling</h1>
              <h1 class="pl-2 pb-8 cursor-pointer">Alphabetically, A-Z</h1>
              <h1 class="pl-2 pb-8 cursor-pointer">Alphabetically, Z-A</h1>
              <h1 class="pl-2 pb-8 cursor-pointer">Price, low to high</h1>
              <h1 class="pl-2 pb-8 cursor-pointer">Price, high to low</h1>
            </div>
          </div>
          <div
            className={`fixed inset-0 bg-black opacity-50 z-10 w-screen transition-opacity duration-300 ${
              navbarSortOpen ? "opacity-60" : "opacity-0 pointer-events-none"
            }`}
            onClick={ToggleNavbarSort}
          ></div>
        </>
      )}
    </>
  );
};

export default SidebarNavSort;

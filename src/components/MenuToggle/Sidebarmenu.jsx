import React from "react";

const Sidebarmenu = ({ isOpenMenu, ToggleMenu }) => {
  return (
    <>
      {isOpenMenu && (
        <>
          {/* Sidebar */}
          <div className="fixed left-0 top-0 z-20 w-96 h-full bg-white">
            <div className="flex items-center top-0 p-4">
              <svg
                onClick={ToggleMenu}
                className={`text-orange-600 cursor-pointer mr-auto font-extrabold text-8xl transform transition-transform duration-300 ${
                  isOpenMenu ? "hover:rotate-180" : ""
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
            <div class="mr-auto px-8">
              <ul>
                <li class="mt-10 mb-10 border-b-2 pb-8">
                  <a href="/new_arrival" className="text-3xl">
                    NEW ARRIVAL
                  </a>
                </li>
                <li class="mt-6 mb-10 border-b-2 pb-8 ">
                  <a href="/sale" className="text-3xl">
                    SALE
                  </a>
                </li>
                <li class="mt-6 mb-10 border-b-2 pb-8">
                  <a href="/" className="text-3xl">
                    DRESSES
                  </a>
                </li>
                <li class="mt-6 mb-10 border-b-2 pb-8">
                  <a href="/" className="text-3xl items-center">
                    Kids Wear
                  </a>
                </li>
                <li class="mt-6 mb-10">
                  <a href="/" className="text-3xl">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebarmenu;

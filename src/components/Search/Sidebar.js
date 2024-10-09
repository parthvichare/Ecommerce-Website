import React, { useState } from "react";
import items from "../cloth_data.json";


const Sidebar = ({ isOpen, toggleSearchbar }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredProductId, setHoveredProductId] = useState(null); // To track which product is hovered

  // Filter products based on search term and category
  const filteredProducts = items.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      {isOpen && (
        <>
          {/* Sidebar */}
          <div className="fixed laptop-l:w-[500px] l:w-[400px] h-screen bg-white">
            <div className="flex items-center top-0 p-4">
              <form
                id="predictive-search-form"
                action="/search"
                method="get"
                className="predictive-search__form flex-grow"
              >
                <div className="relative flex items-center">
                  <svg
                    focusable="false"
                    width="18"
                    height="18"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M12.336 12.336c2.634-2.635 2.682-6.859.106-9.435-2.576-2.576-6.8-2.528-9.435.106C.373 5.642.325 9.866 2.901 12.442c2.576 2.576 6.8 2.528 9.435-.106zm0 0L17 17"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <input
                    className="text-black pl-10 pr-4 py-1 w-72 bg-transparent border s:w-[240px] m:w-[280px] laptop-l:w-[320px]"
                    type="text"
                    name="q"
                    autoComplete="off"
                    aria-label="Search"
                    placeholder="What are you looking for?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </form>
              <svg
                onClick={toggleSearchbar}
                className={`text-orange-600 s:mr-2 cursor-pointer mr-auto font-extrabold text-8xl transform transition-transform duration-300 ${
                  isOpen ? "hover:rotate-180" : ""
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
            <div className="border-orange-200 border-solid border-2"></div>
            {/* Display Filtered Products */}
            <div
              className={`p-4 s:h-[720px] laptop-l:h-[780px] ${
                filteredProducts.length === 0
                  ? "h-screen"
                  : "overflow-y-scroll overflow-x-hidden"
              }`}
            >
              {searchTerm && filteredProducts.length > 0 ? (
                <>
                  {/* Display Results header only once */}
                  <div>
                    <h1 className="font-bold text-lg">Product Found</h1>
                  </div>
                  <ul className="space-y-2 mt-2">
                    {filteredProducts.map((product) => (
                      <li
                        key={product.id}
                        className="flex"
                        onMouseEnter={() => setHoveredProductId(product.id)}
                        onMouseLeave={() => setHoveredProductId(null)}
                        onClick={() => window.location.href = `/product/${product.id}`}
                      >
                        <img
                          src={product.image.image_1}
                          className="cursor-pointer h-[120px] w-[90px] mt-2"
                          alt={product.name}
                        />
                        <div class="cursor-pointer">
                          <h1 className="cursor-pointer s:w-[12rem] l:w-[28rem] m:w-[28rem] tablet:w-[19rem] pt-10 text-ss font-bold pl-5 tablet:text-sm">
                            {product.name}
                          </h1>
                          <p className="flex cursor-pointer pt-2 text-base font-semibold pl-5">
                            <span>{product.prices.displayprice}</span>
                            <div>
                              {hoveredProductId === product.id && (
                                <button className="s:ml-32 laptop-l:ml-56 transition-transform duration-300 ease-in-out translate-x-0 hover:translate-x-2">
                                  <svg
                                    focusable="false"
                                    width="24"
                                    height="24"
                                    className="icon icon--nav-arrow-right icon--direction-aware"
                                    viewBox="0 0 17 14"
                                  >
                                    <path
                                      d="M0 7h15M9 1l6 6-6 6"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      fill="none"
                                    ></path>
                                  </svg>
                                </button>
                              )}
                            </div>
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="fixed l:ml-2 mb-2 bottom-0 border-2 rounded-lg s:w-[18rem] l:w-[22rem] m:w-[20rem] tablet:w-[23rem] laptop-l:w-[28rem] py-2 text-1rem font-bold bg-orange-600 hover:bg-orange-700 hover:border-orange-700 transition duration-300"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent any default action
                      if (searchTerm.trim()) {
                        // Check if searchTerm is not empty
                        window.location.href = `/search?q=${encodeURIComponent(
                          searchTerm
                        )}`; // Redirect to the search page
                      }
                    }}
                  >
                    <span className="text-1xl text-white">
                      View All Results
                    </span>
                  </button>
                </>
              ) : (
                <p>{searchTerm ? "No products found" : ""}</p>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
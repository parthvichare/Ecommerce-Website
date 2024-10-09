import React,{useState} from 'react'
import items from "../cloth_data.json"

const SearchBarHeader = ({isOpen, toggleSearchbar}) => {
  
    const [searchTerm, setSearchTerm] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [selectedCategory, setSelectedCatgeory] = useState("");
  
    const filterProducts = items.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    console.log(filterProducts);

  return (
    <div className="fixed flex items-center top-0 py-4 px-2 w-[24rem]">
    <form
      id="predictive-search-form"
      action="/search"
      method="get"
      className="predictive-search__form flex-grow"
    >
      <div className="relative flex items-center ml-3 laptop-l:right-0">
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
      className={`text-orange-600 cursor-pointer mr-auto font-extrabold text-8xl transform transition-transform duration-300 ${
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
  )
}

export default SearchBarHeader

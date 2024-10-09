import React,{useState} from 'react'
import { useLocation } from "react-router-dom";
import SearchResults from './SearchResults';

const ResultFilteringSearch = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchResult = query.get("q")?.toLocaleLowerCase();  // This will get the "q" parameter from the URL
  const [searchTerm, setSearchTerm] = useState(searchResult);

  return (
    <div class="w-full h-36 bg-orange-300 ">
      <h1 class="flex pt-5 justify-center items-center text-2xl">Search for "{searchTerm}"</h1>
      <form
                id="predictive-search-form"
                action="/search"
                method="get"
                className="flex mt-5 justify-center items-center"
                onSubmit={(e) => {
                  e.preventDefault(); // Prevent default form submission
                  if (searchTerm.trim()) { // Check if searchTerm is not empty
                    window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`; // Redirect to the search page
                  }
                }}
              >
                <div className="relative flex items-center">
                  <svg
                    focusable="false"
                    width="18"
                    height="18"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
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
                    className="text-black pl-4 pr-4 py-1 w-72 bg-transparent border s:w-[240px] m:w-[280px] laptop-l:w-[320px]"
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
    </div>
  )
}

export default ResultFilteringSearch

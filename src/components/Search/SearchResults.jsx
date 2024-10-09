import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import ProductList from "../Product/ProductList";
import items from "../cloth_data.json"
import FiltersSection from '../Filters/FiltersSection';
import ResultFilteringSearch from "./ResultFilteringSearch";

const SearchResults = () => {
  // Get query parameters
  const query = new URLSearchParams(useLocation().search);
  const searchQuery = query.get("q")?.toLocaleLowerCase();  // This will get the "q" parameter from the URL
  const [searchTerm] = useState(searchQuery);

  // Filter products based on search term and category
  const filteredProducts = items.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });


  return (
    <div>
    <div class="">
     <ResultFilteringSearch/>
    </div>   
     {searchTerm && filteredProducts.length>0?(
        <div className="flex tablet:ml-8 laptop:mx-8 mt-10">
        <div className="tablet:hidden s:hidden laptop:block  xl:block  md:mr-9 lg:mx-4  top-32 sticky sticky-nav">
           <FiltersSection/>
        </div>
           <ProductList items={filteredProducts}/>
        </div>
     ):(
      <h1 class="flex justify-center items-center mt-36 text-2xl">No Results could be found</h1> // Show the search term otherwise
     )}
    </div>
  );
};

export default SearchResults;

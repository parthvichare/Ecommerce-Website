import React,{useState} from 'react'
import items from "../cloth_data.json"

const FilterProducts = (isOpen,toggleSearchbar) => {
    const [searchTerm, setSearchTerm] = useState("");
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
    <div className="h-screen  w-[24rem] overflow-y-scroll">
    <ul className="space-y-2 mt-2">
      <h3 className="font-bold">Results</h3>
      {/* Check if the searchTerm is not empty */}
      {searchTerm.trim() && filterProducts.length > 0 ? (
        filterProducts.map((product) => (
          <li key={product.id} className="flex stick">
            <img
              src={product.image.image_1}
              className="h-[120px] border-2 w-[90px] mt-2"
              alt={product.name}
            />
            <div>
              <h1 className="pt-10 text-ss font-semibold pl-5">
                {product.name}
              </h1>
              <p className="pt-2 text-base font-semibold pl-5">
                {product.prices.displayprice}
              </p>
            </div>
          </li>
        ))
      ) : (
        // Show this message if searchTerm is empty or no products match
        <li>{searchTerm ? "No products found" : ""}</li>
      )}
    </ul>
  </div>
  )
}

export default FilterProducts



//   {/* Display Filtered Products Section */}
//   <div className="h-screen pt-24 w-64 overflow-y-scroll">
//     <ul className="space-y-2 mt-2">
//       <h3 className="font-bold">Results</h3>
//       {/* Check if the searchTerm is not empty */}
//       {searchTerm.trim() && filterProducts.length > 0 ? (
//         filterProducts.map((product) => (
//           <li key={product.id} className="flex stick">
//             <img
//               src={product.image.image_1}
//               className="h-[120px] border-2 w-[90px] mt-2"
//               alt={product.name}
//             />
//             <div>
//               <h1 className="pt-10 text-ss font-semibold pl-5">
//                 {product.name}
//               </h1>
//               <p className="pt-2 text-base font-semibold pl-5">
//                 {product.prices.displayprice}
//               </p>
//             </div>
//           </li>
//         ))
//       ) : (
//         // Show this message if searchTerm is empty or no products match
//         <li>{searchTerm ? "No products found" : ""}</li>
//       )}
//     </ul>
//   </div>
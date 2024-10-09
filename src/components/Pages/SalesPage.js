/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import FiltersSection from '../Filters/FiltersSection';
import ProductList from '../Product/ProductList';
import { UseProduct } from '../Product/ProductContext';

const SalesPage = () => {
  const{random}=UseProduct()
  return (
    <div>
      <h1 className="flex items-center justify-center mt-10 ml-28 text-2xl font-bold">SALE</h1>
      <section className="mt-10">
        <div className="flex tablet:ml-8 laptop:mx-8">
          <div className="tablet:hidden s:hidden laptop:block  xl:block  md:mr-9 lg:mx-4  top-32 sticky sticky-nav">
            <FiltersSection/>
          </div>
          <ProductList items={random}/>
        </div>
      </section>
    </div>
  );
};

export default SalesPage;



// <div className="grid grid-cols-4 ml-9">
// {clothData.map((item, index) => (
//   <div key={index} className="p-2 relative max-w-xs mt-5 ">
//     <img src={item.images.image_1} className="max-w-44 rounded-lg mb-3 -px-1" alt={item.name} />
//)
// </div>
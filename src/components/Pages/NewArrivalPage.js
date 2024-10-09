/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import FiltersSection from '../Filters/FiltersSection';
import ProductList from '../Product/ProductList';
import items from '../cloth_data.json'
import { UseProduct } from '../Product/ProductContext';
import NavbarFilterSort from '../Filters/NavbarFilterSort';

const NewArrivalPage = () => {
  const{random}=UseProduct()
  return (
    <div class="">
      <h1 className="flex items-center justify-center mt-10 ml-28 text-2xl font-bold">New Arrivals</h1>
      <section className="mt-10">
        <div className="flex tablet:px-8 laptop:px-8">
          <div className="tablet:hidden s:hidden laptop:block  top-32 sticky sticky-nav">
            <FiltersSection/>
          </div>
          <ProductList items={random}/>
        </div>
      </section>
    </div>
  );
};

export default NewArrivalPage;



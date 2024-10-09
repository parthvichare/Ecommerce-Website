import React from 'react';
import FilterAvaiblity from './FilterAvaiblity';
import FilterPrice from './FilterPrice';
import FilterSizes from './FilterSizes'; 
import FilterColor from './FilterColor';

const FiltersSection = () => {
  return (
    <div className="tablet:hidden s:hidden laptop:block  xl:block  md:mr-9 lg:mx-4  top-28 sticky sticky-nav">
        <div className='mb-5'>
          <h2 className='font-semibold text-orange-500 text-2xl'>Filters</h2>
          <div className="border-b-2 my-4 w-60"></div>
        </div>

        <div className='mb-5'>
          <FilterAvaiblity />
        </div>

        <div className='mb-6'>
          <FilterPrice />
        </div>

        <div>
          <FilterSizes/>
        </div>

        <div className='mt-6'>
          <FilterColor/>
        </div>
    </div>
  );
};

export default FiltersSection;

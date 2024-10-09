import React,{useRef} from 'react'
import { UseFilter } from './FilterContext'
import SidebarPrice from './SidebarPrice'

const FilterPrice = () => {
    const{priceopen,TogglePrice,minPrice,maxPrice,handleMinPriceChange,handleMaxPriceChange}=UseFilter()
    const contentRef = useRef(null); // Reference to the content
  return (
    <div>
        <button className='flex justify-center items-center mb-4' onClick={TogglePrice}>
            <p className='mx-auto'>Price</p>
            <div className='ml-44'>
              <svg
               className={`transform transistion-transform duration-300 ${
                  priceopen?"rotate-180": ""
                }`}
               width="12" 
               height="8" 
               viewBox="0 0 12 8">
                <path fill="none" d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="2"></path>
              </svg>
            </div>
          </button>
        <div 
         ref={contentRef}
         className={`transistion-all duration-500 ease-in-out overflow-hidden ${
            priceopen ? 'max-h-[1000px]':'max-h-0'
          }`}
          style={{maxHeight:priceopen? contentRef.current.scrollHeight:0}}
        >        
        <SidebarPrice
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinPriceChange={handleMinPriceChange}
        onMaxPriceChange={handleMaxPriceChange}
      />
        </div>
       <p className='border-b-2'></p>
    </div>
  )
}

export default FilterPrice

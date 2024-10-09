/* eslint-disable no-dupe-keys */
import React, { createContext, useState, useContext,useEffect } from 'react';
import items from "../products_data.json"

const FilterContext= createContext()

export const UseFilter=()=>useContext(FilterContext)

export const FilterProvider=({children})=>{
    
    //UseState for every components
    const[avabilityOpen,setAvabilityOpen]=useState(false)
    const[navbarFilterOpen, setNavbarFilterOpen] = useState(false);
    const[navbarSortOpen, setNavbarSortOpen] = useState(false);
    const[priceopen,setPriceOpen]=useState(false)
    const[sizesopen,setSize]=useState(false)
    const[minPrice,setMinPrice]=useState('500')
    const[maxPrice,setMaxPrice]=useState('')
    const[coloropen,setColor]=useState(false)

    //Toggle for Filter Avability
    const ToggleAvability=()=>{
      setAvabilityOpen(!avabilityOpen)
    }

    //Toggle for Filter Prices
    const TogglePrice=()=>{
      setPriceOpen(!priceopen)
    }

    //Toggle for Filter Size
    const ToggleSize=()=>{
      setSize(!sizesopen)
    }

    //Toggle for Filter Color
    const ToggleColor=()=>{
      setColor(!coloropen)
    }

    //Event handling for Min price

  // Load minPrice and maxPrice from localStorage when the component mounts
  useEffect(() => {
    const savedMinPrice = localStorage.getItem('minPrice');
    const savedMaxPrice = localStorage.getItem('maxPrice');
    if (savedMinPrice) setMinPrice(parseFloat(savedMinPrice));
    if (savedMaxPrice) setMaxPrice(parseFloat(savedMaxPrice));
  }, []);

  // Update localStorage whenever minPrice or maxPrice changes
  useEffect(() => {
    localStorage.setItem('minPrice', minPrice);
    localStorage.setItem('maxPrice', maxPrice);
    localStorage.setItem('priceopen',priceopen)

  }, [minPrice,maxPrice,priceopen]);


  useEffect(()=>{
    if(maxPrice===2000){

    }
  },[minPrice,maxPrice])

  // useEffect(() => {
  //   localStorage.setItem('maxPrice', maxPrice);
  // }, [maxPrice]);

  // Event handling for Min price
  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  // Event handling for Max price
  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };



    //Toggle for Filters (mobile&Tablet sizes)
  const ToggleNavbarfilter=()=>{
      setNavbarFilterOpen(!navbarFilterOpen)
  }


    //Toggle for Sorting (mobile&Tablet sizes)
  const ToggleNavbarSortby=()=>{
      setNavbarSortOpen(!navbarSortOpen)
  }


  //SideEffect for the navbarfilter
  useEffect(() => {
    if (navbarFilterOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  },[navbarFilterOpen]);


  //SideEffect for the navbarSortOpen
  useEffect(()=>{
    if(navbarSortOpen){
      document.body.classList.add('overflow-hidden')
    }else{
      document.body.classList.remove('overflow-hidden')
    }
  },[navbarSortOpen])

    
    //Filtering Prices with Min-Max values
    const filteredItems = items.filter(item => {
      const price = parseFloat(item.prices.filterprice);
      const min = parseFloat(minPrice) || 0;
      const max = parseFloat(maxPrice) || Infinity;
  
      
      return price >= min && price <= max;
    });
    

    return(
      <FilterContext.Provider value={{
        avabilityOpen,
        ToggleAvability,
        priceopen,
        TogglePrice,
        sizesopen,
        ToggleSize,
        coloropen,
        ToggleColor,
        filteredItems,
        minPrice,
        maxPrice,
        handleMinPriceChange,
        handleMaxPriceChange,
        ToggleNavbarfilter,
        ToggleNavbarSortby,
        navbarFilterOpen,
        navbarSortOpen}}>
            {children}
      </FilterContext.Provider>
    )
}



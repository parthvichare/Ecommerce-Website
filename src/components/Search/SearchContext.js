// SearchContext.js
import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider=({children})=>{
  const[isOpen,setIsOpen]=useState(false)
  
  const toggleSearchbar=()=>{
    setIsOpen(!isOpen)
  }

  return(
    <SearchContext.Provider value={{isOpen,toggleSearchbar}}>
            {children}
    </SearchContext.Provider>
  )
}
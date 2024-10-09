import React, { createContext, useState, useContext } from 'react';


const MenuContext= createContext()

export const UseMenu=()=>useContext(MenuContext)

export const MenuProvider=({children})=>{
    const[isOpenMenu,setIsOpenMenu]=useState(false)

    const ToggleMenu=()=>{
        setIsOpenMenu(!isOpenMenu)
    }
    console.log(isOpenMenu)


    return(
        <MenuContext.Provider
         value=
         {{isOpenMenu,
           ToggleMenu}}
        >
            {children}
        </MenuContext.Provider>
    )
}
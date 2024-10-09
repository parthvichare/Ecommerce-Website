import { createContext,useState } from "react";

export const CounterContext=createContext(null)

export const CounterProvider=(props)=>{
    const[count,setCount]=useState(7);
    return(
        <CounterContext.Provider value={{count,setCount,name:"Parth"}}>
            {props.children}
        </CounterContext.Provider>
    )
}
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterslice";
import priceReducer from "./slice/pricefilterslice"; // Corrected path

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pricefilter: priceReducer
  },
});


// Here we stored the Reducer in Redux store from where reducer update, handle all the events(like counter,addonCart,Increment,decrement)
// We used to create slice for all the features like addtoCart, wishlist, Search functionality for all


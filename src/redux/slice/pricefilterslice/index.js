import { createSlice } from "@reduxjs/toolkit";

export const priceFilterSlice = createSlice({
    name: 'pricefilter',
    initialState: 600,  // Initial state value
    reducers: {
        handleMinPriceChange: (state, action) => action.payload  // Update state with payload
    }
});

// Export actions to be used in components
export const { handleMinPriceChange } = priceFilterSlice.actions;

// Export the reducer to be added to the store
export default priceFilterSlice.reducer;

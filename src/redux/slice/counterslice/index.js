import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',          // Name of the slice
    initialState: 10,          // Initial state of the counter
    reducers: {
        increment: (state) => state + 1,   // Action to increment the counter
        decrement: (state) => state - 1    // Action to decrement the counter
    }
});

// Export actions to be used in components
export const { increment, decrement } = counterSlice.actions;

// Export reducer to be added to the store
export default counterSlice.reducer;


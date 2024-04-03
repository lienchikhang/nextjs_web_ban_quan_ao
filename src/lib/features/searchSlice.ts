import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        isOpen: false
    },
    reducers: {
        open(state, action) {
            state.isOpen = action.payload;
        }
    }
})

export const { open } = searchSlice.actions;
export default searchSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: "relevance",
  reducers: {
    setActiveSort: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setActiveSort } = sortSlice.actions;
export default sortSlice.reducer;
export const selectActiveSort = (state) => state.sort;

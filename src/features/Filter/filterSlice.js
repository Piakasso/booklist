import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filtersArray: [],
  activeFilter: "all",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    resetFilter: (state) => {
      state.activeFilter = "all";
    },
  },
});

export default filterSlice.reducer;
export const { setFilter, resetFilter } = filterSlice.actions;
export const selectActiveFilter = (state) => state.filter.activeFilter;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/useHttp/useHttp";

export const fetchSearchedBooks = createAsyncThunk(
  "search/fetchBooks",
  async (searchString, { getState }) => {
    const { request } = useHttp();
    const state = getState();
    const { sort } = state;
    const { pagination } = state.books;

    return await request(searchString, pagination, sort);
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    search: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { search } = searchSlice.actions;
export default searchSlice.reducer;
export const selectSearchString = (state) => state.search;

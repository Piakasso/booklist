import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/useHttp/useHttp";

export const fetchDetailsBook = createAsyncThunk(
  "fetchDetailsBook",
  async (id) => {
    const { requestSingleBook } = useHttp();
    return await requestSingleBook(id);
  }
);

const initialState = {
  info: {},
  status: "idle",
  error: null,
};

const detailsBookSlice = createSlice({
  name: "detailsBook",
  initialState: initialState,
  reducers: {
    resetDetails: () => initialState,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchDetailsBook.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDetailsBook.fulfilled, (state, action) => {
        const { title, description, authors, imageLinks, categories } =
          action.payload.volumeInfo;
        state.info.id = action.payload.id;
        state.info.title = title;
        state.info.status = "idle";
        state.info.description = description;
        state.info.authors = authors ? authors : ["unknown authors"];
        state.info.cover = imageLinks ? imageLinks.thumbnail : null;
        state.info.categories = categories
          ? categories
          : ["unknown categories"];
        state.status = "idle";
      })
      .addCase(fetchDetailsBook.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
      }),
});

export default detailsBookSlice.reducer;

//SELECTORS
export const { resetDetails } = detailsBookSlice.actions;
export const selectDetails = (state) => state.detailsBook.info;
export const selectDetailsStatus = (state) => state.detailsBook.status;
export const selectDetailsError = (state) => state.detailsBook.error;

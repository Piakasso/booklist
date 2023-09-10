import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchSearchedBooks, search } from "../../SearchForm/searchSlice";
import { setActiveSort } from "../../Sort/SortPanel/sortSlice";

const initialState = {
  books: [],
  totalItems: null,
  status: "idle",
  error: null,
  pagination: 0,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    incrementPagination: (state) => {
      state.pagination += 30;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchedBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchedBooks.fulfilled, (state, action) => {
        const data = action.payload.items.map((item) => {
          const { id, volumeInfo } = item;
          return {
            date: volumeInfo.publishedDate ? volumeInfo.publishedDate : 0,
            id,
            authors: volumeInfo.authors
              ? volumeInfo.authors
              : ["unknown authors"],
            title: volumeInfo.title,
            categories:
              volumeInfo.categories && volumeInfo.categories.length > 0
                ? volumeInfo.categories[0]
                : "Unknown category",
            cover: volumeInfo.imageLinks
              ? volumeInfo.imageLinks.thumbnail
              : null,
          };
        });
        state.books.push(...data);
        state.totalItems = action.payload.totalItems;
        state.status = "idle";
      })
      .addCase(fetchSearchedBooks.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
      })
      .addCase(search, () => {
        return initialState;
      })
      .addCase(setActiveSort, (state) => {
        return initialState;
      });
  },
});

export default booksSlice.reducer;
export const { incrementPagination } = booksSlice.actions;

//SELECTORS

export const selectAllBooks = (state) => state.books.books;
export const selectPagination = (state) => state.books.pagination;
export const selectCategory = (state) => state.categories;
export const selectTotalItems = (state) => state.books.totalItems;
const selectFilters = (state) => {
  let arr = state.books.books.map((item) => {
    return item.categories;
  });
  let option = new Set(arr);
  option.delete(undefined);
  option = Array.from(option);
  return option;
};

export const memoizedSelectFilters = createSelector(
  [selectFilters],
  (data) => data
);

export const selectFilteredBooks = (state, activeFilter) => {
  if (activeFilter === "all") {
    return state.books.books;
  }

  return state.books.books.filter((item) => {
    return item.categories === activeFilter;
  });
};

import { configureStore } from "@reduxjs/toolkit";

import searchSlice from "../features/SearchForm/searchSlice";
import booksSlice from "../features/Books/BooksList/booksSlice";
import filterSlice from "../features/Filter/filterSlice";
import sortSlice from "../features/Sort/SortPanel/sortSlice";
import detailsBookSlice from "../features/DetailsBook/detailsBookSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    books: booksSlice,
    filter: filterSlice,
    sort: sortSlice,
    detailsBook: detailsBookSlice,
  },
});

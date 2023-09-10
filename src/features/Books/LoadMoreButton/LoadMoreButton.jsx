import { useDispatch, useSelector } from "react-redux";
import styles from "./LoadMoreButton.module.css";

import { incrementPagination, selectPagination } from "../BooksList/booksSlice";
import {
  fetchSearchedBooks,
  selectSearchString,
} from "../../SearchForm/searchSlice";

const LoadMoreButton = () => {
  const stringQuery = useSelector(selectSearchString);
  const pagination = useSelector(selectPagination);
  const dispatch = useDispatch();
  const handleMoreBooks = () => {
    dispatch(incrementPagination());
    dispatch(fetchSearchedBooks(stringQuery, pagination));
  };
  return (
    <button className={styles.button} onClick={handleMoreBooks}>
      Load More
    </button>
  );
};

export default LoadMoreButton;

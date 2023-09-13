import { useSelector } from "react-redux";

import loader from "../../../assets/801.gif";
import styles from "./BooksList.module.css";
import SingleBook from "../SingleBook/SingleBook";

import { selectFilteredBooks, selectTotalItems } from "./booksSlice";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import { selectActiveFilter } from "../../Filter/filterSlice";
import ErrorPage from "../../ErrorPage/ErrorPage";

const BooksList = () => {
  const activeFilter = useSelector(selectActiveFilter);
  const totalItems = useSelector(selectTotalItems);
  const books = useSelector((state) =>
    selectFilteredBooks(state, activeFilter)
  );
  const status = useSelector((state) => state.books.status);
  const error = useSelector((state) => state.books.error);

  return (
    <div className={styles.listContainer}>
      {totalItems ? (
        <div>
          <span className={styles.total}>
            Total books: <span className={styles.qty}>{totalItems}</span>
          </span>
          <div className={styles.booksList}>
            {books.map((item) => (
              <SingleBook key={item.id} {...item} />
            ))}
          </div>
          <LoadMoreButton />
        </div>
      ) : status === "loading" ? (
        <div className={styles.enter}>
          <img src={loader} alt="" />
        </div>
      ) : error ? (
        <ErrorPage>{error}</ErrorPage>
      ) : (
        <div className={styles.enter}>Enter your preference</div>
      )}
    </div>
  );
};

export default BooksList;

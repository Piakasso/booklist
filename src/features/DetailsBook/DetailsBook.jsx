import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styles from "./DetailsBook.module.css";

import ErrorPage from "../ErrorPage/ErrorPage";
import loader from "../../assets/801.gif";

import {
  fetchDetailsBook,
  resetDetails,
  selectDetails,
  selectDetailsError,
  selectDetailsStatus,
} from "./detailsBookSlice";
import { selectAllBooks } from "../Books/BooksList/booksSlice";

const DetailsBook = () => {
  const { detailsBook, detailsText, imgContainer, img, titleText, loaderImg } =
    styles;

  const { slug } = useParams();
  const dispatch = useDispatch();

  const books = useSelector(selectAllBooks);
  const details = useSelector(selectDetails);
  const detailsStatus = useSelector(selectDetailsStatus);
  const detailsError = useSelector(selectDetailsError);

  useEffect(() => {
    if (Object.keys(details).length === 0 && books.length < 1) {
      dispatch(fetchDetailsBook(slug));
    }

    return () => {
      dispatch(resetDetails());
    };
  }, [dispatch, slug]);

  const { title, authors, cover, categories, description } = details;
  const htmlDesct = { __html: description };
  return (
    <div>
      {detailsStatus === "loading" && (
        <img src={loader} alt="" className={loaderImg} />
      )}
      {detailsError && <ErrorPage>{detailsError}</ErrorPage>}
      {Object.keys(details).length > 0 && (
        <div className={detailsBook}>
          <div className={imgContainer}>
            <img src={cover} alt="" className={img} />
          </div>
          <div className={detailsText}>
            <span>{authors}</span>
            <span className={titleText}>{title}</span>
            <span dangerouslySetInnerHTML={htmlDesct}></span>
            <span>{categories}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsBook;

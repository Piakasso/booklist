import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./SingleBook.module.css";
import { fetchDetailsBook } from "../../DetailsBook/detailsBookSlice";

const SingleBook = (props) => {
  const { singleBook, bookImg, bookName, bookContainer } = styles;
  const { authors, categories, cover, title, id } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showSingleCard = () => {
    dispatch(fetchDetailsBook(id));
    navigate(`${id}`);
  };

  return (
    <div className={singleBook} onClick={showSingleCard}>
      <div className={bookContainer}>
        <img
          className={bookImg}
          src={cover ? cover : "https://placehold.co/140x200"}
          alt=""
        />
      </div>
      <span>{categories}</span>
      <span className={bookName}>{title}</span>
      <span>{authors.join(", ")}</span>
    </div>
  );
};

export default SingleBook;

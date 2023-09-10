import { useDispatch, useSelector } from "react-redux";

import styles from "./SortButton.module.css";

import { selectActiveSort, setActiveSort } from "../SortPanel/sortSlice";
import {
  fetchSearchedBooks,
  selectSearchString,
} from "../../SearchForm/searchSlice";
import { resetFilter } from "../../Filter/filterSlice";

const SortButton = ({ children }) => {
  const { sortButton, sortActive } = styles;
  const searchString = useSelector(selectSearchString);

  const dispatch = useDispatch();
  const active = useSelector(selectActiveSort);

  const handleActiveSort = () => {
    dispatch(setActiveSort(children));
    dispatch(fetchSearchedBooks(searchString));
    dispatch(resetFilter());
  };

  return (
    <button
      className={
        active === children ? `${sortButton} ${sortActive}` : sortButton
      }
      onClick={handleActiveSort}
    >
      {children}
    </button>
  );
};

export default SortButton;

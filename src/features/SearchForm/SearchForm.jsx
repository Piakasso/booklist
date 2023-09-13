import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import searchImg from "../../assets/search.svg";
import styles from "./SearchForm.module.css";

import { fetchSearchedBooks, search } from "./searchSlice";
import { resetFilter } from "../Filter/filterSlice";

const SearchForm = () => {
  const { searchField, searchButton, searchForm } = styles;
  const searchString = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState(searchString);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(search(inputValue));
    dispatch(fetchSearchedBooks(inputValue));
    setInputValue("");
    dispatch(resetFilter());
    navigate("/");
  };
  return (
    <div className={searchForm}>
      <input
        className={searchField}
        type="text"
        onChange={handleInputValue}
        value={inputValue}
        onKeyDown={(e) => {
          if (e.key === "Enter" && inputValue.length > 0) {
            e.preventDefault();
            handleSubmit();
          }
        }}
      />
      <button
        className={searchButton}
        type="submit"
        onClick={handleSubmit}
        disabled={inputValue === "" ? true : false}
      >
        <img src={searchImg} alt="" />
      </button>
    </div>
  );
};

export default SearchForm;

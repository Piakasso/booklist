import { useDispatch, useSelector } from "react-redux";
import styles from "./Filter.module.css";
import { memoizedSelectFilters } from "../Books/BooksList/booksSlice";
import { selectActiveFilter, setFilter } from "./filterSlice";

const Filter = () => {
  const { filtersDropdown, filterLabel } = styles;
  const activeFilter = useSelector(selectActiveFilter);
  const filters = useSelector(memoizedSelectFilters);

  const dispatch = useDispatch();
  const handleFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <label htmlFor="dropdown" className={filterLabel}>
        Filters:
      </label>
      <select
        id="dropdown"
        className={filtersDropdown}
        value={activeFilter}
        onChange={handleFilter}
        disabled={filters.length > 0 ? false : true}
      >
        <option value="all">all</option>
        {filters.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;

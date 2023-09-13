import SearchForm from "../../features/SearchForm/SearchForm";
import Filter from "../../features/Filter/Filter";

import books from "../../assets/books.jpg";
import styles from "./SearchWidget.module.css";
import SortPanel from "../../features/Sort/SortPanel/SortPanel";

const SearchWidget = () => {
  const {
    searchWidget,
    widgetText,
    widgetTitle,
    widgetSubtitle,
    widgetOption,
    widgetImg,
  } = styles;
  return (
    <div className={searchWidget}>
      <div className={widgetText}>
        <span className={widgetTitle}>
          What book you
          <br /> looking for?
        </span>
        <span className={widgetSubtitle}>
          explore catalog and find your favourite books.
        </span>
        <SearchForm />
        <div className={widgetOption}>
          <Filter />
          <SortPanel />
        </div>
      </div>

      <img src={books} alt="" className={widgetImg} />
    </div>
  );
};

export default SearchWidget;

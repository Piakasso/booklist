import styles from "./SortPanel.module.css";
import SortButton from "../SortButton/SortButton";

const SortPanel = () => {
  return (
    <div className={styles.sortPanel}>
      <SortButton>relevance</SortButton>
      <SortButton>newest</SortButton>
    </div>
  );
};

export default SortPanel;

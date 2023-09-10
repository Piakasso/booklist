import cat from "../../assets/SadNyan.webp";
import styles from "./ErrorPage.module.css";

const ErrorPage = ({ children }) => {
  return (
    <div className={styles.errorPage}>
      <span>{children}</span>
      <img src={cat} className={styles.errorImg} alt="" />
    </div>
  );
};

export default ErrorPage;

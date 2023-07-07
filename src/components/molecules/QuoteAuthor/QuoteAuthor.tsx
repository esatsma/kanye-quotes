import AuthorImage from "../../atoms/AuthorImage/AuthorImage";
import AuthorName from "../../atoms/AuthorName/AuthorName";
import styles from "./QuoteAuthor.module.scss";

export const QuoteAuthor = () => {
  return (
    <div className={styles.author}>
      <AuthorName />
      <AuthorImage />
    </div>
  );
};

export default QuoteAuthor;

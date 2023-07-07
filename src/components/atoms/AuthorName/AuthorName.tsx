import styles from "./AuthorName.module.scss";

export const AuthorName = () => {
  return (
    <p data-testid="author-name" className={styles.authorName}>
      -- Kanye West
    </p>
  );
};

export default AuthorName;

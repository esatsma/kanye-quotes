import styles from "./AuthorName.module.scss";

export const AuthorName = ({ className }: { className?: string }) => {
  const classNames = `${className} ${styles.authorName}`;

  return (
    <p data-testid="author-name" className={classNames}>
      -- Kanye West
    </p>
  );
};

export default AuthorName;

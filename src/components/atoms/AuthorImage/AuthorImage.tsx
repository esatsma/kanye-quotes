import imageSrc from "../../../assets/kanye.jpg";
import styles from "./AuthorImage.module.scss";

export const AuthorImage = () => {
  return (
    <img
      data-testid="author-image"
      className={styles.authorImage}
      src={imageSrc}
      alt="picture of Kanye West"
      role="presentation"
    />
  );
};

export default AuthorImage;

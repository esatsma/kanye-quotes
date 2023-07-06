import imageSrc from "../../../assets/kanye.jpg";
import "./AuthorImage.scss";

export const AuthorImage = () => {
  return (
    <img
      data-testid="author-image"
      className="author-image"
      src={imageSrc}
      alt="picture of Kanye West"
      role="presentation"
    />
  );
};

export default AuthorImage;

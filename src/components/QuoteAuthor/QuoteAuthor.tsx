import AuthorImage from "../../assets/kanye.jpg";
import "./QuoteAuthor.scss";

export const QuoteAuthor = () => {
  return (
    <div className="author">
      <p className="author-name">-- Kanye West</p>
      <img
        className="author-image"
        src={AuthorImage}
        alt="picture of Kanye West"
        role="presentation"
      />
    </div>
  );
};

export default QuoteAuthor;

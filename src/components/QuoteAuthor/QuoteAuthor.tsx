import AuthorImage from "../../assets/kanye.jpg";
import "./QuoteAuthor.scss";

export const QuoteAuthor = () => {
  return (
    <div className="author">
      <p data-testid="author-name" className="author-name">
        -- Kanye West
      </p>
      <img
        data-testid="author-image"
        className="author-image"
        src={AuthorImage}
        alt="picture of Kanye West"
        role="presentation"
      />
    </div>
  );
};

export default QuoteAuthor;

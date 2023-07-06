import AuthorImage from "../../atoms/AuthorImage/AuthorImage";
import AuthorName from "../../atoms/AuthorName/AuthorName";
import "./QuoteAuthor.scss";

export const QuoteAuthor = () => {
  return (
    <div className="author">
      <AuthorName />
      <AuthorImage />
    </div>
  );
};

export default QuoteAuthor;

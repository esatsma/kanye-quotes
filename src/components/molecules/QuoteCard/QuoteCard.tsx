import QuoteIcon from "../../atoms/QuoteIcon/QuoteIcon";
import QuoteAuthor from "../QuoteAuthor/QuoteAuthor";
import "./QuoteCard.scss";

export const QuoteCard = ({ quote }: { quote: string }) => {
  return (
    <div className="card" data-testid="quotecard">
      <QuoteIcon />
      <p data-testid="quote" className="quote">
        {quote}
      </p>
      <QuoteAuthor />
    </div>
  );
};

export default QuoteCard;

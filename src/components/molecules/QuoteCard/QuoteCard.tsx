import QuoteIcon from "../../atoms/QuoteIcon/QuoteIcon";
import QuoteAuthor from "../QuoteAuthor/QuoteAuthor";
import styles from "./QuoteCard.module.scss";

export const QuoteCard = ({ quote }: { quote: string }) => {
  return (
    <div className={styles.card} data-testid="quotecard">
      <QuoteIcon className={styles.quoteIcon} />
      <p data-testid="quote" className={styles.quote}>
        {quote}
      </p>
      <QuoteAuthor />
    </div>
  );
};

export default QuoteCard;

import useKanyeQuote from "../../../hooks/useKanyeQuote";
import Loader from "../../atoms/Loader/Loader";
import QuoteCard from "../../molecules/QuoteCard/QuoteCard";
import styles from "./QuoteBlock.module.scss";

export const QuoteBlock = () => {
  const { data, refetch, status } = useKanyeQuote();
  const quote = data?.quote ? data.quote : "No quote found";

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "error") {
    return (
      <div data-testid="error">
        Apologies, something went wrong. Press the button to try again
        <button
          data-testid="button"
          type="button"
          className={styles.button}
          onClick={() => refetch()}
        >
          Quote me
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        data-testid="button"
        type="button"
        className={styles.button}
        onClick={() => refetch()}
      >
        Quote me
      </button>
      <QuoteCard quote={quote} />
    </>
  );
};

export default QuoteBlock;

import useKanyeQuote from "../../../hooks/useKanyeQuote";
import Header from "../../atoms/Header/Header";
import Loader from "../../atoms/Loader/Loader";
import QuoteCard from "../../molecules/QuoteCard/QuoteCard";
import "./QuoteBlock.scss";

export const QuoteBlock = () => {
  const { data, refetch, isLoading } = useKanyeQuote();
  const quote = data?.quote ? data.quote : "No quote found";

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <button type="button" className="button" onClick={() => refetch()}>
        Quote me
      </button>
      <QuoteCard quote={quote} />
    </>
  );
};

export default QuoteBlock;

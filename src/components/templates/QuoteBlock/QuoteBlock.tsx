import { useQuery } from "@tanstack/react-query";
import fetchKanyeQuote from "../../../service/fetchKanyeQuote";
import Loader from "../../atoms/Loader/Loader";
import QuoteCard from "../../molecules/QuoteCard/QuoteCard";
import "./QuoteBlock.scss";

export const QuoteBlock = () => {
  const { data, refetch, isLoading } = useQuery(["quote"], fetchKanyeQuote);
  const quote = data?.quote ? data.quote : "No quote found";

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <QuoteCard quote={quote} />
      <button type="button" className="button" onClick={() => refetch()}>
        Get me a new quote
      </button>
    </>
  );
};

export default QuoteBlock;

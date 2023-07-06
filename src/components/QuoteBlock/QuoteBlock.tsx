import { useQuery } from "@tanstack/react-query";
import fetchKanyeQuote from "../../service/fetchKanyeQuote";
import QuoteCard from "../QuoteCard/QuoteCard";
import "./QuoteBlock.scss";

export const QuoteBlock = () => {
  const { data, refetch, isLoading } = useQuery(["quote"], fetchKanyeQuote);
  console.log(data);
  const quote = data?.quote ? data.quote : "No quote found";

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">Kanye West</h2>
      </div>
    );
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

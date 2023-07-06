import { QueryFunction } from "@tanstack/react-query";
import {KanyeAPIResponse} from '../types/APIResponseTypes';

const fetchKanyeQuote: QueryFunction<KanyeAPIResponse, ["quote"]> = async () => {

  const apiRes = await fetch(
   "https://api.kanye.rest"
  );

  if (!apiRes.ok) {
    throw new Error(`Quote fetch went wrong`);
  }

  return apiRes.json();
};

export default fetchKanyeQuote;

import { useQuery } from "@tanstack/react-query";
import fetchKanyeQuote from "../service/fetchKanyeQuote";

export default function useKanyeQuote() {
  return useQuery(["quote"], fetchKanyeQuote);
}
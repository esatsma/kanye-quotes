import { expect, test } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useKanyeQuote from "../hooks/useKanyeQuote";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

test("gives back quote", async () => {
  fetch.mockResponseOnce(JSON.stringify({ quote: "Yay, me Kanye" }));
  const { result } = renderHook(() => useKanyeQuote(), {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    ),
  });

  await waitFor(() => expect(result.current.isSuccess).toBe(true));

  const quote = result.current;
  expect(quote?.data?.quote).toContain("Yay, me Kanye");
});

import { expect, test } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import fetchKanyeQuote from "../service/fetchKanyeQuote";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      retry: false,
    },
  },
});

test("gives back a quote", async () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      quote: "Yay me Kanye",
    })
  );
  const { result } = renderHook(() => fetchKanyeQuote(), {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    ),
  });

  await waitFor(() => {
    console.log(result.current);
    expect(result.current[1]).toBe("success");
  });

  const [quote] = result;
  expect(quote).toEqual("Hello me Kanye");
});

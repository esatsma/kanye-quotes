import { expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import QuoteBlock from "../components/templates/QuoteBlock/QuoteBlock";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useKanyeQuote from "../hooks/useKanyeQuote";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

vi.mock("../hooks/useKanyeQuote", () => ({
  default: vi.fn(),
  useKanyeQuote: vi.fn(),
}));

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default wrapper;

test("Loads with quote data", async () => {
  useKanyeQuote.mockImplementationOnce(
    vi.fn().mockReturnValueOnce({
      data: { quote: "Yay me Kanye" },
      status: "succes",
    })
  );

  const quoteBlock = render(<QuoteBlock />, { wrapper });

  const quote = await quoteBlock.findByTestId("quote");
  expect(quote.innerText).toContain("Yay me Kanye");

  quoteBlock.unmount();
});

test("shows loader when data is taking longer", async () => {
  useKanyeQuote.mockImplementationOnce(
    vi.fn().mockReturnValueOnce({
      status: "loading",
    })
  );

  const quoteBlock = render(<QuoteBlock />);
  expect(quoteBlock.findByTestId("loader")).toBeDefined();

  quoteBlock.unmount();
});

test("shows error api call goes wrong", async () => {
  useKanyeQuote.mockImplementationOnce(
    vi.fn().mockReturnValueOnce({
      status: "error",
    })
  );

  const quoteBlock = render(<QuoteBlock />);
  const error = await quoteBlock.findByTestId("error");
  expect(error.innerText).toContain(
    "Apologies, something went wrong. Press the button to try again"
  );

  quoteBlock.unmount();
});

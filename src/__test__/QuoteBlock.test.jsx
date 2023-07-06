import { expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import QuoteBLock from "../components/QuoteBlock/Quoteblock";

test("Displays an image of Kanye", async () => {
  vi.mock("@tanstack/react-query", async () => {
    const reactQuery =
      (await vi.importActual) <
      typeof import("@tanstack/react-query") >
      "@tanstack/react-query";
    return {
      ...reactQuery, // return most of the module unchanged
      useQuery: vi.fn().mockReturnValue({
        data: { quote: "Mocked quote" },
        refetch: vi.fn(),
        isLoading: false,
      }),
    };
  });

  const quoteAuthor = render(<QuoteAuthor />);
  const authorImage = await quoteAuthor.findByTestId("author-image");
  expect(authorImage.src).toContain("kanye.jpg");

  quoteAuthor.unmount();
});

test("Displays Kanye's name", async () => {
  const quoteAuthor = render(<QuoteAuthor />);
  const authorName = await quoteAuthor.findByTestId("author-name");
  expect(authorName.innerText).toContain("Kanye West");
});

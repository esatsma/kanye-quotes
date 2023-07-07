import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import QuoteAuthor from "../components/molecules/QuoteAuthor/QuoteAuthor";

test("Displays an image of Kanye", async () => {
  const quoteAuthor = render(<QuoteAuthor />);
  const authorImage = await quoteAuthor.findByTestId("author-image");
  expect(authorImage.src).toContain("kanye.jpg");

  quoteAuthor.unmount();
});

test("Displays Kanye's name", async () => {
  const quoteAuthor = render(<QuoteAuthor />);
  const authorName = await quoteAuthor.findByTestId("author-name");
  expect(authorName.innerText).toContain("Kanye West");

  quoteAuthor.unmount();
});

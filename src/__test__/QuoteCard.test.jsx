import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import QuoteCard from "../components/molecules/QuoteCard/QuoteCard";

test("Displays a quote", async () => {
  const quoteCard = render(<QuoteCard quote="Kanye Lives" />);

  const quote = await quoteCard.findByTestId("quote");
  expect(quote.innerText).toContain("Kanye Lives");
});

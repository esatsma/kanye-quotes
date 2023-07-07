import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QuoteBlock from "./components/templates/QuoteBlock/QuoteBlock";
import "./App.scss";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <QuoteBlock />
        <a
          href="https://github.com/esatsma/kanye-quotes"
          target="blank"
          className="github"
        ></a>
      </div>
    </QueryClientProvider>
  );
}

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QuoteBlock from "./components/templates/QuoteBlock/QuoteBlock";
import "./app.scss";

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
        <header>
          <h1>Quotes by Kanye</h1>
        </header>
        <QuoteBlock />
      </div>
    </QueryClientProvider>
  );
}

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QuoteBlock from "./components/templates/QuoteBlock/QuoteBlock";
import "./App.scss";
import Header from "./components/atoms/Header/Header";
import { Footer } from "./components/atoms/Footer/footer";

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
        <Header />
        <QuoteBlock />
        <a
          href="https://github.com/esatsma/kanye-quotes"
          target="blank"
          className="github"
        ></a>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;

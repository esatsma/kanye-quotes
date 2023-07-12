import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QuoteBlock from "./components/pages/QuoteBlock/QuoteBlock";
import "./App.scss";
import Header from "./components/atoms/Header/Header";
import Footer from "./components/atoms/Footer/Footer";

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
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;

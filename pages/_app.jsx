import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import "../styles/globals.scss";
import { QueryClientProvider, QueryClient } from "react-query";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient({
    refetchOnWindowFocus: false,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </QueryClientProvider>
  );
}

export default MyApp;

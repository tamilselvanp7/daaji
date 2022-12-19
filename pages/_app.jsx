import "../styles/globals.css";
import { CookiesProvider } from "react-cookie";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import ScrollToTop from "../components/ScrollToTop";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-5NJBPB5" });
  }, []);

  return (
    <CookiesProvider>
      <ScrollToTop />
      <Component {...pageProps} />
    </CookiesProvider>
  );
}

export default MyApp;

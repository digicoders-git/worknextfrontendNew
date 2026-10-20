import "./App.css";
import { TranslateProvider } from "./Component/GoogleTranslateProvider";
import SidebarText from "./Component/Lebal";
import Navbar from "./Component/Navbar";
import ScrollToTopOnRoute from "./Component/ScrollToTopOnRoute";
import Router from "./Page/Router";
import ScrollToTopButton from "./Page/ScrollToTop";

// ✅ ADD THESE IMPORTS
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  // ✅ GET CURRENT ROUTE
  const location = useLocation();

  // ✅ GOOGLE ANALYTICS PAGE TRACKING
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-LDPZFZDNPZ", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return (
    <>
      <TranslateProvider>
        <ScrollToTopOnRoute />
        <SidebarText />
        <Navbar />
        <Router />
        <ScrollToTopButton />
      </TranslateProvider>
    </>
  );
}

export default App;

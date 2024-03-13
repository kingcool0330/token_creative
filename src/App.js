import React, { useState, useEffect } from "react";

// load the pages
import Header from "./pages/Header";
import IntroPage from "./pages/IntroPage";
import AboutPage from "./pages/AboutPage";
import GeneratePage from "./pages/GeneratePage";
import FaqPage from "./pages/FaqPage";
import Footer from "./pages/Footer";
import LoadingPage from "./pages/LoadingPage";

// load css
import "./App.scss";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage isLoading={isLoading} />;
  }

  return (
    <div className="main">
      <Header />
      <div className="main-background">
        <IntroPage />
        <AboutPage />
        <GeneratePage />
        <FaqPage />
        <Footer />
      </div>
    </div>
  );
};

export default App;

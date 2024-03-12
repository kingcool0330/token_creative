import React, { useState, useEffect } from "react";

// load the pages
import Header from "./pages/Header";
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
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
    </div>
  );
};

export default App;

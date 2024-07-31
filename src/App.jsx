import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import PreLoader from "./components/PreLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <PreLoader /> : <Home />}</>;
}

export default App;

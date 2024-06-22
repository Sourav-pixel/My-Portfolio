import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/global";
import Loader from "./components/Loader/loader";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);

  // Function to simulate loading
  const simulateLoading = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 3000); // Simulate a loading time
    });
  };

  useEffect(() => {
    // Simulate loading and then set loading state to false
    simulateLoading().then(() => setLoading(false));
  }, []);

  return (
    <>
      <GlobalStyle />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

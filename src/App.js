import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

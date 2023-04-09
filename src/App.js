import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import Main from "./components/Main/Main";
import LoginPageContainer from "./components/LoginPage/LoginPageContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="app-wrapper-login">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<LoginPageContainer />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

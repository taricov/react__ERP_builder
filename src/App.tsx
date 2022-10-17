import React from "react";
import AppMenu from "./components/AppMenu";
import BuilderCol from "./components/BuilderCol";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormBuildingPage from "./pages/FormBuildingPage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/builder" element={<FormBuildingPage />} />
      </Routes>
      {/* <Footer /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;

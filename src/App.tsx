import React from "react";
import AppMenu from "./components/AppMenu";
import BuilderCol from "./components/BuilderCol";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormBuildingPage from "./pages/FormBuildingPage";
import HomePage from "./pages/HomePage";
import StatusBar from "./components/StatusBar";
import AppTopBar from "./components/AppTopBar";
function App() {
  return (
    <div className="relative">
      <AppTopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/builder" element={<FormBuildingPage />} />
      </Routes>
      <StatusBar />
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormBuildingPage from "./pages/FormBuildingPage";
import HomePage from "./pages/HomePage";
import StatusBar from "./components/StatusBar";
import AppTopBar from "./components/AppTopBar";
import AddNewModulePage from "./pages/AddNewModulePage";
import ShortcutsModal from "./components/ShortcutsModal";

function App() {
  return (
    <div className="">
      <AppTopBar />
      <ShortcutsModal />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="app_name/builder" element={<FormBuildingPage />} />
        <Route path="/add_app" element={<AddNewModulePage />} />
      </Routes>
      <StatusBar />
    </div>
  );
}

export default App;

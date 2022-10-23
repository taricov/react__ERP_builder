import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormBuildingPage from "./pages/FormBuildingPage";
import HomePage from "./pages/HomePage";
import StatusBar from "./components/StatusBar";
import AppTopBar from "./components/AppTopBar";
import AddNewModulePage from "./pages/AddNewModulePage";
import ShortcutsModal from "./components/ShortcutsModal";
import ModulePage from "./pages/ModulePage";
import LoginPage from "./pages/LoginPage";
import Error404Page from "./pages/Error404Page";

function App() {
  return (
    <div className="">
      <AppTopBar />
      <ShortcutsModal />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="app_name/builder" element={<FormBuildingPage />} />
        <Route path="/add_app" element={<AddNewModulePage />} />
        <Route path="/module_name" element={<ModulePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/error" element={<Error404Page />} />
      </Routes>
      <StatusBar />
    </div>
  );
}

export default App;

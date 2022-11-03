import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AppTopBar from "./components/AppTopBar";
import ShortcutsModal from "./components/ShortcutsModal";
import StatusBar from "./components/StatusBar";
import NotesApp from "./components/helper_apps/NotesApp";
import TodoApp from "./components/helper_apps/TodoApp";
import AddNewRowPlaceholderPage from "./pages/AddNewRowPlaceholderPage";
import Error404Page from "./pages/Error404Page";
import ExistingRowViewPlaceholderPage from "./pages/ExistingRowViewPlaceholderPage";
import FormBuildingPage from "./pages/FormBuildingPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ModulePage from "./pages/ModulePage";
import RegistrationPage from "./pages/RegistrationPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  // const [darkMode, setDarkMode] = useState();

  const url = useLocation();
  const currPage = url.pathname;
  const [hideBars, setHideBars] = useState(
    currPage === "/register" || currPage === "/login" ? true : false
  );
  return (
    <div className={"light"}>
      {/* <NotesApp /> */}
      <TodoApp />
      {!hideBars ? (
        <>
          <AppTopBar />
        </>
      ) : null}
      <ShortcutsModal />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app_name/builder" element={<FormBuildingPage />} />
        {/* <Route path="/new_app" element={<AddNewModulePage />} /> */}
        <Route path="/app_name" element={<ModulePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/row_data" element={<ExistingRowViewPlaceholderPage />} />
        <Route path="/add_row" element={<AddNewRowPlaceholderPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
      {/* <NavBar /> */}
      {!hideBars ? (
        <>
          <StatusBar />
        </>
      ) : null}
    </div>
  );
}

export default App;

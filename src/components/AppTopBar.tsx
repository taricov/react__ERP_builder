import React from "react";
import AppMenuBar from "./AppMenuBar";
import AppToolBar from "./AppToolBar";

const AppTopBar = () => {
  return (
    <div className="flex flex-col">
      <AppMenuBar />
      <AppToolBar />
    </div>
  );
};

export default AppTopBar;

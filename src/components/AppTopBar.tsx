import React from "react";
import AppMenuBar from "./AppMenuBar";
import AppToolBar from "./AppToolBar";

const AppTopBar = () => {
  return (
    <div className="flex flex-col text-bg-rev fixed top-0 z-10 w-full shadow-sm">
      <AppMenuBar />
      <AppToolBar />
    </div>
  );
};

export default AppTopBar;

import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";

const AppToolBar = () => {
  return (
    <div className="flex">
      <div className="text-lg font-bold bg-slate-400 p-2 cursor-pointer hover:bg-slate-100 transition-colors duration-200">
        <AiOutlineArrowLeft />
      </div>
      <div className="text-lg font-bold bg-slate-400 p-2 cursor-pointer hover:bg-slate-100 transition-colors duration-200">
        <BiRefresh />
      </div>
    </div>
  );
};

export default AppToolBar;

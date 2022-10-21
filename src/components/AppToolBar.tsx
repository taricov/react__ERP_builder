import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import StatusBarComp from "./StatusBarComp";

const AppToolBar = () => {
  return (
    <div className="flex bg-primary-700">
      <StatusBarComp Icon={AiOutlineArrowLeft} text="Back" />
      <StatusBarComp Icon={BiRefresh} text="Sync" />
      {/* <div className="text-lg font-bold bg-slate-400 p-2 cursor-pointer hover:bg-slate-100 transition-colors duration-200">
        <AiOutlineArrowLeft />
      </div> */}
      {/* <div className="text-lg font-bold bg-slate-400 p-2 cursor-pointer hover:bg-slate-100 transition-colors duration-200">
        <BiRefresh /> */}
      {/* </div> */}
      {/* Spotlight/Global SearchBar */}
      {/* Login */}
      {/* Notification */}
    </div>
  );
};
//TODO: StatusBar: Notification (OtherInfo)

export default AppToolBar;

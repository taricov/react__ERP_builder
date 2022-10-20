import React from "react";
import { BiStopwatch } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

const HelperTools = () => {
  return (
    <div className="flex gap-1">
      <p className="sys__comp flex gap-1">
        <span className="px-2 flex items-center content-center ">
          <MdOutlineTipsAndUpdates />
        </span>
      </p>
      <p className="sys__comp flex gap-1">
        <span className="px-2 flex items-center content-center ">
          <CgNotes />
        </span>
      </p>
      <p className="sys__comp flex gap-1">
        <span className="px-2 flex items-center content-center ">
          <BiStopwatch />
        </span>
      </p>
    </div>
  );
};

export default HelperTools;

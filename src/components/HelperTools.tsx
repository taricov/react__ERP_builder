import React from "react";
import { BiStopwatch, BiSupport } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import StatusBarComp from "./StatusBarComp";

const HelperTools = () => {
  return (
    <div className="flex gap-0.5">
      <StatusBarComp
        where="Status"
        Icon={MdOutlineTipsAndUpdates}
        text="Help"
      />
      <StatusBarComp where="Status" Icon={CgNotes} text="Notes" />
      <StatusBarComp where="Status" Icon={BiStopwatch} text="Watch" />
      <StatusBarComp where="Status" Icon={BiSupport} text="Support" />
      <StatusBarComp where="Status" Icon={VscFeedback} text="Feedback" />
    </div>
  );
};

export default HelperTools;

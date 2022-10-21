import React from "react";
import { BiStopwatch, BiSupport } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import StatusBarComp from "./StatusBarComp";

const HelperTools = () => {
  return (
    <div className="flex gap-0.5">
      <StatusBarComp Icon={MdOutlineTipsAndUpdates} text="Help" />
      <StatusBarComp Icon={CgNotes} text="Notes" />
      <StatusBarComp Icon={BiStopwatch} text="Watch" />
      <StatusBarComp Icon={BiSupport} text="Support" />
      <StatusBarComp Icon={VscFeedback} text="Feedback" />
    </div>
  );
};

export default HelperTools;

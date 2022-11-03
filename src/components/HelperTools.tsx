import React from "react";
import { BiStopwatch, BiSupport } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import {
  MdOutlineCalendarViewMonth,
  MdOutlineTipsAndUpdates,
} from "react-icons/md";
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
      <StatusBarComp
        where="Status"
        Icon={CgNotes}
        text="Notes"
        NoToolTip={true}
      />
      <StatusBarComp
        where="Status"
        Icon={BiStopwatch}
        text="Watch"
        NoToolTip={true}
      />
      <StatusBarComp
        where="Status"
        Icon={BiSupport}
        text="Support"
        NoToolTip={true}
      />
      <StatusBarComp
        where="Status"
        Icon={MdOutlineCalendarViewMonth}
        text="Calendar"
        NoToolTip={true}
      />
      <StatusBarComp
        where="Status"
        Icon={VscFeedback}
        text="Feedback"
        NoToolTip={true}
      />
    </div>
  );
};

export default HelperTools;

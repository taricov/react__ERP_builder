import React, { useState } from "react";
import { AiOutlineCheck, AiOutlineExclamationCircle } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
// import { FiDatabase } from "react-icons/fi";
import { MdMemory } from "react-icons/md";
import StatusBarComp from "./StatusBarComp";

let dbConsumed = "0.3/5MB";
let memoryConsumed = "2/10MB";

const SystemInfo = () => {
  const [updated, setUpdated] = useState(true);
  return (
    <div className="flex gap-0.5">
      <StatusBarComp Icon={FaDatabase} text={dbConsumed} />
      <StatusBarComp Icon={MdMemory} text={memoryConsumed} />
      <StatusBarComp
        rightPad="pr-1"
        Icon={updated ? AiOutlineCheck : AiOutlineExclamationCircle}
        text={updated ? "Updated" : "New Update"}
        statusColor={!updated ? "text-red-600" : "text-green-700"}
      />
    </div>
  );
};

export default SystemInfo;

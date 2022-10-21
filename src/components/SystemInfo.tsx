import React from "react";
import { AiOutlineCheck, AiOutlineExclamationCircle } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { GrUpdate } from "react-icons/gr";
import { MdMemory } from "react-icons/md";
import StatusBarComp from "./StatusBarComp";

let dbConsumed = "0.3/5MB";
let memoryConsumed = "2/10MB";
let updated = false;

const SystemInfo = () => {
  return (
    <div className="flex gap-0.5">
      <StatusBarComp Icon={FaDatabase} text={dbConsumed} />
      <StatusBarComp Icon={MdMemory} text={memoryConsumed} />
      <StatusBarComp
        Icon={updated ? AiOutlineCheck : AiOutlineExclamationCircle}
        text={updated ? "Updated" : "New Update"}
        statusColor={!updated ? "text-red-600" : ""}
      />
    </div>
  );
};

export default SystemInfo;

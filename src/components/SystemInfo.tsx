import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";

const SystemInfo = () => {
  return (
    <div className="h-full flex items-center p-1 content-center gap-3 text-xs hover:bg-slate-900 cursor-pointer transition-colors duration-200">
      <p className="storage__comp">
        Disk:
        <span className="storage__status">0.7</span>/
        <span className="storage__total">10MB</span>
      </p>
      <p className="sys__comp">
        Memory:
        <span className="used__memory">2</span>/
        <span className="total__memory">8MB</span>
      </p>
      <p className="sys__comp flex gap-1">
        <span className="update__icon flex items-center content-center ">
          <AiOutlineCheck />
          <GrUpdate />
        </span>
        <span className="update__status">Updated</span>
      </p>
    </div>
  );
};

export default SystemInfo;

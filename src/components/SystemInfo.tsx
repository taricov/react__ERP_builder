import React from "react";

const SystemInfo = () => {
  return (
    <div className="h-full flex items-center p-1 content-center gap-3 text-xs hover:bg-slate-900 cursor-pointer transition-colors duration-200">
      <p className="sys__status">
        Disk:
        <span className="used__storage">0.7MB</span>/
        <span className="total__storage">10MB</span>
      </p>
      <p className="sys__status">
        Memory:
        <span className="used__memory">2MB</span>/
        <span className="total__memory">80000 Mb</span>
      </p>
    </div>
  );
};

export default SystemInfo;

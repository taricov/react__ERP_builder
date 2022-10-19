import React from "react";

const SystemInfo = () => {
  return (
    <div className="flex items-start- content-center">
      <p className="sys__status">
        Disk:
        <span className="used__storage">750Mb</span>/
        <span className="total__storage">10000Mb</span>
      </p>
      <p className="sys__status">
        Memory:
        <span className="used__memory">2000 Mb</span>/
        <span className="total__memory">80000 Mb</span>
      </p>
    </div>
  );
};

export default SystemInfo;

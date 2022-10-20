import React from "react";
import SiteCompBreadCrumbs from "./site_compsnents/SiteCompBreadCrumbs";
import SystemInfo from "./SystemInfo";

//TODO: StatusBar: DropShadow Top
//TODO: StatusBar: Notification (OtherInfo)
//TODO: StatusBar: SystemInfoComp
const StatusBar = () => {
  return (
    <div className="fixed buttom-0 flex items-center justify-start gap-2 w-full text-sm text-white bg-gradient-to-r from-skin-hue1 to-skin-hue2 shadow-lg shadow-orange-900">
      <div className="min-w-fit">Some infomation will go here!</div>
      <SiteCompBreadCrumbs />
      <div className="min-w-fit">
        <SystemInfo />
      </div>
    </div>
  );
};

export default StatusBar;

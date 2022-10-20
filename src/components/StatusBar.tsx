import React from "react";
import HelperTools from "./HelperTools";
import SiteCompBreadCrumbs from "./site_compsnents/SiteCompBreadCrumbs";
import SystemInfo from "./SystemInfo";

//TODO: StatusBar: DropShadow Top
//TODO: StatusBar: Notification (OtherInfo)
//TODO: StatusBar: SystemInfoComp
const StatusBar = () => {
  return (
    <div className="STATUS flex items-center justify-start gap-2 w-full text-sm text-white bg-gradient-to-r from-skin-hue1 to-skin-hue2 shadow-lg shadow-orange-900">
      <HelperTools />
      <SiteCompBreadCrumbs />
      <SystemInfo />
    </div>
  );
};

export default StatusBar;

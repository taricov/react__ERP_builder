import React from "react";
import HelperTools from "./HelperTools";
import SiteCompBreadCrumbs from "./site_compsnents/SiteCompBreadCrumbs";
import SystemInfo from "./SystemInfo";
const NavBar = () => {
  return (
    <div className="fixed bottom-5 flex items-center justify-start gap-2 w-full text-sm text-skin-cta-dark bg-gradient-to-r from-skin-hue to-skin-hue2 shadow-statusBar">
      <SiteCompBreadCrumbs />
      <SystemInfo />
    </div>
  );
};

export default NavBar;

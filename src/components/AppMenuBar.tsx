import React from "react";
import SiteCompMenu from "./site_compsnents/SiteCompMenu";

const fileMenu = [
  { title: "title1", href: "hrer1" },
  { title: "title2", href: "hrer2" },
  { title: "title3", href: "hrer3" },
];

const AppMenuBar = () => {
  return (
    <div className="w-full flex items-center content-start bg-primary-800">
      <SiteCompMenu buttonTitle="File" w={100} menuItems={fileMenu} />
      <SiteCompMenu buttonTitle="File" w={100} menuItems={fileMenu} />
      <SiteCompMenu buttonTitle="File" w={100} menuItems={fileMenu} />
      <SiteCompMenu buttonTitle="File" w={100} menuItems={fileMenu} />
      <SiteCompMenu buttonTitle="File" w={100} menuItems={fileMenu} />
    </div>
  );
};

export default AppMenuBar;

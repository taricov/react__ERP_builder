import { Indicator } from "@mantine/core";
import React from "react";
import SiteCompMenu from "./site_compsnents/SiteCompMenu";

const fileMenu = [
  { title: "title1", href: "hrer1" },
  { title: "title2", href: "hrer2" },
  { title: "title3", href: "hrer3" },
];

const AppMenuBar = () => {
  return (
    <div className="w-full flex items-center  bg-primary-800">
      <div className="flex items-center flex-1">
        <SiteCompMenu buttonTitle="File" w={100} menuItems={fileMenu} />
        <SiteCompMenu buttonTitle="File" w={100} menuItems={fileMenu} />
        <SiteCompMenu buttonTitle="File" w={100} menuItems={fileMenu} />
        <SiteCompMenu buttonTitle="File" w={100} menuItems={fileMenu} />
        <SiteCompMenu buttonTitle="File" w={100} menuItems={fileMenu} />
      </div>
      <div className="flex pr-5">
        <Indicator
          processing
          color={"green"}
          position="middle-end"
          offset={-5}
          size={6}
        >
          <SiteCompMenu buttonTitle="Hi, Taric" w={60} menuItems={fileMenu} />
          {/* <div className="flex">Hi, Taric</div> */}
        </Indicator>
      </div>
    </div>
  );
};

export default AppMenuBar;

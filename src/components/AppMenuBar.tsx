import { Indicator } from "@mantine/core";
import React from "react";
import { IoCompassOutline } from "react-icons/io5";
import SiteCompMenu from "./site_compsnents/SiteCompMenu";

const userMenu = [
  { title: "Profile", href: "#" },
  { title: "Settings", href: "#" },
  { title: "What's New", href: "#" },
  { title: "Log out", href: "#" },
];
const fileMenu = [
  { title: "New Module", href: "#" },
  { title: "Dashboard", href: "#" },
  { title: "Refresh", href: "#" },
  { title: "Services", href: "#" },
  { title: "Sleep", href: "#" },
  { title: "Quit", href: "#" },
];
const appMenu = [
  { title: "User Guide", href: "#" },
  { title: "Updates", href: "#" },
  { title: "About", href: "#" },
];
const goToMenu = [
  { title: "Go...", href: "#" },
  { title: "Recently Visited", href: "#" },
];
const AppMenuBar = () => {
  // const visitedURLs = useRecentlyVisitedURLs();
  // console.log(visitedURLs);
  return (
    <div className="w-full flex items-center bg-primary-800 dark:bg-none">
      <div className="flex items-center flex-1">
        <SiteCompMenu buttonTitle="File" w={100} menuItems={fileMenu} />
        <SiteCompMenu buttonTitle="App" w={100} menuItems={appMenu} />
        <SiteCompMenu buttonTitle="Go To" w={100} menuItems={goToMenu} />
      </div>
      <div className="flex pr-5">
        <Indicator
          processing
          color={"green"}
          position="middle-end"
          offset={-5}
          size={6}
        >
          <SiteCompMenu buttonTitle="Hi, Taric" w={80} menuItems={userMenu} />
          {/* <div className="flex">Hi, Taric</div> */}
        </Indicator>
      </div>
    </div>
  );
};

export default AppMenuBar;

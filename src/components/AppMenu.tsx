import React from "react";
import AppMenuRow from "./AppMenuRow";
import { GiHamburgerMenu } from "react-icons/gi";

function AppMenu() {
  return (
    <div className="flex flex-col">
      <AppMenuRow Icon={GiHamburgerMenu} title={"Hello"} />
    </div>
  );
}

export default AppMenu;

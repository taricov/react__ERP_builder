import React from "react";
import AppMenuRow from "./AppMenuRow";

import { Bars4Icon } from "@heroicons/react/24/outline";

function AppMenu() {
  return (
    <div className="flex flex-col">
      <AppMenuRow Icon={Bars4Icon} title={"Hello"} />
    </div>
  );
}

export default AppMenu;

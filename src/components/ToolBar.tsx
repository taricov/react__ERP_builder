import React from "react";
import { FiSearch } from "react-icons/fi";
import SiteCompSearchBar from "./site_compsnents/SiteCompSearchBar";
import ToolBarFilters from "./ToolBarFilters";
import { BiRefresh } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import SiteCompTooltip from "./site_compsnents/SiteCompTooltip";

//TODO: GO TO
//TODO: Notification
//TODO: Search to openSpotLight
//TODO: SpotLight Actions Shortcuts + GO TO
//TODO: Sort
//TODO: Help/SortCuts/Guide/Tour
//TODO: Universal Add Button (not in Builder)
//TODO: SplitView

const ToolBar = () => {
  return (
    <div className="flex gap-2 items-end">
      <ToolBarFilters />
      <SiteCompSearchBar
        label="Search Bar"
        placeholder="Search..."
        TheIcon={FiSearch}
      />
    </div>
  );
};

export default ToolBar;

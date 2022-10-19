import React from "react";
import { FiSearch } from "react-icons/fi";
import SiteCompSearchBar from "./site_compsnents/SiteCompSearchBar";
import ToolBarFilters from "./ToolBarFilters";

//TODO: Search
//TODO: GO TO
//TODO: Notification
//TODO: Filter
//TODO: Sort
//TODO: IconSize
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

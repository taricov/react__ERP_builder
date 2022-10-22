import React from "react";
import { FiSearch } from "react-icons/fi";
import SiteCompSearchBar from "./site_compsnents/SiteCompSearchBar";
import FunctionsBarFilters from "./FunctionsBarFilters";
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

const FunctionsBar = () => {
  return (
    <div className="flex gap-2 px-2 pb-2 items-end text-cta-dark bg-primary-200 w-fit">
      <FunctionsBarFilters />
      <FunctionsBarFilters />
      <SiteCompSearchBar
        label="Search Bar"
        placeholder="Search..."
        TheIcon={FiSearch}
      />
    </div>
  );
};

export default FunctionsBar;

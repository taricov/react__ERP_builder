import React from "react";
import SiteCompDatePicker from "./site_compsnents/SiteCompDatePicker";
import SiteCompMultiSelect from "./site_compsnents/SiteCompMultiSelect";
import SiteCompDivider from "./site_compsnents/SiteCompDivider";
import { FiFilter } from "react-icons/fi";

const data = [
  { value: "react", label: "React" },
  { value: "ng", label: "Angular", disabled: true },
  { value: "svelte", label: "Svelte" },
  { value: "vue", label: "Vue" },
  { value: "riot", label: "Riot" },
  { value: "next", label: "Next.js" },
  { value: "blitz", label: "Blitz.js" },
];
const ToolBarFilters = () => {
  return (
    <div>
      {/* filters block */}
      <div className="w-1/3">
        <SiteCompDivider pos="left" TheIcon={FiFilter} />
        <div className="w-full p-2 flex bg-slate-100 rounded-panel">
          <SiteCompDatePicker label="Date" placeholder="Select Date Range" />
          <SiteCompMultiSelect
            data={data}
            label="Status"
            placeholder="Select Status"
            // desc="Filter with"
          />
          <SiteCompMultiSelect
            data={data}
            label="Tags"
            placeholder="Select Tags"
            // desc="Filter with"
          />
        </div>
      </div>
      {/* search block */}
      <div className="w-1/3"></div>
    </div>
  );
};

export default ToolBarFilters;

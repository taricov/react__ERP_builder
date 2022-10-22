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
const FunctionsBar = () => {
  return (
    <div className="text-dimmed">
      <SiteCompDivider title="Filter" pos="left" TheIcon={FiFilter} />
      <div className="w-fit p-2 m-0 flex bg-primary-300 rounded-panel">
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
  );
};

export default FunctionsBar;

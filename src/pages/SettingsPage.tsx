import React from "react";
import SettingsRow from "../components/SettingsRow";
import SettingsSection from "../components/SettingsSection";
import SiteCompSlider from "../components/site_compsnents/SiteCompSlider";
import SiteCompTextEditor from "../components/site_compsnents/SiteCompTextEditor";

const SettingsPage = () => {
  return (
    <div className="h-screen w-full flex items-start justify-start pt-20">
      <div className="h-full w-4/5 flex items-start justify-start gap-10 m-auto flex-wrap sm:flex-nowrap">
        <SettingsSection title="Display">
          <SettingsRow
            label="somethins"
            comp={<SiteCompSlider />}
            desc="Something you should know .. did you noticed!"
            helptip="omething you should knowomething you should knowomething you should knowomething you should knowomething you should know"
          />
          <SettingsRow label="somethins" comp={<SiteCompSlider />} />
          <SettingsRow label="somethins" comp={<SiteCompSlider />} />
          <SettingsRow label="somethins" comp={<SiteCompSlider />} />
        </SettingsSection>
        <SettingsSection title="Module">
          <SettingsRow label="Module something" comp={<SiteCompSlider />} />
        </SettingsSection>
      </div>
      <SiteCompTextEditor />
    </div>
  );
};

export default SettingsPage;

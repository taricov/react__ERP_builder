import React from "react";
import SettingsRow from "../components/SettingsRow";
import SettingsSection from "../components/SettingsSection";
import SiteCompSearchBar from "../components/site_compsnents/SiteCompSearchBar";
import SiteCompSlider from "../components/site_compsnents/SiteCompSlider";
import SiteCompCalendar from "../components/site_compsnents/SiteCompCalendar";
import SiteCompToggle from "../components/site_compsnents/SiteCompToggle";
import SiteCheckboxComp from "../components/site_compsnents/SiteCompCheckbox";
import SiteCompCheckbox from "../components/site_compsnents/SiteCompCheckbox";

const SettingsPage = () => {
  return (
    <div className="h-screen w-full flex items-start justify-start pt-20">
      <div className="h-full w-4/5 flex items-start justify-start gap-10 m-auto flex-wrap sm:flex-nowrap">
        <SettingsSection title="Global Settings">
          <SettingsRow
            label="Show/Hide Menu Bar"
            comp={<SiteCompToggle label="" disabled={false} />}
            desc="Menu Bar contains the app menus and your login status"
            // helptip="omething you should knowomething you should knowomething you should knowomething you should knowomething you should know"
          />
          <SettingsRow label="Show/Hide Menu Bar" comp={<SiteCompSlider />} />
          <SettingsRow label="somethins" comp={<SiteCompSlider />} />
          <SettingsRow label="somethins" comp={<SiteCompSlider />} />
        </SettingsSection>
        <SettingsSection title="Display">
          <SettingsRow label="Module something" comp={<SiteCompSlider />} />
        </SettingsSection>
      </div>
      {/* <SiteCompCalendar /> */}
    </div>
  );
};

export default SettingsPage;

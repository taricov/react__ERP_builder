import React, { useCallback, useEffect, useState } from "react";
import ShortcutsRow from "./ShortcutsRow";
import ShortcutsSection from "./ShortcutsSection";
import SiteCompModal from "./site_compsnents/SiteCompModal";

const ShortcutsModal = () => {
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    let pressed = e.key;
    if ((e.metaKey || e.ctrlKey) && pressed === "/") {
      setOpened(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const [opened, setOpened] = useState(false);
  return (
    <>
      <SiteCompModal opened={opened} setOpened={setOpened}>
        <div className="FFF h-5/6 w-full bg-gradient-to-r from-skin-hue2 to-skin-hue0">
          <div className="text-center w-full">
            <h1 className="text-center font-bold text-xl px-3 py-2 bg-primary-200 w-fit rounded-panel m-auto cursor-pointer shadow-md">
              Site Shortcuts
            </h1>
          </div>
          <div className="flex item-start justify-center w-full flex-wrap">
            <ShortcutsSection title="Quick Access">
              <ShortcutsRow desc="gsfdsfs effe" shCuts={["M", "T", "3"]} />
            </ShortcutsSection>
            <ShortcutsSection title="Edit Mode">
              <ShortcutsRow desc="gsfdsfs effe" shCuts={["M", "T", "3"]} />
            </ShortcutsSection>
            <ShortcutsSection title="Configure on the fly">
              <ShortcutsRow desc="gsfdsfs effe" shCuts={["M", "T", "3"]} />
            </ShortcutsSection>
          </div>
        </div>
      </SiteCompModal>
    </>
  );
};

export default ShortcutsModal;

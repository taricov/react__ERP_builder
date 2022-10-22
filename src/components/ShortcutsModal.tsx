import React, { useCallback, useEffect, useState } from "react";
import ShortcutsSections from "./ShortcutsSections";
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
        <div className="FFF w-4/5 h-5/6 ">
          <h1 className="">Site Shortcuts</h1>
          <ShortcutsSections title="Find And More" />
        </div>
      </SiteCompModal>
    </>
  );
};

export default ShortcutsModal;

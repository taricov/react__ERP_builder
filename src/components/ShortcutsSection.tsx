import React from "react";
import ShortcutsRow from "./ShortcutsRow";

interface Props {
  title: string;
}

const ShortcutsSection = ({ title }: Props) => {
  return (
    <>
      <div className="w-full py-2 flex flex-col items-start border-t-1">
        <h3 className="w-full mb-2 font-">{title}</h3>
        <ShortcutsRow desc="gsfdsfs effe" shCuts={["M", "T", "3"]} />
      </div>
    </>
  );
};

export default ShortcutsSection;

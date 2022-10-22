import React from "react";
import ShortCutsRow from "./ShortCutsRow";

interface Props {
  title: string;
}

const ShortcutsSections = ({ title }: Props) => {
  return (
    <>
      <div className="">
        <h3 className="w-full">{title}</h3>
        <ShortCutsRow desc="gsfdsfs effe" shCuts={["M", "T", "3"]} />
      </div>
    </>
  );
};

export default ShortcutsSections;

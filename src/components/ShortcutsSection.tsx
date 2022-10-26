import React from "react";
import ShortcutsRow from "./ShortcutsRow";

interface Props {
  title: string;
  children: JSX.Element;
}

const ShortcutsSection = ({ title, children }: Props) => {
  return (
    <>
      <div className="w-full py-2 flex flex-col items-start border-t-1">
        <h3 className="w-full mb-2 font-bold">{title}</h3>
        {children}
      </div>
    </>
  );
};

export default ShortcutsSection;

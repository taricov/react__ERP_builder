import React from "react";

interface Props {
  label: string;
  comp: JSX.Element;
  desc?: string;
  info?: any;
  helptip?: string;
}

const SettingsRow = ({ label, comp, desc, info, helptip }: Props) => {
  return (
    <div className="flex items-start justify-center gap-4 py-5 px-2 rounded-panel flex-1 min-w-full">
      <div className="w-full">
        <div
          className={
            "relative transition-all duration-trans before:content-[attr(data-helptip)] before:text-center before:text-xs before:px-3 before:py-5 before: before:rounded-panel before:bg-primary-700 before:text-white before:w-fit before:h-fit before:absolute before:top-0 -before:right-100 before:opacity-0 before:transition-all before:duration-200 after:content-[''] after:transition-all after:hover:bg-primary-500 after:duration-trans after:text-dimmed after:w-3 after:h-3 after:text-xs after:rounded-full after:p-1 after:bg-slate-200 after:cursor-pointer after:absolute after:top-0 after:right-0 after:hover:before:opacity-100"
          }
        >
          {label}
        </div>
        <div className="text-xs text-dimmed">{desc}</div>
        {/* <span className="">{helptip}</span> */}
      </div>
      <div className="w-full">{comp}</div>
    </div>
  );
};

export default SettingsRow;

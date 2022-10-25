import React from "react";

interface Props {
  label: string;
  comp: JSX.Element;
}

const SettingsRow = ({ label, comp }: Props) => {
  return (
    <div className="flex items-start justify-center gap-4">
      <div className="">{label}</div>
      <div className=""></div>
    </div>
  );
};

export default SettingsRow;

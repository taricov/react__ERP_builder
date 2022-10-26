import React, { Children } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const SettingsSection = ({ children, title }: Props) => {
  return (
    <div className="flex flex-col flex-wrap items-start justify-start w-full">
      <div className="w-full font-bold text-lg border-b-2 mb-5">{title}</div>
      <div className="w-full flex items-start justify-center flex-wrap ">
        {children}
      </div>
    </div>
  );
};

export default SettingsSection;

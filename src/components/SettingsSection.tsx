import React, { Children } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const SettingsSection = ({ children, title }: Props) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <h2 className="">{title}</h2>
      <div className="flex flex-col items-start justify-center">{children}</div>
    </div>
  );
};

export default SettingsSection;

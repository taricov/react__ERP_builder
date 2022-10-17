import React from "react";

interface Props {
  children: React.ReactNode;
}
const TemplateSpaceRow = ({ children }: Props) => {
  return <div className="flex gap-1 w-full gap-2 ">{children}</div>;
};

export default TemplateSpaceRow;

import React from "react";

interface Props {
  children: React.ReactNode;
}
const BuilderConfigColRow = ({ children }: Props) => {
  return <div className="flex gap-1 w-full ">{children}</div>;
};

export default BuilderConfigColRow;

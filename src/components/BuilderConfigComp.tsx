import React from "react";
interface Props {
  component: React.ReactNode;
  id: string;
  type: string;
}
const BuilderConfigComp = ({ component, id, type }: Props) => {
  return (
    <div id={id} className="w-full">
      {/* <div className="">{title}</div> */}
      <div className="">{component}</div>
    </div>
  );
};

export default BuilderConfigComp;

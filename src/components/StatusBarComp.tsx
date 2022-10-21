import React, { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  text: string;
}
const StatusBarComp = ({ Icon, text }: Props) => {
  return (
    <div className="flex cursor-pointer hover:bg-slate-300 transition-colors duration-200 pl-1">
      <span className="flex items-center content-center">
        <Icon />
      </span>
      <p className="px-1">{text}</p>
    </div>
  );
};

export default StatusBarComp;

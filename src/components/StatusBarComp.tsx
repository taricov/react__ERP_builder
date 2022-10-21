import React, { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  text: string;
  statusColor?: string;
}
const StatusBarComp = ({ Icon, text, statusColor = "text-white" }: Props) => {
  return (
    <div
      className={`flex text-${statusColor} cursor-pointer hover:bg-slate-300 transition-colors duration-200 pl-1`}
    >
      <span className="flex items-center content-center">
        <Icon className={`text-xs ${statusColor}`} />
      </span>
      <p className={`px-1 ${statusColor}`}>{text}</p>
    </div>
  );
};

export default StatusBarComp;

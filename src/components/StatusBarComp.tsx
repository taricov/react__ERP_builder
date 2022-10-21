import React, { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  text: string;
  statusColor?: string | undefined;
  rightPad?: string | undefined;
}
const StatusBarComp = ({
  Icon,
  text,
  statusColor = undefined,
  rightPad = undefined,
}: Props) => {
  return (
    <div
      className={`flex cursor-pointer contrast-100 hover:contrast-0 transition-all duration-trans pl-2 ${rightPad}`}
    >
      <span className="flex items-center content-center">
        <Icon className={`text-xs ${statusColor}`} />
      </span>
      <p className={`px-1 ${statusColor}`}>{text}</p>
    </div>
  );
};

export default StatusBarComp;

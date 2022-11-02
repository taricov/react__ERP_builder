import React, { SVGProps } from "react";
import SiteCompTooltip from "./site_compsnents/SiteCompTooltip";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  text: string;
  statusColor?: string | undefined;
  rightPad?: string | undefined;
  size?: string;
  where?: string;
  onClick?: any;
  ThisToolTip?: undefined | string;
  NoToolTip?: boolean;
}
const StatusBarComp = ({
  Icon,
  text,
  size = "lg",
  statusColor = undefined, //for Updated status in the StatusBar
  rightPad = "pr-0",
  where = "topBar",
  ThisToolTip = undefined,
  NoToolTip = false,
  onClick,
}: Props) => {
  let hoveEffect =
    where === "Status"
      ? "hover:contrast-0"
      : "hover:bg-primary-600 dark:hover:bg-slate-700";
  return (
    <SiteCompTooltip label={ThisToolTip} disabled={NoToolTip}>
      <div
        className={`h-full flex cursor-pointer contrast-100 ${hoveEffect} transition-all duration-trans rounded-none pl-2 ${rightPad}`}
      >
        <span className="flex items-center">
          <Icon className={`text-${size} ${statusColor}`} />
        </span>
        <p className={`px-1 ${statusColor}`}>{text}</p>
      </div>
    </SiteCompTooltip>
  );
};

export default StatusBarComp;

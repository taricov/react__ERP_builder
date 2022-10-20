import { MantineColor, MantineTransition, Tooltip } from "@mantine/core";
import React from "react";

interface Props {
  label: string;
  color?: MantineColor | undefined;
  trans?: MantineTransition | undefined;
  transD?: number;
  openD?: number;
  closeD?: number;
  multiline?: boolean;
  position?: string;
  withArrow?: boolean;
  children?: React.ReactNode;
}
const SiteCompTooltip = ({
  label,
  //   children,
  color = "blue",
  trans = "slide-up",
  transD = 0,
  openD = 300,
  closeD = 0,
  multiline = false,
  withArrow = true,
}: Props) => {
  return (
    <div>
      <Tooltip
        label={label}
        color={color}
        multiline
        withArrow
        position="top"
        transition={trans}
        transitionDuration={transD}
        openDelay={openD}
        closeDelay={closeD}
      >
        {/* {children} */}{" "}
      </Tooltip>
    </div>
  );
};

export default SiteCompTooltip;

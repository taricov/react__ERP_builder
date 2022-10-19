import React, { SVGProps } from "react";
import { Divider, Box } from "@mantine/core";

interface Props {
  variant?: "solid" | "dashed" | "dotted" | undefined;
  pos: "left" | "center" | "right" | undefined;
  my?: string;
  TheIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}
const SiteCompDivider = ({
  title,
  variant = undefined,
  pos,
  my = "xs",
  TheIcon,
}: Props) => {
  return (
    <>
      <Divider
        my={my}
        variant={variant}
        labelPosition={pos}
        label={
          <>
            <TheIcon />
            <Box ml={5}>{title}</Box>
          </>
        }
      />
    </>
  );
};

export default SiteCompDivider;

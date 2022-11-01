import React, { SVGProps } from "react";
import { Divider, Box } from "@mantine/core";

interface Props {
  variant?: "solid" | "dashed" | "dotted" | undefined;
  pos?: "left" | "center" | "right" | undefined;
  my?: string;
  TheIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  iconSize?: string;
  titleSize?: string;
}
const SiteCompDivider = ({
  title,
  variant = undefined,
  pos = "left",
  my = "xs",
  TheIcon,
  iconSize = "",
  titleSize = "",
}: Props) => {
  return (
    <>
      <Divider
        className="mb-1 w-full"
        my={my}
        variant={variant}
        labelPosition={pos}
        label={
          <>
            <TheIcon className={iconSize} />
            <Box className={titleSize} ml={5}>
              {title}
            </Box>
          </>
        }
      />
    </>
  );
};

export default SiteCompDivider;

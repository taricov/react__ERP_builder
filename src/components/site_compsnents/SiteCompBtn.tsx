import { Button, MantineNumberSize } from "@mantine/core";
import React, { SVGProps } from "react";
import { Link, LinkProps } from "react-router-dom";

interface Props {
  title: string;
  variant?:
    | "gradient"
    | "filled"
    | "outline"
    | "light"
    | "white"
    | "default"
    | "subtle"
    | undefined;
  radius?: MantineNumberSize | undefined;
  color?: string;
  disabled?: boolean;
  rel?: string;
  component?: React.ForwardRefExoticComponent<
    LinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
  target?: string;
  // to: HTMLAnchorElement | string | undefined;
  Icon?: React.ReactNode;
  laoding?: boolean;
  // Icon?: React.ElementType;
}
const SiteCompBtn = ({
  title,
  variant = "default",
  radius = undefined,
  disabled = false,
  // loading = false,
  color = "green",
  Icon = undefined,
  rel = "noopener noreferrer",
  target = "_blank",
}: // component = { Link },
Props) => {
  return (
    <>
      <Button
        color={color}
        radius={radius}
        title={title}
        variant={variant}
        disabled={disabled}
        leftIcon={Icon}
        // loading={loading}
      >
        {title}
      </Button>
    </>
  );
};

export default SiteCompBtn;

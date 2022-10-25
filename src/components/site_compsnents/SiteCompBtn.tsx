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
  component?: any;
  target?: string;
  href?: any;
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
  component = "a",
  rel = "noopener noreferrer",
  target = "_blank",
  href,
}: Props) => {
  return (
    <>
      <Button
        className={`${color}`}
        // color={color}
        component={component}
        rel={rel}
        target={target}
        radius={radius}
        title={title}
        variant={variant}
        disabled={disabled}
        leftIcon={Icon}
        href={href}
        // loading={loading}
      >
        {title}
      </Button>
    </>
  );
};

export default SiteCompBtn;

import { MantineNumberSize } from "@mantine/styles";
import { Button } from "@mantine/core";
import React, { ReactElement, SVGProps } from "react";
import { LinkProps } from "react-router-dom";

interface Props {
  children: JSX.Element | JSX.Element[];
  btns: [
    {
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
      //   radius?: MantineNumberSize | undefined;
      //   color?: string;
      //   rel: string;
      //   disabled?: boolean;
      //   Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
      //   component?: React.ForwardRefExoticComponent<
      //     LinkProps & React.RefAttributes<HTMLAnchorElement>
      //       >;
    }
  ];
}

const SiteCompBtnGroup = ({ children, btns }: Props) =>
  // {
  //   children: JSX.Element | JSX.Element[];
  //   btns: Props;
  // }
  {
    return (
      <>
        {/* <Button.Group>
          {btns.map((btn: any) => {
            <Button
              variant={btn.variant}
              radius={btn.radius}
              color={btn.color}
              disabled={btn.disabled}
              rel="noopener noreferrer"
              target="_blank"
              // href={btn.href}
              // leftIcon={btn.Icon}
              component={"a"}
            >
              {btn.title}
            </Button>;
          })}
          <Button title="hello" />
        </Button.Group> */}
      </>
    );
  };

export default SiteCompBtnGroup;

import { Button, Menu, Text } from "@mantine/core";
import { FloatingPosition } from "@mantine/core/lib/Floating";
import { MenuTriggerEvent } from "@mantine/core/lib/Menu/Menu.types";
import React, { SVGProps } from "react";
import { MdOutlineStackedLineChart } from "react-icons/md";

interface Props {
  buttonTitle: string;
  w: number;
  offset?: number;
  pos?: FloatingPosition | undefined;
  menuItems: Array<{ title: string; href: string }>;
  menuIcon?: React.ReactNode | undefined;
  trigger?: MenuTriggerEvent | undefined;
}
const SiteCompIconDropDown = ({
  buttonTitle,
  pos = "bottom-start",
  offset = 1,
  w,
  menuItems,
  menuIcon = undefined,
  trigger = "hover",
}: Props) => {
  return (
    <>
      <Menu
        trigger={trigger}
        openDelay={0}
        closeDelay={0}
        position={pos}
        width={w}
        offset={offset}
      >
        <Menu.Target>
          <Text className="font-light h-full rounded-none text-sm transition-colors duration-trans cursor-pointer hover:bg-slate-500">
            {menuIcon}
            {buttonTitle}
          </Text>
        </Menu.Target>

        <Menu.Dropdown className="rounded-t-none rounded-b-md bg-primary-800 shadow-md border-none dark:bg-slate-700">
          {menuItems.map((val) => {
            return (
              <Menu.Item
                component="a"
                href={val.href}
                className="text-xs p-1 text-white hover:text-slate-700"
              >
                {val.title}
              </Menu.Item>
            );
          })}
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default SiteCompIconDropDown;

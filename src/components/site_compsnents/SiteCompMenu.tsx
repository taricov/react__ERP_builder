import { Button, Menu, Text } from "@mantine/core";
import { FloatingPosition } from "@mantine/core/lib/Floating";
import React from "react";

interface Props {
  buttonTitle: string;
  w: number;
  offset?: number;
  pos?: FloatingPosition | undefined;
  menuItems: Array<{ title: string; href: string }>;
}
const SiteCompMenu = ({
  buttonTitle,
  pos = "bottom-start",
  offset = 1,
  w,
  menuItems,
}: Props) => {
  return (
    <>
      <Menu
        trigger="hover"
        openDelay={0}
        closeDelay={0}
        position={pos}
        width={w}
        offset={offset}
      >
        <Menu.Target>
          <Text className="font-light px-2 py-0 rounded-none text-sm cursor-pointer hover:bg-slate-500">
            {buttonTitle}
          </Text>
        </Menu.Target>

        <Menu.Dropdown className="rounded-t-none rounded-b-md">
          {menuItems.map((val) => {
            return (
              <Menu.Item component="a" href={val.href} className="text-xs p-1">
                {val.title}
              </Menu.Item>
            );
          })}
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default SiteCompMenu;

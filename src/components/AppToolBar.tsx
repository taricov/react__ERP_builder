import { Avatar, Group, Indicator } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { IoAddSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import Yousra from "../assets/2.jpg";
import {
  MdOutlineNotificationsActive,
  MdOutlineNotificationsNone,
  MdOutlineNotificationsOff,
} from "react-icons/md";
import StatusBarComp from "./StatusBarComp";

// const summonSpotLight = useHotkeys()

const AppToolBar = () => {
  let Notification = false;
  return (
    <div className="h-full flex bg-primary-700 items-center ">
      <StatusBarComp Icon={AiOutlineArrowLeft} text="Back" />
      <StatusBarComp Icon={BiRefresh} text="Sync" />
      {Notification ? (
        <StatusBarComp
          Icon={MdOutlineNotificationsActive}
          text="Notifications"
        />
      ) : (
        <StatusBarComp Icon={MdOutlineNotificationsOff} text="None" />
      )}
      <StatusBarComp Icon={BiRefresh} text="Sync" />
      <StatusBarComp Icon={IoAddSharp} text="Add" size="2xl" />
      <StatusBarComp Icon={FiSearch} text="Omni-bar" />

      {/*<Group position="center" spacing={40}>
        <Indicator color="green" size={8} withBorder processing offset={1}>
          <div className="">Hi, Adel</div>
          <Avatar
            className="flex items-center justify-center cursor-pointer "
            src={Yousra}
            size="sm"
            component="a"
            alt="Yousra Lozy"
            radius="md"
          /> 
        </Indicator>
      </Group>*/}
      {/* <div className="text-lg font-bold bg-slate-400 p-2 cursor-pointer hover:bg-slate-100 transition-colors duration-200">
        <AiOutlineArrowLeft />
      </div> */}
      {/* <div className="text-lg font-bold bg-slate-400 p-2 cursor-pointer hover:bg-slate-100 transition-colors duration-200">
        <BiRefresh /> */}
      {/* </div> */}
      {/* Spotlight/Global SearchBar */}
    </div>
  );
};
//TODO: StatusBar: Notification (OtherInfo)

export default AppToolBar;

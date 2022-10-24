import { Avatar, Group, Indicator } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineSetting } from "react-icons/ai";
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
  let Notification = true;
  return (
    <div className="h-8 flex bg-primary-700 items-center ">
      <div className="flex items-center justify-start w-1/2 h-full">
        <StatusBarComp Icon={AiOutlineArrowLeft} text="" />
      </div>
      <div className="flex items-center justify-end w-1/2 h-full">
        <div className="h-full bg-primary-500">
          <StatusBarComp Icon={IoAddSharp} text="" size="2xl" />
        </div>
        <StatusBarComp Icon={FiSearch} text="" />
        {Notification ? (
          <Indicator
            showZero={false}
            offset={8}
            size={6}
            color="yellow"
            processing
            position="top-end"
            className=" h-full"
          >
            <StatusBarComp Icon={MdOutlineNotificationsActive} text="" />
          </Indicator>
        ) : (
          <StatusBarComp Icon={MdOutlineNotificationsOff} text="" />
        )}
        <StatusBarComp Icon={BiRefresh} size="xl" text="" />
        <StatusBarComp Icon={AiOutlineSetting} text="" />
      </div>
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

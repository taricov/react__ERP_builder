import { Avatar, Group, Indicator } from "@mantine/core";
import { useHotkeys, useToggle } from "@mantine/hooks";
import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineSetting } from "react-icons/ai";
import {
  IoAddSharp,
  IoVolumeHighOutline,
  IoVolumeMuteOutline,
} from "react-icons/io5";
import { useGoBack } from "../custom_hooks/useBackUrl";
import { FiSearch } from "react-icons/fi";
import Yousra from "../assets/2.jpg";
import {
  MdLightMode,
  MdOutlineLightMode,
  MdOutlineNotificationsActive,
  MdOutlineNotificationsNone,
  MdOutlineNotificationsOff,
} from "react-icons/md";
import StatusBarComp from "./StatusBarComp";
import { VscSync, VscSyncIgnored } from "react-icons/vsc";
import { openSpotlight } from "@mantine/spotlight";
import SiteCompIconDropDown from "./site_compsnents/SiteCompIconDropDown";

// const summonSpotLight = useHotkeys()

const addBtnItems = [
  { title: "New Module", href: "#" },
  { title: "New Invoice", href: "#" },
  { title: "New Expense", href: "#" },
  { title: "New Rent", href: "#" },
];
const settingsBtnItems = [
  { title: "Setting 1", href: "#" },
  { title: "Predefined settings", href: "#" },
  { title: "Setting 2", href: "#" },
  { title: "Setting 3", href: "#" },
];

const AppToolBar = () => {
  const [soundMode, setSoundMode] = useState(
    localStorage?.getItem("soundMode") ?? true
  );
  const [darkMode, setDarkMode] = useState(
    localStorage?.getItem("darkMode") ?? true
  );
  const [seenNotification, setSeenNotification] = useState<boolean>(false);
  const [syncMode, setSyncMode] = useState(
    localStorage?.getItem("syncMode") ?? true
  );
  const soundModeFn = () => {
    setSoundMode(!soundMode);
    localStorage.setItem("soundMode", JSON.stringify(!soundMode));
  };
  const darkModeFn = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };
  const syncModeFn = () => {
    setSyncMode(!syncMode);
    localStorage.setItem("syncMode", JSON.stringify(!syncMode));
  };
  return (
    <div className="h-8 flex bg-primary-700 items-center ">
      <div
        className="flex items-center justify-start w-1/2 h-full"
        onClick={useGoBack}
      >
        <StatusBarComp Icon={AiOutlineArrowLeft} text="" />
      </div>
      <div className="flex items-center justify-end w-1/2 h-full">
        {/* <div className="h-full bg-primary-500">
          <StatusBarComp Icon={IoAddSharp} text="" size="2xl" />
        </div> */}
        <div className="h-full bg-primary-500 flex items-center justify-center">
          <SiteCompIconDropDown
            buttonTitle=""
            menuIcon={<StatusBarComp Icon={IoAddSharp} text="" size="2xl" />}
            w={100}
            menuItems={addBtnItems}
          />
        </div>
        <div className="h-full" onClick={() => openSpotlight()}>
          <StatusBarComp Icon={FiSearch} text="" />
        </div>
        {seenNotification ? (
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
        <div
          className="h-full flex items-center justify-center"
          onClick={soundModeFn}
        >
          {soundMode ? (
            <StatusBarComp Icon={IoVolumeHighOutline} text="" />
          ) : (
            <StatusBarComp Icon={IoVolumeMuteOutline} text="" />
          )}
        </div>
        <div
          className="h-full flex items-center justify-center"
          onClick={darkModeFn}
        >
          {darkMode ? (
            <StatusBarComp Icon={MdOutlineLightMode} text="" />
          ) : (
            <StatusBarComp Icon={MdLightMode} text="" />
          )}
        </div>
        <div
          className="h-full flex items-center justify-center"
          onClick={syncModeFn}
        >
          {syncMode ? (
            <StatusBarComp Icon={VscSync} text="" />
          ) : (
            <StatusBarComp Icon={VscSyncIgnored} text="" />
          )}
        </div>

        <div className="h-full flex items-center justify-center">
          <SiteCompIconDropDown
            buttonTitle=""
            menuIcon={<StatusBarComp Icon={AiOutlineSetting} text="" />}
            w={100}
            menuItems={settingsBtnItems}
          />
        </div>
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

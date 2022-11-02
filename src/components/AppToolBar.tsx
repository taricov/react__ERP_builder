import { Indicator } from "@mantine/core";
import { openSpotlight } from "@mantine/spotlight";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineSetting } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import {
  IoAddSharp,
  IoVolumeHighOutline,
  IoVolumeMuteOutline,
} from "react-icons/io5";
import {
  MdLightMode,
  MdOutlineLightMode,
  MdOutlineNotificationsActive,
  MdOutlineNotificationsOff,
} from "react-icons/md";
import { VscSync, VscSyncIgnored } from "react-icons/vsc";
import { useGoBack } from "../custom_hooks/useBackUrl";
import SiteCompIconDropDown from "./site_compsnents/SiteCompIconDropDown";
import StatusBarComp from "./StatusBarComp";

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

const notificationQueue = [
  { notificationBody: "Text body goes here!!", notificationStatus: "Unseen" },
];

const AppToolBar = () => {
  const [soundMode, setSoundMode] = useState(
    localStorage?.getItem("soundMode") ?? true
  );
  const [darkMode, setDarkMode] = useState(
    localStorage?.getItem("darkMode") ?? true
  );
  const [seenNotification, setSeenNotification] =
    useState<object[]>(notificationQueue);
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
    <div className="h-8 flex items-center bg-primary-700 dark:bg-none">
      <div
        className="flex items-center justify-start h-full"
        onClick={useGoBack}
      >
        <StatusBarComp Icon={AiOutlineArrowLeft} text="" NoToolTip={true} />
      </div>
      <div className="flex items-center justify-end w-1/2 h-full flex-1">
        {/* <div className="h-full bg-primary-500">
          <StatusBarComp Icon={IoAddSharp} text="" size="2xl" />
        </div> */}
        <div className="h-full bg-primary-800 dark:bg-slate-800 flex items-center justify-center">
          <SiteCompIconDropDown
            buttonTitle=""
            menuIcon={
              <StatusBarComp
                NoToolTip={true}
                Icon={IoAddSharp}
                text=""
                size="2xl"
              />
            }
            w={100}
            menuItems={addBtnItems}
          />
        </div>
        <div className="h-full" onClick={() => openSpotlight()}>
          <StatusBarComp Icon={FiSearch} text="" ThisToolTip="Magic Bar" />
        </div>
        <div className="h-full flex items-center justify-center">
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
              <SiteCompIconDropDown
                buttonTitle=""
                trigger="click"
                menuIcon={
                  <StatusBarComp
                    NoToolTip
                    Icon={MdOutlineNotificationsActive}
                    text=""
                  />
                }
                w={100}
                menuItems={addBtnItems}
              />
            </Indicator>
          ) : (
            <SiteCompIconDropDown
              buttonTitle=""
              trigger="click"
              menuIcon={
                <StatusBarComp
                  NoToolTip
                  Icon={MdOutlineNotificationsOff}
                  text=""
                />
              }
              w={100}
              menuItems={addBtnItems}
            />
          )}
        </div>
        <div
          className="h-full flex items-center justify-center"
          onClick={soundModeFn}
        >
          {soundMode ? (
            <StatusBarComp
              Icon={IoVolumeHighOutline}
              text=""
              size="xl"
              ThisToolTip="Sound On"
            />
          ) : (
            <StatusBarComp
              Icon={IoVolumeMuteOutline}
              text=""
              size="xl"
              ThisToolTip="Sound Off"
            />
          )}
        </div>
        <div
          className="h-full flex items-center justify-center"
          onClick={darkModeFn}
        >
          {darkMode ? (
            <StatusBarComp
              Icon={MdOutlineLightMode}
              text=""
              ThisToolTip="Light Mode"
            />
          ) : (
            <StatusBarComp Icon={MdLightMode} text="" ThisToolTip="Dark Mode" />
          )}
        </div>
        <div
          className="h-full flex items-center justify-center"
          onClick={syncModeFn}
        >
          {syncMode ? (
            <StatusBarComp Icon={VscSync} text="" ThisToolTip="Sync On" />
          ) : (
            <StatusBarComp
              Icon={VscSyncIgnored}
              text=""
              ThisToolTip="Sync Off"
            />
          )}
        </div>

        <div className="h-full flex items-center justify-center">
          <SiteCompIconDropDown
            buttonTitle=""
            menuIcon={
              <StatusBarComp NoToolTip Icon={AiOutlineSetting} text="" />
            }
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

export default AppToolBar;

import { Avatar } from "@mantine/core";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { IoAddSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import {
  MdOutlineNotificationsActive,
  MdOutlineNotificationsNone,
  MdOutlineNotificationsOff,
} from "react-icons/md";
import StatusBarComp from "./StatusBarComp";

const darkMode = () => {
  var themeToggleDarkIcon: any = document.getElementById(
    "theme-toggle-dark-icon"
  );
  var themeToggleLightIcon: any = document.getElementById(
    "theme-toggle-light-icon"
  );

  // Change the icons inside the button based on previous settings
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleLightIcon.classList.remove("hidden");
  } else {
    themeToggleDarkIcon.classList.remove("hidden");
  }

  var themeToggleBtn: any = document.getElementById("theme-toggle");

  themeToggleBtn.addEventListener("click", function () {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");

    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });
};

const AppToolBar = () => {
  return (
    <div className="h-full flex bg-primary-700 items-center ">
      <StatusBarComp Icon={AiOutlineArrowLeft} text="Back" />
      <StatusBarComp Icon={BiRefresh} text="Sync" />
      <StatusBarComp Icon={MdOutlineNotificationsActive} text="None" />
      <StatusBarComp Icon={MdOutlineNotificationsOff} text="Sy" />
      <StatusBarComp Icon={BiRefresh} text="Sync" />
      <StatusBarComp Icon={IoAddSharp} text="Add" />
      <StatusBarComp Icon={FiSearch} text="Search" />
      <Avatar
        className="w-4 h-5 flex items-center justify-center cursor-pointer bg-primary-600 my-2"
        src="avatar.png"
        alt="it's me"
      />
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

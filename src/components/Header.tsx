import React from "react";
import { BiRefresh } from "react-icons/bi";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
// I've used an AppMenu Component Here:
function Header() {
  return (
    <div>
      <div>
        {/* <ul>
        <li>
          <Link to="/form">Form Builder</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul> */}
      </div>
      <div>
        <ArrowPathIcon />
        <BiRefresh />
      </div>
      <div></div>
    </div>
  );
}

export default Header;

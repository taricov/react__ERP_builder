import React from "react";
import { BiRefresh } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
// I've used an AppMenu Component Here:
function Header() {
  return (
    <div>
      <div>
        {/* <ul>
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
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
        <BsArrowLeft />
        <BiRefresh />
      </div>
      <div></div>
    </div>
  );
}

export default Header;

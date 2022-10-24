import { Table } from "@mantine/core";
import React, { useLayoutEffect } from "react";
import $ from "jquery";

let moduleMeta = [
  {
    30: {
      id: "30",
      created: "10/04/2022",
      title: "Module Title Goes Here",
      description:
        "Lorem ipsum dolor sit is minima modi fugiat cum distinctio vitae, porro corrupti?",
      storageConsumed: "30MB",
      storageAllocated: "50MB",
      storageRemaining: "20MB",
      recordsCount: "235",
    },
  },
];
function toggleOnClick() {
  $("#collapse__icon").click(function () {
    const $this = $(this);
    if ($this.parent().height() === 0) {
      $this.parent().removeClass("collapse__parent");
      $this.siblings().removeClass("hide__elements");
    } else {
      $this.parent().addClass("collapse__parent");
      $this.siblings().addClass("hide__elements");
    }
  });
}

const ModuleMetaData = () => {
  useLayoutEffect(() => {
    toggleOnClick();
  });
  let modObj = Object.values(moduleMeta[0])[0];
  return (
    <div className="flex items-center justify-center relative pt-3 transition-all duration-trans h-80 overflow-hidden opacity-100">
      <div
        id="collapse__icon"
        className="w-0 h-0 
        absolute -top-1 right-0 cursor-pointer
    border-t-[10px] border-t-purple-200
    border-r-[10px] border-r-transparent
    border-b-[10px] border-b-transparent
    rotate-90
    mr-2
    "
      ></div>
      <Table
        className="w-1/2 cursor-pointer m-auto my-2"
        withColumnBorders
        withBorder
        fontSize={11}
        highlightOnHover
        captionSide="top"
      >
        <caption className="text-sm w-3/4 m-auto cursor-default">
          {modObj.description}
        </caption>
        <tbody>
          <tr>
            <td className="w-1/2">Title:</td>
            <td className="w-1/2">{modObj.title}</td>
          </tr>
          <tr>
            <td className="w-1/2">Created At:</td>
            <td className="w-1/2">{modObj.created}</td>
          </tr>
          <tr>
            <td className="w-1/2">Consumned:</td>
            <td className="w-1/2">{modObj.storageConsumed}</td>
          </tr>
          <tr>
            <td className="w-1/2">Remaining:</td>
            <td className="w-1/2">{modObj.storageRemaining}</td>
          </tr>
          <tr>
            <td className="w-1/2">Records Count:</td>
            <td className="w-1/2">{modObj.recordsCount}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ModuleMetaData;

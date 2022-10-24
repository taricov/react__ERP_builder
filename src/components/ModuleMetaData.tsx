import { Table } from "@mantine/core";
import React from "react";

let moduleMeta = [
  {
    30: {
      id: "30",
      created: "10/04/2022",
      title: "Module Title Goes Here",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quasi hic quis minima modi fugiat cum distinctio vitae, porro corrupti?",
      storageConsumed: "30MB",
      storageAllocated: "50MB",
      storageRemaining: "20MB",
      recordsCount: "235",
    },
  },
];

const ModuleMetaData = () => {
  let modObj = Object.values(moduleMeta[0])[0];
  console.log(modObj);
  return (
    <div className="flex items-center justify-center relative">
      <div
        className="w-0 h-0 
        absolute top-0 right-0 cursor-pointer
    border-t-[15px] border-t-purple-200
    border-r-[15px] border-r-transparent
    border-b-[15px] border-b-transparent
    rotate-90
    mr-4
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
        <caption className="text-sm w-3/4 m-auto">{modObj.description}</caption>
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

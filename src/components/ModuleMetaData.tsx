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
    <div className="flex items-center justify-center">
      <table className="w-6/8 m-auto my-10 border-collapse text-sm">
        <tr>
          <td className="w-1/2 p-3 bg-primary-300 text-right">Title:</td>
          <td className="w-1/2 p-3 bg-primary-300">{modObj.title}</td>
        </tr>
        <tr>
          <td className="w-1/2 p-3 bg-primary-300 text-right">Created At:</td>
          <td className="w-1/2 p-3 bg-primary-300">{modObj.created}</td>
        </tr>
        <tr>
          <td className="w-1/2 p-3 bg-primary-300 text-right">About:</td>
          <td className="w-1/2 p-3 bg-primary-300">{modObj.description}</td>
        </tr>
        <tr>
          <td className="w-1/2 p-3 bg-primary-300 text-right">Consumned:</td>
          <td className="w-1/2 p-3 bg-primary-300">{modObj.storageConsumed}</td>
        </tr>
        <tr>
          <td className="w-1/2 p-3 bg-primary-300 text-right">Remaining:</td>
          <td className="w-1/2 p-3 bg-primary-300">
            {modObj.storageRemaining}
          </td>
        </tr>
        <tr>
          <td className="w-1/2 p-3 bg-primary-300 text-right">
            Records Count:
          </td>
          <td className="w-1/2 p-3 bg-primary-300">{modObj.recordsCount}</td>
        </tr>
      </table>
    </div>
  );
};

export default ModuleMetaData;

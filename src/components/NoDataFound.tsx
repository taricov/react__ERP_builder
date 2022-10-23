import React from "react";
import { BsTable } from "react-icons/bs";

const NoDataFound = () => {
  return (
    <div className="w-screen flex-1 flex flex-col items-center justify-center ">
      <BsTable className="text-2xl text-gray-dark m-2" />
      <div className="font-bold text-lg text-gray-dark">No data is found</div>
    </div>
  );
};

export default NoDataFound;

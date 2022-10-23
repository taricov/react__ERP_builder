import React from "react";
import { BsTable } from "react-icons/bs";

const NoDataFound = () => {
  return (
    <div className="w-screen h-full flex flex-col items-center justify-center">
      {/* <div className=""> */}
      <BsTable className="text-2xl text-gray-dark m-2" />
      {/* </div> */}
      <div className="font-bold text-lg text-gray-dark">No data is found</div>
    </div>
  );
};

export default NoDataFound;

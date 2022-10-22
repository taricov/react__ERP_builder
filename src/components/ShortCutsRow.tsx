import { Kbd } from "@mantine/core";
import React from "react";

interface Props {
  desc: string;
  shCuts: string[];
}

const ShortCutsRow = ({ desc, shCuts }: Props) => {
  return (
    <div>
      <div className="">{desc}</div>
      <div className="">
        {shCuts.map((v, i) => {
          return i === shCuts.length - 1 ? (
            <Kbd>{v}</Kbd> + "+"
          ) : (
            <Kbd>{v}</Kbd>
          );
        })}
      </div>
    </div>
  );
};

export default ShortCutsRow;

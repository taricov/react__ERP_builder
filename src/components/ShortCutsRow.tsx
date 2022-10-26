import { Kbd } from "@mantine/core";
import React from "react";

interface Props {
  desc: string;
  shCuts: string[];
}

const ShortcutsRow = ({ desc, shCuts }: Props) => {
  return (
    <div className="flex items-between justify-center w-1/3 border-t border-slate-400">
      <div className="">{desc}</div>
      <div className="flex-1 text-right">
        {shCuts.map((v, i) => {
          return i === shCuts.length - 1 ? (
            <Kbd>{v}</Kbd>
          ) : (
            <>
              <Kbd className="bg-primary-400 shadow-md" color="red">
                {v}
              </Kbd>
              <span className="mx-1 text-dimmed">+</span>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ShortcutsRow;

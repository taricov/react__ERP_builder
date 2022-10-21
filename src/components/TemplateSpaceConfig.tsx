import { Button, NumberInput, Slider } from "@mantine/core";
import React from "react";

const TemplateSpaceConfig = () => {
  return (
    <div className="z-10 shadow-2xl fixed left-1/2 top-1/2 w-5/6 h-4/5 -translate-x-1/2 -translate-y-1/2 bg-skin-hue0 text-bg-rev rounded-panel p-5">
      <div className="flex flex-col bg-primary-800 w-full h-full rounded-panel">
        <div className="flex items-center content-center w-100 bg-primary-700 flex-1 m-5 rounded-panel">
          {/* {x.map(v=>(
            <div className={`rounded-panel`}></div>
          ))} */}
        </div>
        <div className="flex items-center content-center w-100 bg-primary-700 h-1/4 m-5 mt-0 rounded-panel">
          <Slider
            className="w-1/5"
            size="sm"
            marks={[
              { value: 20, label: "20%" },
              { value: 50, label: "50%" },
              { value: 80, label: "80%" },
            ]}
          />
          <NumberInput label="Number of Rows" className="w-1/5" />
          <Button>Ok!</Button>
        </div>
      </div>
    </div>
  );
};

export default TemplateSpaceConfig;

import React from "react";
import BuilderConfigColRow from "./BuilderConfigColRow";
import { Input, Switch } from "@mantine/core";
import BuilderConfigComp from "./BuilderConfigComp";

const BuilderConfigCol = () => {
  return (
    <div className="w-1/4 rounded-tl-panel rounded-bl-panel bg-skin-hue2 bg-opacity-30 to-skin-hue2 p-2">
      <BuilderConfigColRow>
        <BuilderConfigComp
          id="1"
          type="ConfigOption"
          component={
            <Input.Wrapper label="Field Label">
              <Input />
            </Input.Wrapper>
          }
        />
      </BuilderConfigColRow>

      {/*<BuilderConfigColRow>
         <BuilderConfigComp
          component={
            <Input.Wrapper label="Key">
              <Input />
            </Input.Wrapper>
          }
        />
      </BuilderConfigColRow>

      <BuilderConfigColRow>
        <BuilderConfigComp
          component={
            <Input.Wrapper label="Default Value">
              <Input />
            </Input.Wrapper>
          }
        />
      </BuilderConfigColRow>

      <BuilderConfigColRow>
        <BuilderConfigComp
          component={
            <Input.Wrapper label="Placeholder">
              <Input />
            </Input.Wrapper>
          }
        />
      </BuilderConfigColRow>
      <BuilderConfigColRow>
        <div className="font-bold text-lg w-full mt-2 border-b-2">
          Validation
        </div>
      </BuilderConfigColRow>
      <BuilderConfigColRow>
        <BuilderConfigComp
          component={
            <Switch
              labelPosition="left"
              label="Required?"
              onLabel="ON"
              offLabel="OFF"
            />
          }
        />
      </BuilderConfigColRow> */}
    </div>
  );
};

export default BuilderConfigCol;

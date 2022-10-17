import { Checkbox, Switch } from "@mantine/core";
import React from "react";

interface Props {
  elementName: any;
  data: Array<{ value: string; label: string; disabled: boolean }>;
}
//TODO: To be Tested // Doubting it to work.
// u go either Switch or Checkbox
const SiteCompGROUPchecktoggle = ({ elementName, data }: Props) => {
  return (
    <div>
      <elementName.Group
        defaultValue={["react"]}
        label="Select your favorite framework/library"
        description="This is anonymous"
        withAsterisk
      >
        {data.map(
          (val) =>
            `<${elementName} value="${val.value}" lable="${val.label}" disabled=${val.disabled}`
        )}
        {/* <elementName value="react" label="React" />
        <elementName value="svelte" label="Svelte" />
        <elementName value="ng" label="Angular" />
        <elementName value="vue" label="Vue" /> */}
      </elementName.Group>
    </div>
  );
};

export default SiteCompGROUPchecktoggle;

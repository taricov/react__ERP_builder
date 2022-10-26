import { Switch } from "@mantine/core";
import React from "react";

const TableSettings = () => {
  return (
    <div>
      <Switch.Group
        defaultValue={["react"]}
        label="Select your favorite framework/library"
        description="This is anonymous"
        spacing="xs"
      >
        <Switch value="react" label="React" />
        <Switch value="svelte" label="Svelte" />
        <Switch value="ng" label="Angular" />
        <Switch value="vue" label="Vue" />
      </Switch.Group>
    </div>
  );
};

export default TableSettings;

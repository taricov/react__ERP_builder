import { Switch } from "@mantine/core";
import React from "react";

const TableSettings = () => {
  return (
    <div>
      <Switch.Group
        defaultValue={["react"]}
        label="Table Settings"
        description="Add superpowers to your table"
        spacing="xs"
      >
        <Switch
          color={"rgb(125 112 143)"}
          labelPosition="left"
          className="flex"
          value="borders"
          label="Borders"
          onLabel="On"
          offLabel="Off"
        />
        <Switch
          color={"rgb(125 112 143)"}
          labelPosition="left"
          className="flex"
          value="scroll"
          label="Scroll"
          onLabel="On"
          offLabel="Off"
        />
        <Switch
          color={"rgb(125 112 143)"}
          labelPosition="left"
          className="flex"
          value="size"
          label="Size"
          onLabel="On"
          offLabel="Off"
        />
        <Switch
          color={"rgb(125 112 143)"}
          labelPosition="left"
          className="flex"
          value="pagy"
          label="Simple Pagination"
          onLabel="On"
          offLabel="Off"
        />
        <Switch
          color={"rgb(125 112 143)"}
          labelPosition="left"
          className="flex"
          value="header"
          label="Header"
          onLabel="On"
          offLabel="Off"
        />
      </Switch.Group>
    </div>
  );
};

export default TableSettings;

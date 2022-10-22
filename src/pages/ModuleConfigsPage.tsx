import { Button } from "@mantine/core";
import React from "react";

const ModuleConfigsPage = () => {
  return (
    <div className="pt-20">
      <Button.Group>
        <Button variant="default">First</Button>
        <Button variant="default">Second</Button>
        <Button variant="default">Third</Button>
        <Button variant="default">First</Button>
        <Button variant="default">Second</Button>
        <Button variant="default">Third</Button>
      </Button.Group>
    </div>
  );
};

export default ModuleConfigsPage;

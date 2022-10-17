import { Switch } from "@mantine/core";
import React from "react";

interface Props {
  label: string;
  disabled: boolean;
}
const SiteToggleComp = ({ label, disabled = false }: Props) => {
  return (
    <div>
      <Switch label={label} disabled={disabled} />
    </div>
  );
};

export default SiteToggleComp;

import { MantineSize, Switch } from "@mantine/core";
import React from "react";

interface Props {
  label: string;
  disabled?: boolean;
  size?: MantineSize | undefined;
  labelPostion?: "right" | "left" | undefined;
}
const SiteToggleComp = ({
  label,
  disabled = false,
  size = undefined,
  labelPostion = undefined,
}: Props) => {
  return (
    <div>
      <Switch
        label={label}
        disabled={disabled}
        size={size}
        labelPosition={labelPostion}
      />
    </div>
  );
};

export default SiteToggleComp;

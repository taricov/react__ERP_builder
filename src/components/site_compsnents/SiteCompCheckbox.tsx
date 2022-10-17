import { Checkbox } from "@mantine/core";
import React from "react";

interface Props {
  label: string;
  desc: string;
  err: string;
  color: string;
  checked: boolean;
  disabled: boolean;
  indeterminate: boolean;
}

const SiteCheckboxComp = ({
  label,
  desc = "",
  err = "",
  color,
  checked = false,
  disabled = false,
  indeterminate = false,
}: Props) => {
  return (
    <div>
      <Checkbox
        label={label}
        description={desc}
        error={err}
        color={color}
        size="sm"
        radius="sm"
        checked
        disabled
        indeterminate
      />
    </div>
  );
};

export default SiteCheckboxComp;

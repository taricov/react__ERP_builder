import { Checkbox } from "@mantine/core";
import React from "react";

interface Props {
  label?: string;
  desc?: string;
  err?: string;
  color?: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
}

const SiteCompCheckbox = ({
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
        checked={checked}
        disabled={disabled}
        indeterminate={indeterminate}
      />
    </div>
  );
};

export default SiteCompCheckbox;

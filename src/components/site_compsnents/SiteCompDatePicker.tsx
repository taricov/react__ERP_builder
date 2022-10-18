import React, { useState } from "react";
import { DateRangePicker, DateRangePickerValue } from "@mantine/dates";
import { MantineSize } from "@mantine/core";

interface Props {
  label: string;
  placeholder: string;
  size?: MantineSize | undefined;
  desc?: string;
}

const SiteCompDatePicker = ({
  label,
  placeholder,
  size = "xs",
  desc,
}: Props) => {
  const [value, setValue] = useState<DateRangePickerValue>([
    new Date(),
    new Date(),
  ]);

  return (
    <div>
      <DateRangePicker
        label={label}
        size={size}
        description={desc}
        placeholder={placeholder}
        amountOfMonths={2}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default SiteCompDatePicker;

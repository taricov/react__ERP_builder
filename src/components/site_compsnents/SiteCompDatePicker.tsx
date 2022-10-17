import { DateRangePicker, DateRangePickerValue } from "@mantine/dates";
import React, { useState } from "react";

interface Props {
  label: string;
  placeholder: string;
}

const SiteCompDatePicker = ({ label, placeholder }: Props) => {
  const [value, setValue] = useState<DateRangePickerValue>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);

  return (
    <div>
      <DateRangePicker
        label={label}
        placeholder={placeholder}
        amountOfMonths={2}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default SiteCompDatePicker;

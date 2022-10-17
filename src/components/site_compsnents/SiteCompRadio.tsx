import { MantineNumberSize, Radio } from "@mantine/core";
import React from "react";

interface Props {
  name: string;
  orient: "horizontal" | "vertical" | undefined;
  label: string;
  desc: string;
  err: string;
  spacing: MantineNumberSize | undefined;
  astrisk: boolean;
}
//TODO: .map() to create radioBtn
const SiteCompRadio = ({
  name,
  orient,
  label,
  desc,
  err,
  spacing,
  astrisk = false,
}: Props) => {
  return (
    <div>
      <Radio.Group
        name={name}
        orientation={orient}
        label={label}
        description={desc}
        error={err}
        spacing={spacing}
        withAsterisk={astrisk}
      >
        <Radio value="react" label="React" />
        <Radio value="svelte" label="Svelte" />
        <Radio value="ng" label="Angular" />
        <Radio value="vue" label="Vue" />
      </Radio.Group>
    </div>
  );
};

export default SiteCompRadio;

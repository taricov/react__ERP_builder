import { Slider } from "@mantine/core";
import React from "react";

//TODO: NOT DONE
const SiteCompSlider = () => {
  return (
    <div>
      <Slider
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
      />
    </div>
  );
};

export default SiteCompSlider;

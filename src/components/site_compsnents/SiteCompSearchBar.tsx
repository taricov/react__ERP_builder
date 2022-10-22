import React, { SVGProps } from "react";
import { TextInput } from "@mantine/core";
import { FiSearch } from "react-icons/fi";
import SiteCompDivider from "./SiteCompDivider";

interface Props {
  label: string;
  placeholder: string;
  TheIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}
const SiteCompSearchBar = ({ label, placeholder, TheIcon }: Props) => {
  return (
    <div className="w-fit text-dimmed">
      <SiteCompDivider title="Search" pos="left" TheIcon={FiSearch} />
      <div className="w-full p-2 bg-primary-300 rounded-panel">
        <TextInput
          label={label}
          placeholder={placeholder}
          // icon={<FiSearch />}
          rightSection={<TheIcon />}
          size="xs"
        />
      </div>
    </div>
  );
};

export default SiteCompSearchBar;

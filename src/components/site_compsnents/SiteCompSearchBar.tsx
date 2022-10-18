import React, { SVGProps } from "react";
import { TextInput } from "@mantine/core";
import { FiSearch } from "react-icons/fi";

interface Props {
  label: string;
  placeholder: string;
  TheIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}
const SiteCompSearchBar = ({ label, placeholder, TheIcon }: Props) => {
  return (
    <div>
      <TextInput label={label} placeholder={placeholder} icon={<FiSearch />} />
    </div>
  );
};

export default SiteCompSearchBar;

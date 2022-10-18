import { MultiSelect, MantineSize } from "@mantine/core";

// const data = [
//   { value: "react", label: "React" },
//   { value: "ng", label: "Angular",  disabled: true },
//   { value: "svelte", label: "Svelte" },
//   { value: "vue", label: "Vue" },
//   { value: "riot", label: "Riot" },
//   { value: "next", label: "Next.js" },
//   { value: "blitz", label: "Blitz.js" },
// ];

interface Props {
  data: Array<{ value: string; label: string }>;
  label: string;
  placeholder?: string;
  desc?: string;
  defaultt?: Array<string>;
  err?: string;
  size?: MantineSize | undefined;
  disabled?: boolean;
}
const SiteMultiSelectComp = ({
  data,
  label,
  placeholder,
  desc,
  defaultt = [""],
  err = "",
  size = "xs",
  disabled = false,
}: Props) => {
  return (
    <div>
      <MultiSelect
        data={data}
        size={size}
        label={label}
        placeholder={placeholder}
        description={desc}
        searchable
        nothingFound="Nothing found"
        clearButtonLabel="Clear selection"
        clearable
        defaultValue={defaultt}
        error={err}
        disabled={disabled}
      />
    </div>
  );
};

export default SiteMultiSelectComp;

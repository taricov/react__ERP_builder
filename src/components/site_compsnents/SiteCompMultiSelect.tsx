import { MultiSelect } from "@mantine/core";

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
  placeholder: string;
  defaultt: Array<string>;
  err: string;
  disabled: boolean;
}
const SiteMultiSelectComp = ({
  data,
  label,
  placeholder,
  defaultt,
  err,
  disabled = false,
}: Props) => {
  return (
    <div>
      <MultiSelect
        data={data}
        label={label}
        placeholder={placeholder}
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

import RichTextEditor from "@mantine/rte";
import { useState } from "react";

const initialValue =
  "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";

const SiteCompTextEditor = () => {
  const [value, onChange] = useState(initialValue);

  return (
    <div>
      <RichTextEditor value={value} onChange={onChange} id="rte" />
    </div>
  );
};

export default SiteCompTextEditor;

import RichTextEditor from "@mantine/rte";
import { useState } from "react";

const initialValue =
  "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";

const SiteCompTextEditor = () => {
  const [value, onChange] = useState(initialValue);

  return (
    <div>
      <RichTextEditor
        value={value}
        className=""
        onChange={onChange}
        placeholder="Pass your Todo(s)"
        classNames={{
          root: "",
          toolbar: "",
          toolbarControl: "hidden",
          toolbarInner: "",
        }}
        // controls={[["bold", "strike", "underline", "italic"]]}
        id="rte"
      />
    </div>
  );
};

export default SiteCompTextEditor;

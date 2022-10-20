import React from "react";
import { useDrop } from "react-dnd";
import TemplateSpaceRow from "./TemplateSpaceRow";
import TemplateSpaceSlot from "./TemplateSpaceSlot";

const ItemTypes = {
  ELEMENT: "box",
};
const TemplateSpace: React.FC = () => {
  //   const [{ isDropping }, drop] = useDrop({
  //     type: ItemTypes.ELEMENT,
  //     accept: (monitor: Object) => console.log(monitor),
  //   });

  return (
    <div className="w-1/4 flex-1 rounded-panel">
      <div className="bg-opacity-10 p-1 h-full">
        <TemplateSpaceRow>
          <TemplateSpaceSlot
          // accept={ItemTypes.ELEMENT}
          // lastDroppedItem
          // onDrop={(item) => console.log()}
          // key={1}
          />
          {/* <TemplateSpaceSlot /> */}
        </TemplateSpaceRow>
      </div>
    </div>
  );
};

export default TemplateSpace;

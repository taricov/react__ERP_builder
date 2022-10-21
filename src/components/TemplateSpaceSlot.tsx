import React, { memo } from "react";
import { DragSourceMonitor, useDrop } from "react-dnd";

const ItemTypes = {
  ELEMENT: "box",
};

export interface SlotProps {
  // accept: string;
  // key: number;
  // lastDroppedItem?: any;
  // onDrop: (item: any) => void;
}

const TemplateSpaceSlot: React.FC = (props) => {
  // const [{ isOver }, drop]: any[] = useDrop((): any => ({
  //   type: ItemTypes.ELEMENT,
  //   accept: (monitor: any) => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // }));
  // isOver ? console.log("Ada") : console.log("ff");
  return (
    <div
      className="bg-primary-800 transition-all duration-150 text-white flex items-center content-center rounded-panel w-1/2 h-10 p-2 overflow-hidden"
      data-testid="field"
      // ref={drop}
    >
      {/* {isActive ? "Release to drop" : "Drag a box here"} */}
      {/* <div ref={drop} className="text-center w-full h-full">
      </div> */}
    </div>
  );
};
export default TemplateSpaceSlot;

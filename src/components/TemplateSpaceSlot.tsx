import React, { memo } from "react";
import { useDrop } from "react-dnd";

const ItemTypes = {
  ELEMENT: "box",
};

export interface SlotProps {
  accept: string;
  key: number;
  lastDroppedItem?: any;
  onDrop: (item: any) => void;
}

const TemplateSpaceSlot: React.FC<SlotProps> = memo((lastDroppedItem) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.ELEMENT,
    drop: () => ({ name: "Field" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = "";
  if (isActive) {
    backgroundColor = "red";
  } else if (canDrop) {
    backgroundColor = "grey";
  }
  return (
    <div
      className="bg-slate-600 transition-all duration-150 text-white flex items-center content-center rounded-panel w-1/2 h-10 p-2 overflow-hidden"
      style={{ backgroundColor }}
      data-testid="field"
      ref={drop}
    >
      {/* {isActive ? "Release to drop" : "Drag a box here"} */}
      {/* <div ref={drop} className="text-center w-full h-full">
      </div> */}
    </div>
  );
});

export default TemplateSpaceSlot;

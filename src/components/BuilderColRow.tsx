import React, { CSSProperties, SVGProps } from "react";
import { DragPreviewImage, useDrag } from "react-dnd";
import { image1, image2 } from "../assets/Images";
// const draggableStyles = (isDragging: boolean, draggableStyle: any) => ({
//   background: isDragging ? "black" : "white",
//   color: isDragging ? "white" : "black",
//   ...draggableStyle,
// });
const style: CSSProperties = {
  // border: "1px dashed gray",
  // padding: "0.5rem 1rem",
  // marginBottom: ".5rem",
  // backgroundColor: "white",
  // cursor: "move",
  // width: "20rem",
};

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  type?: string;
  id: string;
  name: string;
  comp: React.ReactNode;
}

// interface DropResult {
//   name: string;
// }
const ItemTypes = {
  ELEMENT: "box",
};
function BuilderColRow({ Icon, name, title, type, id, comp }: Props) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.ELEMENT,
    item: { name, id, type, comp },
    // end: (item, monitor) => {
    //   const dropResult = monitor.getDropResult<DropResult>();
    // if (item && dropResult) {
    // console.log("");
    // alert(`You dropped ${item} into ${dropResult.name}!`);
    // }
    // },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  });
  // }));
  const opacity = isDragging ? 0.4 : 1;

  // const [{ opacity }, drag, preview] = useDrag(() => ({
  //   type: ItemTypes.ELEMENT,
  //   collect: (monitor: any) => ({
  //     opacity: monitor.isDragging() ? 0.4 : 1,
  //   }),
  // }));
  return (
    <>
      {/* <DragPreviewImage connect={preview} src={""} /> */}
      <div
        id={id}
        // type={type}
        ref={drag}
        style={{ ...style, opacity }}
        className="text-skin-base font-bold bg-skin-builderRow bg-opacity-20 cursor-grab active:cursor-grabbing flex items-center duration-trans ease-out space-x-2 rounded-md overflow-hidden w-full select-none hover:bg-opacity-10 group"
      >
        <div className="bg-skin-builderRowIconBg bg-opacity-10 p-2">
          <Icon
            type={type}
            className="w-5 h-5 opacity-30 duration-trans group-hover:opacity-100"
          />
        </div>
        <p className="text- px-1 w-max pr-10">{title}</p>
      </div>
    </>
  );
}

export default BuilderColRow;

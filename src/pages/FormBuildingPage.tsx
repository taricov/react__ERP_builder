import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BuilderCol from "../components/BuilderCol";
import BuilderConfigCol from "../components/BuilderConfigCol";
import TemplateSpace from "../components/TemplateSpace";
import ToolBar from "../components/ToolBar";
//TODO: re-configure the DnD functions
const FormBuildingPage = () => {
  return (
    <div className="bg-gradient-to-r from-skin-hue2 to-skin-hue0 h-screen max-h-screen relative pt-10">
      <ToolBar />
      <DndProvider backend={HTML5Backend}>
        <div className="flex flex-col">
          <div className="flex flex-1 item-start gap-2 h-screen">
            <BuilderCol />
            {/* <BuilderSpace />
             */}
            <TemplateSpace />
            <BuilderConfigCol />
          </div>
        </div>
      </DndProvider>
    </div>
  );
};

export default FormBuildingPage;

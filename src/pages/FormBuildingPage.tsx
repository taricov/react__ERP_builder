import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BuilderCol from "../components/BuilderCol";
import BuilderConfigCol from "../components/BuilderConfigCol";
import StatusBar from "../components/StatusBar";
import TemplateSpace from "../components/TemplateSpace";
import ToolBar from "../components/ToolBar";
//TODO: add TaskBar
//TODO: tailwind vars (to have unified style sys)
//TODO: re-configure the DnD functions
const FormBuildingPage = () => {
  return (
    <div className="bg-slate-200 h-screen">
      <ToolBar />
      <DndProvider backend={HTML5Backend}>
        <div className="flex flex-col h-full">
          <div className="flex flex-1 item-start bg-slate-200 gap-2">
            <BuilderCol />
            {/* <BuilderSpace />
             */}
            <TemplateSpace />
            <BuilderConfigCol />
          </div>
          <StatusBar />
        </div>
      </DndProvider>
    </div>
  );
};

export default FormBuildingPage;

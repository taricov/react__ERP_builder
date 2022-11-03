import autoAnimate from "@formkit/auto-animate";
import { ActionIcon, CloseButton, Transition } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useEffect, useRef } from "react";
import { CgExpand } from "react-icons/cg";
import SiteCompTextEditor from "../site_compsnents/SiteCompTextEditor";

const TodoApp = () => {
  //   const [todoOpen, setTodoOpen] = useState<boolean>(false);
  const [todoOpenStatus, closeHandlers] = useDisclosure(false);
  const [todoSizeStatus, sizeHandlers] = useDisclosure(false);
  const todoResizerRef = useRef(null);
  // useAutoAnimate(todoResizerRef);
  useEffect(() => {
    todoResizerRef.current && autoAnimate(todoResizerRef.current);
  }, [todoResizerRef]);
  // const [todoResizerRef] = autoAnimate();
  return (
    <>
      <div
        className="w-10 h-10 bg-slate-500 m-16"
        onClick={() => closeHandlers.toggle()}
      ></div>
      <Transition
        mounted={todoOpenStatus}
        transition={"slide-up"}
        duration={200}
        timingFunction="ease"
      >
        {(styles) => (
          <div
            style={styles}
            className={
              (!todoSizeStatus ? `w-2/6 h-3/6 ` : `w-5/6 h-5/6 `) +
              `overflow-hidden rounded-panel p-2 fixed bottom-10 left-10 flex flex-col item-start justify-center bg-primary-600 z-10 dark:bg-black dark:from-black dark:to-slate-800 transition-all duration-trans`
            }
          >
            <div
              className="w-full flex items-center justify-end my-1"
              ref={todoResizerRef}
            >
              <ActionIcon className="" onClick={() => sizeHandlers.toggle()}>
                <CgExpand className="hover:bg-primary-200 transition-colors duration-trans dark:hover:bg-opacity-90 w-fit" />
              </ActionIcon>
              <CloseButton
                onClick={() => closeHandlers.close()}
                size="sm"
                className="hover:bg-primary-200 transition-colors duration-trans dark:hover:bg-opacity-90"
              />
            </div>
            <div className="flex flex-col item-start justify-center w-full h-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-1">
                <div className="p-1 ">Notes go here!!!</div>
                <div>Notes go here!!!</div>
                <div>Notes go here!!!</div>
              </div>
              <div className="w-5/6 h-fit">
                <SiteCompTextEditor />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default TodoApp;

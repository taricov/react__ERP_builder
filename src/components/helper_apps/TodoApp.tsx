import autoAnimate from "@formkit/auto-animate";
import {
  ActionIcon,
  CloseButton,
  Input,
  TextInput,
  Transition,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import React, { useEffect, useRef, useState } from "react";
import { CgExpand } from "react-icons/cg";
import SiteCompTextEditor from "../site_compsnents/SiteCompTextEditor";

const TodoApp = () => {
  //   const [todoOpen, setTodoOpen] = useState<boolean>(false);
  const [todoOpenStatus, closeHandlers] = useDisclosure(false);
  const [todoSizeStatus, sizeHandlers] = useDisclosure(false);
  const [todoList, setTodoList] = useState<string[]>([]);
  const [todoItem, setTodoItem] = useState<string>("");
  const todoResizerRef = useRef(null);
  // useAutoAnimate(todoResizerRef);
  useEffect(() => {
    todoResizerRef.current && autoAnimate(todoResizerRef.current);
  }, [todoResizerRef]);
  // const [todoResizerRef] = autoAnimate();
  const todoSubmit = (e: React.SyntheticEvent) => {
    setTodoItem("");
    e.preventDefault();
    setTodoList([...todoList, todoItem]);
  };
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
              <ul className="list-none flex-1 flex flex-col items-start justify-start gap-1">
                {todoList.map((todo, i) => (
                  <li className="p-1 flex items-between transition-all duration-trans">
                    <TextInput
                      value={todo}
                      key={i}
                      variant="unstyled"
                      className="focus:border focus:border-white"
                    />
                    <CloseButton
                      size={"xs"}
                      color="dark"
                      className="transition-all duration-trans"
                      //   onClick={(key) =>
                      //     setTodoList(todoList.filter((v) => v !== key))
                      //   }
                    />
                  </li>
                ))}
              </ul>
              <div className="w-full h-fit p-3">
                <form
                  onSubmit={todoSubmit}
                  className="flex items-start justify-center w-full gap-2"
                >
                  <TextInput
                    className="flex-1 "
                    variant="default"
                    value={todoItem}
                    onChange={(e) => setTodoItem(e.target.value)}
                  />
                  <Button
                    type="submit"
                    className="bg-primary-500 hover:bg-primary-400 transition-all duration-trans"
                  >
                    Add
                  </Button>
                </form>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default TodoApp;

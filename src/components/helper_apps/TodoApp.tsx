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
import { randomUUID } from "crypto";

import React, { useEffect, useRef, useState } from "react";
import { CgExpand } from "react-icons/cg";
import SiteCompTextEditor from "../site_compsnents/SiteCompTextEditor";

const TodoApp = () => {
  //   const [todoOpen, setTodoOpen] = useState<boolean>(false);
  const [todoOpenStatus, closeHandlers] = useDisclosure(false);
  const [todoSizeStatus, sizeHandlers] = useDisclosure(false);
  const [todoList, setTodoList] =
    useState<[{ id: string; todo: string; completed: boolean }]>();
  const [todoItem, setTodoItem] = useState<string>("");
  const todoResizerRef = useRef(null);
  // useAutoAnimate(todoResizerRef);

  // const [todoResizerRef] = autoAnimate();
  const todoSubmit = (e: React.SyntheticEvent) => {
    setTodoItem("");

    e.preventDefault();
    // setTodoList([...todoList, { id: uuid(), todoItem, completed: false }]);
  };
  const [editTodo, editTodoHandlers] = useDisclosure(false);
  const [editedTodo, setEditedTodo] = useState("");
  console.log(editTodo);
  const todoListRef = useRef(null);
  useEffect(() => {
    todoListRef.current && autoAnimate(todoListRef.current);
    todoResizerRef.current && autoAnimate(todoResizerRef.current);
  });

  //   const removeTodoItem = (id) => {
  // setTodoList(todoList.filter((v) => v.key === id));
  //   };

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
            ref={todoResizerRef}
            style={styles}
            className={
              (!todoSizeStatus ? `w-2/6 h-3/6 ` : `w-5/6 h-5/6 `) +
              `overflow-hidden rounded-panel p-2 fixed bottom-10 left-10 flex flex-col item-start justify-center bg-primary-600 z-10 dark:bg-black dark:from-black dark:to-slate-800 transition-all duration-trans`
            }
          >
            <div className="w-full flex items-center justify-end my-1">
              <ActionIcon
                className="hover:bg-primary-500"
                onClick={() => sizeHandlers.toggle()}
              >
                <CgExpand className="text-slate-200 transition-colors duration-trans dark:hover:bg-opacity-90 w-fit" />
              </ActionIcon>
              <CloseButton
                onClick={() => closeHandlers.close()}
                size="sm"
                className="hover:bg-primary-500 text-slate-200 transition-colors duration-trans dark:hover:bg-opacity-90"
              />
            </div>
            <div className="flex flex-col item-start justify-center w-full h-full">
              <ul
                className="list-none flex-1 flex flex-col items-start justify-start gap-1 w-full overflow-auto p-2"
                ref={todoListRef}
              >
                {/* {todoList.map((todo, i) => (
                  <li className="p-2 rounded-panel text-white text-md flex items-center justify-between bg-primary-500 w-full">
                    {true ? (
                      <div
                        className=""
                        key={i}
                        onClick={(e) =>
                          e.detail === 2
                            ? editTodoHandlers.open()
                            : e.target === e.currentTarget
                            ? console.log(e.currentTarget)
                            : null
                        }
                      >
                        {todo}
                      </div>
                    ) : (
                      <TextInput
                        readOnly={editTodo}
                        value={editedTodo}
                        key={i}
                        variant={"filled"}
                        className=""
                        onChange={(e) => setEditedTodo(e.target.value)}
                      />
                    )}
                    <CloseButton
                      size={"xs"}
                      color="red"
                      className="transition-all duration-trans"
                      //   onClick={(key) =>
                      //     setTodoList(todoList.filter((v) => v !== key))
                      //   }
                    />
                  </li>
                ))} */}
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

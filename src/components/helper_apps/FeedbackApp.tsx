import autoAnimate from "@formkit/auto-animate";
import {
  ActionIcon,
  CloseButton,
  TextInput,
  Transition,
  Button,
  Textarea,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { CgExpand } from "react-icons/cg";

const FeedbackApp = () => {
  const [todoOpenStatus, closeHandlers] = useDisclosure(false);
  const [todoSizeStatus, sizeHandlers] = useDisclosure(false);
  const [value, setValue] = useState(0);

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
              <form className="w-full h-full flex items-start justify-center flex-col gap-2">
                <Group position="center">
                  {/* <Rating value ={value} fractions={2} onChange={setValue} /> */}
                </Group>
                <Textarea
                  className="w-full"
                  placeholder="Write a comment here!"
                />
                {/* <TextInput className="flex-1 " variant="default" /> */}
                <Button
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-400 transition-all duration-trans"
                >
                  Add
                </Button>
              </form>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default FeedbackApp;

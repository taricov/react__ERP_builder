import React from "react";
import BuilderConfigColRow from "./BuilderConfigColRow";
import { Drawer, Input, SimpleGrid, Switch, TextInput } from "@mantine/core";
import BuilderConfigComp from "./BuilderConfigComp";
import { useDisclosure } from "@mantine/hooks";

const BuilderConfigCol = () => {
  const [configOpened, configHandlers] = useDisclosure(true);
  return (
    <>
      {/* Start of the psuedo Btn */}
      <div
        className="bg-primary-400 w-5 h-5"
        onClick={() => configHandlers.open()}
      ></div>
      {/* End of the psuedo Btn */}

      <Drawer
        classNames={{
          header: "flex items-start justify-start",
          drawer: "bg-gradient-to-r from-skin-hue2 to-skin-hue2 h-fit",
        }}
        position="bottom"
        opened={configOpened}
        onClose={() => configHandlers.close()}
        withCloseButton={false}
      >
        <div className="w-full flex items-center justify-center bg-primary-200 text-dimmed text-2xl font-bold py-2">
          Field Configs
        </div>

        <div className="w-10/12 mx-auto  p-5">
          <SimpleGrid cols={2}>
            <Input.Wrapper label="Field Name" withAsterisk>
              <TextInput />
            </Input.Wrapper>
            <Input.Wrapper label="Key ID" withAsterisk>
              <TextInput />
            </Input.Wrapper>
          </SimpleGrid>
          <SimpleGrid cols={2}>
            <Input.Wrapper label="Placeholder">
              <TextInput />
            </Input.Wrapper>
            <Input.Wrapper label="Default Value">
              <TextInput />
            </Input.Wrapper>
          </SimpleGrid>

          <Switch label="Required" labelPosition="left" size="md" />
        </div>
      </Drawer>
    </>
  );
};

export default BuilderConfigCol;

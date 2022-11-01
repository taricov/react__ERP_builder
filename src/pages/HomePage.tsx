import React, { useState } from "react";
import { ButtonCard, ButtonCardAdd } from "../components/ButtonCard";
import {
  AiOutlineSetting,
  AiOutlineHome,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";

import { IoAddSharp, IoConstructOutline } from "react-icons/io5";
import { GrIntegration } from "react-icons/gr";
import { VscFileSubmodule } from "react-icons/vsc";
import SiteCompTooltip from "../components/site_compsnents/SiteCompTooltip";
import {
  Box,
  Divider,
  Modal,
  SimpleGrid,
  TextInput,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import TemplateSpaceConfig from "../components/TemplateSpaceConfig";
import { Link } from "react-router-dom";
import SiteCompDivider from "../components/site_compsnents/SiteCompDivider";
import { GiStripedSun } from "react-icons/gi";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { FiGitPullRequest } from "react-icons/fi";

import SiteCompModal from "../components/site_compsnents/SiteCompModal";
import SiteCompToggle from "../components/site_compsnents/SiteCompToggle";

import SiteCompGROUPchecktoggle from "../components/site_compsnents/SiteCompGROUPchecktoggle";

const HomePage = () => {
  const [createApp, setCreateApp] = useState(false);
  console.log(createApp);
  const theme = useMantineTheme();

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center mx-auto my-0">
      <main className=" flex items-center flex-col justify-center m-auto w-full h-full bg-gradient-to-r from-skin-hue2 to-skin-hue0  pt-10">
        <div className="text-dimmed my-10 w-10/12 text-2xl">
          <SiteCompDivider
            title="Apps"
            TheIcon={AiOutlineAppstoreAdd}
            iconSize="text-2xl"
            titleSize="text-xl"
          />
        </div>
        <div className="w-4/5 flex items-center justify-start mx-auto my-0">
          <ButtonCardAdd
            href="#"
            onClk={() => setCreateApp(true)}
            title="New App"
            desc="Create a new app"
            Icon={IoAddSharp}
          />
        </div>
        {/* <SiteCompModal
          opened={createApp}
          setOpened={setCreateApp}
          onClose={() => setCreateApp(false)}
        > */}
        <Modal
          // classNames={{
          //   modal:
          //     "bg-gradient-to-r from-skin-hue2 to-skin-hue0 w-11/12 overflow-auto h-3/4 p-0",
          // }}
          className="overflow-scroll h-auto"
          opened={createApp}
          onClose={() => setCreateApp(false)}
          overlayColor={theme.colors.dark[9]}
          centered
          withCloseButton={false}
          overlayOpacity={0.75}
          overlayBlur={0}
        >
          <Box className="p-10">
            <SimpleGrid cols={2} p={10}>
              <TextInput label="App Name" withAsterisk />
              <TextInput label="Key" />

              <SiteCompToggle label="Status" disabled={false} />
            </SimpleGrid>
          </Box>

          {/* </SiteCompModal> */}
        </Modal>

        <div className="text-dimmed my-10 w-10/12 text-2xl">
          <SiteCompDivider
            title="Globals"
            TheIcon={GiStripedSun}
            iconSize="text-2xl"
            titleSize="text-xl"
          />
        </div>
        <div className="w-4/5 flex items-center justify-start mx-auto my-0">
          <ButtonCard
            href="/integrations"
            title="Integrations"
            desc="Integrations are legal hacks"
            Icon={FiGitPullRequest}
            // Icon={IoConstructOutline}
          />
          <ButtonCard
            href="/settings"
            title="Settings"
            desc="System Configurations"
            Icon={AiOutlineSetting}
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;

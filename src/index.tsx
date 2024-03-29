import React, { useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import { SpotlightAction, SpotlightProvider } from "@mantine/spotlight";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { SlDocs } from "react-icons/sl";
import { MantineProvider } from "@mantine/styles";
import { Provider, useAtom } from "jotai";
// import { darkModeAtom } from "./components/AppToolBar";
import { darkModeAtom } from "./jotai/atoms";

interface Props {
  children?: React.ReactNode;
  // any props that come into the component
}

const onTrigger = () => {};

const defaultSpotlightActions: SpotlightAction[] = [
  {
    title: "Home",
    // group: "main",
    description: "Get to home page",
    onTrigger: () => (window.location.href = "/"),
    icon: <AiOutlineHome />,
  },
  {
    title: "Settings",
    // group: "main",
    description: "Configure your app as you wish",
    onTrigger: () => (window.location.href = "/settings"),
    icon: <AiOutlineSetting />,
  },
  {
    title: "Docs",
    // group: "main",
    description:
      "Visit the documentation to get more information about how it works",
    onTrigger: () => (window.location.href = "/Docs"),
    icon: <SlDocs />,
  },
];
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const Wrapper = ({ children }: Props): any => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  // const [darkModeStatus] = useAtom(darkModeAtom);
  // console.log("DM", darkModeStatus);
  return children;
};

root.render(
  <>
    <MantineProvider
      theme={{ colorScheme: "light" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <SpotlightProvider
        classNames={{
          searchInput: "bg-primary-100",
          actions: "p-0",
          action: "rounded-none border-b-4",
          actionHovered: "bg-primary-200",
        }}
        actions={defaultSpotlightActions}
        searchIcon={<FiSearch />}
        searchPlaceholder="Search..."
        shortcut={["mod + K"]}
        nothingFoundMessage="Nothing found..."
      >
        <BrowserRouter>
          <Wrapper>
            <React.StrictMode>
              <Provider>
                <App />
              </Provider>
            </React.StrictMode>
          </Wrapper>
        </BrowserRouter>
      </SpotlightProvider>
    </MantineProvider>
  </>
);

// reportWebVitals();

import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, useLocation } from "react-router-dom";
import { SpotlightAction, SpotlightProvider } from "@mantine/spotlight";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { SlDocs } from "react-icons/sl";
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
    onTrigger: () => console.log("Home"),
    icon: <AiOutlineHome />,
  },
  {
    title: "Settings",
    // group: "main",
    description: "Configure your app as you wish",
    onTrigger: () => console.log("settinga"),
    icon: <AiOutlineSetting />,
  },
  {
    title: "Docs",
    // group: "main",
    description:
      "Visit the documentation to get more information about how it works",
    onTrigger: () => console.log("Home"),
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
  return children;
};
root.render(
  <>
    <SpotlightProvider
      actions={defaultSpotlightActions}
      searchIcon={<FiSearch />}
      searchPlaceholder="Search..."
      shortcut={["ctrl + K", "meta + K"]}
      nothingFoundMessage="Nothing found..."
    >
      <BrowserRouter>
        <Wrapper>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Wrapper>
      </BrowserRouter>
    </SpotlightProvider>
  </>
);

// reportWebVitals();

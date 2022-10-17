import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, useLocation } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
  // any props that come into the component
}

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
    <BrowserRouter>
      <Wrapper>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Wrapper>
    </BrowserRouter>
  </>
);

// reportWebVitals();

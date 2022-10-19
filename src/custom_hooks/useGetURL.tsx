import { Anchor } from "@mantine/core";
// import $ from "jquery";
import { useLocation } from "react-router-dom";
//TODO: Change slashColor

import jQuery from "jquery";

declare global {
  interface Window {
    jQuery: typeof jQuery;
    $: typeof jQuery;
  }
}

function homeChecker(): void {
  let x = $(".home__checker");
  console.log(x);
}
export default function useGetURL() {
  const url = useLocation();
  let pathCrumbs = url.pathname.split("/");
  homeChecker();
  let x = "";
  console.log(pathCrumbs);
  const urlCrumbs = pathCrumbs.map((v, i) => {
    let href = `${x}/${v}`;
    return v !== pathCrumbs[pathCrumbs.length - 1] ? (
      <Anchor className="text-white" href={href} key={i}>
        {v === "" ? "Home" : v}
      </Anchor>
    ) : (
      <span className="home__checker" key={i}>
        {pathCrumbs.length > 2 ? v : "You're Home"}
      </span>
    );
  });
  return urlCrumbs;
}

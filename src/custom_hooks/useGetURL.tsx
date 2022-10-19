import { Anchor } from "@mantine/core";
import path from "path";
import { useLocation } from "react-router-dom";
//TODO: Change slashColor
export default function useGetURL() {
  const url = useLocation();
  let pathCrumbs = url.pathname.split("/");
  let x = "";
  console.log(pathCrumbs);
  const urlCrumbs = pathCrumbs.map((v, i) => {
    let href = `${x}/${v}`;
    return v !== pathCrumbs[pathCrumbs.length - 1] ? (
      <Anchor className="text-white" href={href} key={i}>
        {v === "" ? "Home" : v}
      </Anchor>
    ) : (
      <span key={i}>{v}</span>
    );
  });
  return urlCrumbs;
}

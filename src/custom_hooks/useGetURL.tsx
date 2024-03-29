import { Anchor } from "@mantine/core";
import $ from "jquery";
import { useLocation } from "react-router-dom";

// declare global {
//   interface Window {
//     jQuery: typeof jQuery;
//     $: typeof jQuery;
//   }
// }

export default function useGetURL() {
  const url = useLocation();
  let pathCrumbs = url.pathname.split("/");
  let x = "";
  console.log(pathCrumbs);

  const urlCrumbs =
    pathCrumbs[1] !== ""
      ? pathCrumbs.map((v, i) => {
          let href = `${x}/${v}`;
          v = v.includes("_") ? v.split("_").join(" ") : v;
          return v !== pathCrumbs[pathCrumbs.length - 1] ? (
            <Anchor
              className="text-cta-dark dark:text-slate-300 capitalize"
              href={href}
              key={i}
            >
              {v === "" ? "Home" : v}
            </Anchor>
          ) : (
            <span
              className="text-cta-dark dark:text-slate-300 capitalize"
              key={i}
            >
              {v}
            </span>
          );
        })
      : "You're Home";
  return urlCrumbs;
}

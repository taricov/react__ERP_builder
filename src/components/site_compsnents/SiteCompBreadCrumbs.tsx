import { Anchor, Breadcrumbs } from "@mantine/core";
import React from "react";
import useGetURL from "../custom_hooks/useGetURL";

function SiteCompBreadCrumbs() {
  const urlCrumbs = useGetURL();
  return (
    <div className="flex-grow pl-14">
      <Breadcrumbs>{urlCrumbs}</Breadcrumbs>
    </div>
  );
}

export default SiteCompBreadCrumbs;

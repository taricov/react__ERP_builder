import React, { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}
function AppMenuRow({ Icon, title }: Props) {
  return (
    <div className="flex items-center">
      <Icon className="w-4 h-4" />
      <p>{title}</p>
    </div>
  );
}

export default AppMenuRow;

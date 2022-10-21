import React, { SVGProps, forwardRef } from "react";

interface Props {
  title: string;
  desc: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

const ButtonCard = forwardRef<HTMLDivElement, Props>(
  ({ title, desc, Icon }, ref) => {
    return (
      <>
        <a
          // ref={ref}
          href="."
          className="block h-fit w-1/3 text-bg-rev hover:text-white text-lg p-6 bg-primary-900 rounded-panel border shadow-2xl hover:bg-primary-800 hover:-translate-y-2 border-none transition-all duration-trans text-center"
        >
          {/* <a
          // ref={ref}
          href="."
          className="block h-fit w-1/3 text-lg p-6 bg-white rounded-lg border border-gray-200 shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all duration-200ms text-center"
        > */}
          <div className="p-10">{<Icon className="text-6xl m-auto" />}</div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-sm  dark:text-gray-400">{desc}</p>
        </a>
      </>
    );
  }
);

export default ButtonCard;

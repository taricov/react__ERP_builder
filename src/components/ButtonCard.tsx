import React, { SVGProps, forwardRef } from "react";
import { FunctionBody } from "typescript";

interface Props {
  title: string;
  href: string;
  desc: string;
  onClk?: () => void;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export const ButtonCard = forwardRef<HTMLDivElement, Props>(
  ({ title, desc, Icon, href }, ref) => {
    return (
      <>
        <a
          // ref={ref}
          href={href}
          className="mx-2 block text-white h-fit w-1/3 text-bg-rev hover:text-white text-lg p-6 bg-primary-900 rounded-panel border shadow-2xl hover:bg-primary-800 hover:-translate-y-2 border-none transition-all duration-trans text-center"
        >
          {/* <a
          // ref={ref}
          href="."
          className="block h-fit w-1/3 text-lg p-6 bg-white rounded-lg border border-gray-200 shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all duration-200ms text-center"
        > */}
          <div className="p-10">{<Icon className="text-6xl m-auto" />}</div>
          <h5 className="mb-2 text-2xl font-bold text-white tracking-tight dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-sm  dark:text-gray-400">{desc}</p>
        </a>
      </>
    );
  }
);

export const ButtonCardAdd = forwardRef<HTMLDivElement, Props>(
  ({ title, desc, Icon, href, onClk }, ref) => {
    return (
      <>
        <a
          // ref={ref}
          onClick={onClk}
          href={href}
          className={`flex flex-col items-center justify-center mx-2 block text-gray-darkest h-fit w-1/3  hover:text-gray-darker text-lg p-6 rounded-panel border-2 border-slate-300 hover:border-slate-600  transition-all duration-trans text-center`}
        >
          <div className="p-10">{<Icon className="text-7xl m-auto " />}</div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-sm  dark:text-gray-400">{desc}</p>
        </a>
      </>
    );
  }
);

import { Button } from "@mantine/core";
import { IconType } from "rc-tree/lib/interface";
import { SVGProps } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { TiSortNumerically } from "react-icons/ti";
import FunctionsBar from "../components/FunctionsBar";
import ModuleMetaData from "../components/ModuleMetaData";
import NoDataFound from "../components/NoDataFound";
import SiteCompDynamicTable from "../components/site_compsnents/SiteCompDynamicTable";
import StatusBarComp from "../components/StatusBarComp";

// interface btnProps {
//   title: string;
//   disabled: boolean;
//   href: string;
//   // Icon: IconType;
//   // Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
// }

// let btns: btnProps[] = [
//   {
//     title: "First",
//     // Icon: TiSortNumerically,
//     disabled: false,
//     href: "http://taricov.com",
//   },
// ];

const ModulePage = () => {
  const requestRes = true;
  const noData = false;
  return (
    <div className="h-screen pt-10 flex flex-col bg-gradient-to-r from-skin-hue2 to-skin-hue0">
      <FunctionsBar />
      <ModuleMetaData />
      <div className="w-full h-5">
        <Button
          size="xs"
          radius="xs"
          className="bg-primary-500 hover:bg-primary-600 trabsition-color duration-trans"
        >
          <AiOutlineSetting />
          <span className="px-1">Settings</span>
        </Button>
        {/* <StatusBarComp Icon={AiOutlineSetting} text="" /> */}
      </div>
      {/* <div className="mx-4">
        <Button.Group>
          <Button
            size="xs"
            radius="xs"
            className="bg-primary-500 hover:bg-primary-600 trabsition-color duration-trans"
          >
            Something
          </Button>
          <Button
            size="xs"
            radius="xs"
            className="bg-primary-500 hover:bg-primary-600 trabsition-color duration-trans"
          >
            Something
          </Button>
          <Button
            size="xs"
            radius="xs"
            className="bg-primary-500 hover:bg-primary-600 trabsition-color duration-trans"
          >
            Something
          </Button>
          <Button
            size="xs"
            radius="xs"
            className="bg-primary-500 hover:bg-primary-600 trabsition-color duration-trans"
          >
            Something
          </Button>
        </Button.Group>
      </div> */}
      {requestRes && noData ? <NoDataFound /> : <SiteCompDynamicTable />}

      {/* <Button variant="filled" color="green">
          First
          </Button>
          <Button variant="filled" color="green">
          First
          </Button>
          <Button variant="filled" color="green">
          First
          </Button>
          <Button variant="filled" color="green">
          First
          </Button>
          <Button variant="filled" color="green">
          First
          </Button>
          <Button variant="filled" color="green">
          First
          </Button>
          <Button variant="filled" color="green">
          First
        </Button> */}
      {/* {btns.map((btn) => {
          <Button
          title={btn.title}
            // href={btn.href}
            // leftIcon={btn.Icon}
            // radius="xl"
            // disabled={btn.disabled}
            // variant="filled"
            // color="green"
            // component="a"
            // rel="noopener noreferrer"
            // target="_blank"
          />;
        })} */}
    </div>
  );
};

export default ModulePage;

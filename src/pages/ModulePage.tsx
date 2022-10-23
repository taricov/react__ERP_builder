import { Button } from "@mantine/core";
import { IconType } from "rc-tree/lib/interface";
import { SVGProps } from "react";
import { TiSortNumerically } from "react-icons/ti";
import FunctionsBar from "../components/FunctionsBar";
import ModuleMetaData from "../components/ModuleMetaData";
import NoDataFound from "../components/NoDataFound";

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
  return (
    <div className="h-screen pt-10 flex flex-col">
      <FunctionsBar />
      <ModuleMetaData />
      <div className="">
        <Button.Group>
          <Button size="xs" radius="xs" className="bg-primary-500">
            Something
          </Button>
          <Button size="xs" radius="xs" className="bg-primary-500">
            Something
          </Button>
          <Button size="xs" radius="xs" className="bg-primary-500">
            Something
          </Button>
          <Button size="xs" radius="xs" className="bg-primary-500">
            Something
          </Button>
          <Button size="xs" radius="xs" className="bg-primary-500">
            Something
          </Button>
          <Button size="xs" radius="xs" className="bg-primary-500">
            Something
          </Button>
        </Button.Group>
      </div>
      <NoDataFound />

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

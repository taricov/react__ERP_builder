import { Button } from "@mantine/core";
import { IconType } from "rc-tree/lib/interface";
import { SVGProps } from "react";
import { TiSortNumerically } from "react-icons/ti";

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
    <div className="pt-20">
      <Button.Group>
        <Button size="xs" radius="xs" className="bg-primary-500">
          someting
        </Button>
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
      </Button.Group>
    </div>
  );
};

export default ModulePage;

import React, { useRef } from "react";

// ========== Builder Components Icons ========
import { RiText } from "react-icons/ri";
import { BsTextareaResize } from "react-icons/bs";
import { TiSortNumerically } from "react-icons/ti";
import { TbSeparator } from "react-icons/tb";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { BsToggles } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdFormatColorText } from "react-icons/md";
import { RiLayoutRowFill } from "react-icons/ri";
import { CgList } from "react-icons/cg";
import { GiSmartphone } from "react-icons/gi";
import { AiOutlineLink } from "react-icons/ai";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { BsCardText } from "react-icons/bs";
import { BsCalendarDate } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
// =========== Comp ==============
import BuilderColRow from "./BuilderColRow";
import SiteCompInput from "./site_compsnents/SiteCompInput";
import { useDrag } from "react-dnd";
import SiteCompTooltip from "./site_compsnents/SiteCompTooltip";

function BuilderCol() {
  return (
    <div className="h-full p-3 bg-gradient-to-r from-skin-hue1 to-skin-hue2 flex flex-col gap-1 w-fit">
      <BuilderColRow
        comp={<SiteCompInput />}
        name=""
        id=""
        type=""
        Icon={RiText}
        title="Single Line Field"
      />
      <BuilderColRow
        comp={<SiteCompInput />}
        name=""
        id=""
        type=""
        Icon={BsTextareaResize}
        title="Multi-Lines Field"
      />
      <BuilderColRow
        comp={<SiteCompInput />}
        name=""
        id=""
        type=""
        Icon={AiOutlineLink}
        title="URL Field"
      />
      <BuilderColRow
        comp={<SiteCompInput />}
        name=""
        id=""
        type=""
        Icon={MdAlternateEmail}
        title="Email Field"
      />
      <BuilderColRow
        comp={<SiteCompInput />}
        name=""
        id=""
        type=""
        Icon={GiSmartphone}
        title="Phone Number"
      />
      <BuilderColRow
        comp={<SiteCompInput />}
        name=""
        id=""
        type=""
        Icon={BsCalendarDate}
        title="Date"
      />
      <BuilderColRow
        comp={<SiteCompInput />}
        name=""
        id=""
        type=""
        Icon={BiTimeFive}
        title="Time"
      />
      <BuilderColRow
        comp={<SiteCompInput />}
        name=""
        id=""
        type=""
        Icon={BsCurrencyDollar}
        title="Currency"
      />
      <BuilderColRow
        comp={<SiteCompInput />}
        name=""
        id=""
        type=""
        Icon={TiSortNumerically}
        title="Number"
      />
      <BuilderColRow
        comp={<SiteCompInput />}
        name=""
        id=""
        type=""
        Icon={BsToggles}
        title="Toggle"
      />
      <BuilderColRow
        comp={<SiteCompInput />}
        name=""
        id=""
        type=""
        Icon={AiOutlineCheckSquare}
        title="Check Box"
      />
      <BuilderColRow
        comp={<SiteCompInput />}
        name=""
        id=""
        type=""
        Icon={FaMapMarkerAlt}
        title="Map Location"
      />
      <BuilderColRow
        comp={<SiteCompInput />}
        name=""
        id=""
        type=""
        Icon={AiOutlineCloudUpload}
        title="Attachment"
      />
      <BuilderColRow
        comp={<SiteCompInput />}
        name=""
        id=""
        type=""
        Icon={RiLayoutRowFill}
        title="Multiple Sub-Form"
      />
      <BuilderColRow
        comp={<SiteCompInput />}
        name=""
        id=""
        type=""
        Icon={TbSeparator}
        title="Separator"
      />
      <BuilderColRow
        comp={<SiteCompInput />}
        name=""
        id=""
        type=""
        Icon={IoIosArrowDropdownCircle}
        title="Dropdown"
      />
      <BuilderColRow
        comp={<SiteCompInput />}
        name=""
        id=""
        type=""
        Icon={RiCheckboxMultipleLine}
        title="Multi-Select"
      />
      <BuilderColRow
        comp={<SiteCompInput />}
        name="formatted "
        id="10"
        type="formatted_txt"
        Icon={MdFormatColorText}
        title="Formatted Text"
      />
    </div>
  );
}

export default BuilderCol;

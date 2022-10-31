import { Drawer, SimpleGrid, TextInput, useMantineTheme } from "@mantine/core";
import { Button, Dropdown, Popconfirm, Menu } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import Table, { ColumnsType } from "antd/lib/table";
import { ExpandableConfig, TableRowSelection } from "antd/lib/table/interface";
import { PanelRender } from "rc-table/lib/interface";
import React, { MouseEventHandler, useContext, useState } from "react";
import { BsArrowRightSquareFill, BsTrash } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit, FiSearch } from "react-icons/fi";
import { ImBin } from "react-icons/im";
import { BiDownArrow } from "react-icons/bi";
import { HiOutlineDuplicate } from "react-icons/hi";
import { MenuProps } from "rc-menu";
import { AiOutlineSetting } from "react-icons/ai";
import TableSettings from "../TableSettings";
import $ from "jquery";
import SiteCompSearchBar from "./SiteCompSearchBar";
import { moduleMetaDataCtx } from "../ModuleMetaData";

const actionItemList: MenuProps["items"] = [
  {
    label: <a href="#">Edit</a>,
    key: "00",
  },
  {
    label: <a href="#">Duplicate</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: <a href="#">Delete</a>,
    onClick: () => console.log("d"),
    key: "3",
    style: { color: "red" },
  },
];

// <Menu>
//   <Menu.Item key="2">2nd item</Menu.Item>
//   <Menu.Item key="2">2nd item</Menu.Item>
//   <Menu.Item key="0" disabled itemType={"divider"}></Menu.Item>
//   <Menu.Item key="1" onClick={() => console.log("dd")}>
//     Delete
//   </Menu.Item>
// </Menu>
// );

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  serial: number;
}

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    serial: i + 1,
    name: `Edward King ${i}`,
    age: 22,
    address: `London, Park Lane no. ${i}`,
  });
}

interface tblProps {
  //   bordered?: boolean;
  loading?: boolean;
  pagination?: boolean;
  assignedSize?: SizeType;
}

const SiteCompDynamicTable = ({
  loading = false,
  pagination = true,
  assignedSize,
}: tblProps) => {
  const [ScrollBar, setScrollBar] = useState<
    | ({
        x?: string | number | true | undefined;
        y?: string | number | undefined;
      } & {
        scrollToFirstRowOnChange?: boolean | undefined;
      })
    | undefined
  >({ y: 260 });
  const [rowSelection, setRowSelection] = useState<
    TableRowSelection<DataType> | undefined
  >();
  const [footer, setFooter] = useState();
  const [showHeader, setShowHeader] = useState();
  const [title, setTitle] = useState<PanelRender<DataType> | undefined>();
  const [expandedRowRender, setExpandedRowRender] = useState<
    ExpandableConfig<DataType> | undefined
  >();
  const [size, setSize] = useState<SizeType>();
  const [bordered, setBordered] = useState(true);
  const [pageSize, setPageSize] = useState();
  const [simplePagy, setSimplePagy] = useState<boolean | undefined>();

  // Selections
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loadingg, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    setEditMode((editMode) => !editMode);

    // !editMode
    //   ? $("table tr td:first-child input").attr("disabled", "disabled")
    //   : $("table tr td:first-child input").removeAttr("disabled");
    // $(".ant-checkbox-wrapper").css({ PointerEvent: "none" });
    // !editMode
    //   ? $("table tr td:first-child label").addClass("pointer-events-none")
    //   : $("table tr td:first-child label").removeClass("pointer-events-none");

    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 800);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelectionn = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  //Actions Btn onSelect()
  const [opened, setOpened] = useState(false);

  const [current, setCurrent] = useState("mail");

  const menu = (
    <Menu
      className="p-0"
      items={actionItemList}
      onClick={() => console.log("hi there!")}
    />
  );
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const theme = useMantineTheme();
  const [editMode, setEditMode] = useState(false);
  const moduleMetaDataContext = useContext(moduleMetaDataCtx);
  console.log("This is coming from the Table comp", moduleMetaDataContext);
  const columns: ColumnsType<DataType> = [
    {
      title: "No.",
      dataIndex: "serial",
      align: "center",
      width: 40,

      onFilter: (value: any, record) => record.name.includes(value),
    },
    {
      title: "Name",
      dataIndex: "name",
      align: "center",

      // onFilter: (value, record) => record.name.includes(value),
    },
    {
      title: "Age",
      dataIndex: "age",
      // width: 100,
      align: "center",
      // filteredValue: filteredInfo.name || null,
      sorter: (a, b) => a.name.length - b.name.length,

      // sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
      //   }
    },
    {
      title: "Address",
      dataIndex: "address",
      align: "center",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Category 1",
          value: "Category 1",
        },
      ],
      onFilter: (value: any, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length,

      // render: (text, _, index) => (
      //   <input value={text} onChange={(v) => onChange(v, index)} />
      // ),

      // shouldCellUpdate: (record, prevRecord) => {
      //   console.log(record.name, prevRecord.name);
      //   return record.name !== prevRecord.name;
      // },
    },
    {
      title: "Actions",
      key: "operation",
      align: "center",
      fixed: false,
      width: 100,
      render: () => (
        <div className="flex justify-center items-center gap-2">
          <a href="#" className={editMode ? "disabled" : ""}>
            <FiEdit />
          </a>
          <a href="#" className={editMode ? "disabled" : ""}>
            <HiOutlineDuplicate />
          </a>

          {/* render: (_, record: { key: React.Key }) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null, */}
          <Popconfirm title="Sure to delete?">
            <a href="#" className={editMode ? "disabled" : ""}>
              <FaRegTrashAlt className="text-sm" />
            </a>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="w-5/6 m-auto my-0 text-xl">
      <div className="flex items-center justify-between w-full">
        {/* <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          // loading={loadingg}
        >
          Reload
        </Button> */}
        <div className="flex items-center justify-start mb-2 flex-1">
          <Dropdown
            className="flex items-center justify-center gap-2"
            overlay={menu}
            trigger={["click"]}
            placement="topLeft"
            disabled={!hasSelected}
          >
            <Button
              className="bg-primary-600 border-none hover:bg-primary-500"
              type="primary"
              disabled={!hasSelected}
              size="small"
            >
              Actions <BsArrowRightSquareFill />
            </Button>
          </Dropdown>

          <span className="ml-3 text-sm">
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>
        <div className="flex items-center justify-center gap-1">
          {/* <SiteCompSearchBar
            label=""
            placeholder="Search..."
            TheIcon={FiSearch}
          /> */}
          <TextInput
            label={""}
            placeholder="Search..."
            icon={<FiSearch />}
            // rightSection={<TheIcon />}
            size="xs"
          />

          <Button
            className="bg-primary-600 border-none hover:bg-primary-500 focus:bg-primary-500 "
            type="primary"
            onClick={start}
            size="small"
            loading={loadingg}
          >
            Edit
          </Button>
          <Button
            className="bg-primary-600 border-none hover:bg-primary-500 focus:bg-primary-500 "
            type="primary"
            onClick={() => setOpened(!opened)}
            size="small"
          >
            <AiOutlineSetting />
          </Button>
          <Drawer
            classNames={{
              drawer:
                "bg-gradient-to-r from-skin-hue2 to-skin-hue0bg-primary-200",
            }}
            position="bottom"
            size="ms"
            opened={opened}
            padding="lg"
            withCloseButton={false}
            onClose={() => setOpened(false)}
            // overlayColor={
            //   "black"
            // theme.colorScheme === "dark"
            //   ? theme.colors.dark[9]
            //   : theme.colors.gray[2]
            // }
            overlayOpacity={0.1}
            // overlayBlur={0.7}
          >
            <TableSettings />
          </Drawer>
        </div>
      </div>
      <Table
        className=""
        rowClassName={(record, index) =>
          index % 2 === 0
            ? "cursor-pointer bg-primary-300"
            : "cursor-pointer bg-primary-200"
        }
        columns={columns}
        dataSource={data}
        tableLayout="auto"
        pagination={{
          hideOnSinglePage: true,
          pageSize: pageSize,
          simple: simplePagy,
          defaultCurrent: 1,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
          size: "small",
          style: {
            // color: "rgb(103, 116, 142)",
            fontSize: "1rem",
            textAlign: "left",
          },
        }}
        scroll={ScrollBar}
        showHeader={showHeader}
        rowSelection={!editMode ? rowSelectionn : undefined}
        bordered={bordered}
        expandable={expandedRowRender}
        size={assignedSize}
        title={title}
      />
    </div>
  );
};

export default SiteCompDynamicTable;

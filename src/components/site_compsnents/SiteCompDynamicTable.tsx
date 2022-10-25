import { Menu, SimpleGrid } from "@mantine/core";
import { Button, Dropdown, Popconfirm } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import Table, { ColumnsType } from "antd/lib/table";
import { ExpandableConfig, TableRowSelection } from "antd/lib/table/interface";
import { PanelRender } from "rc-table/lib/interface";
import React, { MouseEventHandler, useState } from "react";
import { BsArrowRightSquareFill, BsTrash } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { ImBin } from "react-icons/im";
import { BiDownArrow } from "react-icons/bi";
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    align: "center",

    // onFilter: (value, record) => record.name.includes(value),
  },
  {
    title: "Age",
    dataIndex: "age",
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
    // render: (text, _, index) => (
    //   <input value={text} onChange={(v) => onChange(v, index)} />
    // ),

    // shouldCellUpdate: (record, prevRecord) => {
    //   console.log(record.name, prevRecord.name);
    //   return record.name !== prevRecord.name;
    // },
  },
  {
    title: "Action",
    key: "operation",
    align: "center",
    // fixed: "right",
    // width: 100,
    render: () => (
      <div className="flex justify-center items-center gap-2">
        <a href="#">
          <FiEdit />
        </a>

        {/* render: (_, record: { key: React.Key }) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null, */}
        <Popconfirm title="Sure to delete?">
          <a>
            <FaRegTrashAlt className="text-sm" />
          </a>
        </Popconfirm>
      </div>
    ),
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
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
  >({ y: 300 });
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
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
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

  const menu: JSX.Element = (
    <Menu>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );

  return (
    <div className="w-5/6 m-auto text-xl">
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          // loading={loadingg}
        >
          Reload
        </Button>

        <Dropdown
          overlay={menu}
          className="flex items-center justify-center gap-2"
        >
          <Button>
            Actions <BsArrowRightSquareFill />
          </Button>
        </Dropdown>

        <span className="ml-3 text-sm">
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table
        rowClassName={(record, index) =>
          index % 2 === 0
            ? "cursor-pointer bg-primary-300"
            : "cursor-pointer bg-primary-200"
        }
        columns={columns}
        dataSource={data}
        pagination={{
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
        rowSelection={rowSelectionn}
        bordered={bordered}
        expandable={expandedRowRender}
        size={assignedSize}
        title={title}
      />
    </div>
  );
};

export default SiteCompDynamicTable;

import { SizeType } from "antd/lib/config-provider/SizeContext";
import Table, { ColumnsType } from "antd/lib/table";
import { ExpandableConfig, TableRowSelection } from "antd/lib/table/interface";
import { PanelRender } from "rc-table/lib/interface";
import React, { useState } from "react";

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
    width: 300,
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 300,
    // filteredValue: filteredInfo.name || null,
    // onFilter: (value, record) => record.name.includes(value),
    // sorter: (a, b) => a.name.length - b.name.length,
    // sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
    //   }
  },
  {
    title: "Address",
    dataIndex: "address",
    width: 1000,
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

interface tblProps {
  bordered?: boolean;
  loading?: boolean;
  pagination?: boolean;
  //   size: SizeType;
  //   expandedRowRender: ExpandableConfig<DataType> | undefined;
  //   title: PanelRender<DataType> | undefined;
  //   showHeader: boolean;
  //   footer: boolean;
  //   rowSelection: {};
  //   scroll: boolean | undefined;
}

const SiteCompDynamicTable = ({
  loading = false,
  pagination = true,
}: //   bordered = false,
//   size,
//   expandedRowRender,
//   title,
//   showHeader,
//   footer,
//   rowSelection = {},
//   scroll = undefined,
tblProps) => {
  const [ScrollBar, setScrollBar] = useState(true);
  const [rowSelection, setRowSelection] = useState<
    TableRowSelection<DataType> | undefined
  >();
  const [footer, setFooter] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [title, setTitle] = useState<PanelRender<DataType> | undefined>();
  const [expandedRowRender, setExpandedRowRender] = useState<
    ExpandableConfig<DataType> | undefined
  >();
  const [size, setSize] = useState<SizeType>();
  const [bordered, setBordered] = useState(false);

  return (
    <Table
      rowClassName={(record, index) =>
        index % 2 === 0 ? "cursor-pointer bg-primary-300" : "cursor-pointer"
      }
      className="w-full m-auto text-red"
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 50 }}
      scroll={{ y: 200 }}
      showHeader={showHeader}
      rowSelection={rowSelection}
      bordered={bordered}
      expandable={expandedRowRender}
      size={size}
      title={title}
    />
  );
};

export default SiteCompDynamicTable;

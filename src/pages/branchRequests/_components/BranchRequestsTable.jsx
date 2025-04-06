import Table from "@/components/ui/Table";
import { columnHelper } from "@/utils/utils";

function BranchRequestsTable({ data }) {
  const columns = [
    columnHelper.accessor("row", {
      header: "ردیف",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: "نام و نام خانوادگی",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("mobile", {
      header: "شماره موبایل",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("city", {
      header: "شهر",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("province", {
      header: "استان",
      cell: (info) => info.getValue(),
    }),
  ];
  return <Table columns={columns} data={data} />;
}

export default BranchRequestsTable;

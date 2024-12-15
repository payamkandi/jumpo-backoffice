import Table from "@/components/ui/table/Table";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
const columnHelper = createColumnHelper();

function WalletHistoryTable({ tableData }) {
  const columns = [
    columnHelper.accessor("id", {
      header: "ردیف",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("date", {
      header: "تاریخ",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("operation", {
      header: "عملیات",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("amount", {
      header: "مبلغ",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("invoiceNumber", {
      header: "شماره فاکتور",
      cell: (info) => info.getValue(),
    }),
  ];
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return <Table table={table} />;
}

export default WalletHistoryTable;

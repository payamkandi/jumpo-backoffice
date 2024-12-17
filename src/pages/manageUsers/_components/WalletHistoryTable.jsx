import Table from "@/components/ui/table/Table";
import { columnHelper } from "@/utils/utils";

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

  return <Table columns={columns} data={tableData} />;
}

export default WalletHistoryTable;

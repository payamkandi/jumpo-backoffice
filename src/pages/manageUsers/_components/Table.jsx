import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Eye, ShoppingCart, Wallet2 } from "iconsax-react";
import { useState } from "react";

const columnHelper = createColumnHelper();

const defaultData = [
  {
    rowNumber: 1,
    customerId: "546795",
    contactNumber: "09121615785",
    name: null,
    familyName: null,
    gender: "مرد",
    registrationType: "حضوری",
    walletCredit: "۵,۰۰۰,۰۰۰ ریال",
    email: "idean.modarres89@gmail.com",
  },
  {
    rowNumber: 2,
    customerId: "546795",
    contactNumber: "09121615785",
    name: "آیدین",
    familyName: "مدرس اول",
    gender: "مرد",
    registrationType: "وب سایت",
    walletCredit: "۵,۰۰۰,۰۰۰ ریال",
    email: "idean.modarres89@gmail.com",
  },
  // Add more rows here
];

const columns = [
  columnHelper.accessor("actions", {
    header: "عملیات",
    cell: () => (
      <div className="flex gap-2">
        <Wallet2 size={20} />
        <ShoppingCart size={20} />
        <Eye size={20} />
      </div>
    ),
  }),
  columnHelper.accessor("email", {
    header: "ایمیل",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("walletCredit", {
    header: "اعتبار کیف پول",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("registrationType", {
    header: "ثبت نام از طریق",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("gender", {
    header: "جنسیت",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("familyName", {
    header: "نام خانوادگی",
    cell: (info) => info.getValue() || "-",
  }),
  columnHelper.accessor("name", {
    header: "نام",
    cell: (info) => info.getValue() || "-",
  }),
  columnHelper.accessor("contactNumber", {
    header: "شماره تماس",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("rowNumber", {
    header: "ردیف",
    cell: (info) => info.getValue(),
  }),
].reverse();

function Table() {
  const [data, _setData] = useState([...defaultData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-y-auto">
      <table className="w-full table-auto border-collapse text-center">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-[#D7CFED]">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-2 first:rounded-s-lg last:rounded-e-lg"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="even:bg-gray-100 border-[#f2f0f9] odd:bg-white [&:not(:last-child)]:border-b"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-2 py-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

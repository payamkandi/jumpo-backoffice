import manageUserContext from "@/contexts/manageUserContext";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Eye, ShoppingCart, Wallet2 } from "iconsax-react";
import { useContext, useState } from "react";

const columnHelper = createColumnHelper();

const defaultData = [
  {
    rowNumber: 1,
    customerId: "546795",
    contactNumber: "09909416143",
    name: null,
    nationalId: "4271028585",
    birthDate: "1370/02/02",
    familyName: null,
    gender: "مرد",
    registrationType: "حضوری",
    walletCredit: "۵,۰۰۰,۰۰۰ ریال",
    email: "idean.modarres89@gmail.com", 

    cardId: "1234654697",
  },
  {
    rowNumber: 2,
    customerId: "546795",
    contactNumber: "09330760206",
    nationalId: "4271028585",
    name: "آیدین",
    familyName: "مدرس اول",
    birthDate: "1370/02/02",
    gender: "مرد",
    registrationType: "وب سایت",
    walletCredit: "۵,۰۰۰,۰۰۰ ریال",
    email: "idean.modarres89@gmail.com",
    cardId: "1234654697",
  },
];

function Table() {
  const { setUserInfo, setInfoModal } = useContext(manageUserContext);

  const columns = [
    columnHelper.accessor("actions", {
      header: "عملیات",
      cell: (info) => (
        <div className="flex gap-2">
          <div className="cursor-pointer">
            <Wallet2 size={20} color="#7E65C6" />
          </div>
          <div className="cursor-pointer">
            <ShoppingCart size={20} color="#7E65C6" />
          </div>
          <div
            className="cursor-pointer"
            onClick={() =>
              openUserDetailsHandler(info.row.original.contactNumber)
            }
          >
            <Eye size={20} color="#7E65C6" />
          </div>
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

  const [data, _setData] = useState([...defaultData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const openUserDetailsHandler = (id) => {
    const userData = data.find((user) => user.contactNumber === id);
    setUserInfo(userData);
    setInfoModal(true);
  };

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
              className="even:bg-gray-100 border-[#f2f0f9] text-[#415762] odd:bg-white [&:not(:last-child)]:border-b"
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

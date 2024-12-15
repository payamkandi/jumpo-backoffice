import { flexRender } from "@tanstack/react-table";

function Table({ table }) {
  return (
    <div className="overflow-y-auto">
      <table className="w-full table-auto border-collapse text-center">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-[#D7CFED]">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-2 py-1 sm:text-sm text-xs font-semibold first:rounded-s-lg last:rounded-e-lg sm:h-12 sm:px-4 sm:py-3"
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
              className="even:bg-gray-100 h-[55px] border-[#f2f0f9] text-xs text-[#415762] odd:bg-white sm:text-sm [&:not(:last-child)]:border-b"
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

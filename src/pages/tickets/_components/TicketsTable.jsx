import Table from "@/components/ui/Table";
import TicketContext from "@/contexts/ticketsContext";
import { columnHelper } from "@/utils/utils";
import { Eye } from "iconsax-react";
import { useContext } from "react";
function TicketsTable({ tickets }) {
  const { setInfoModal, setTicketInfo } = useContext(TicketContext);

  const showDetailModalHandler = (ticketId) => {
    const data = tickets.find((ticket) => ticket.ticketId === ticketId);
    setInfoModal(true);
    setTicketInfo(data);
  };
  const columns = [
    columnHelper.accessor("row", {
      header: "ردیف",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("ticketId", {
      header: "شناسه بلیت",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("phoneNumber", {
      header: "شماره موبایل",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("fullName", {
      header: "نام و نام خانوادگی",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("playTime", {
      header: "زمان بازی",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("branch", {
      header: "شعبه",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("dateTime", {
      header: "تاریخ و ساعت",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("participants", {
      header: "تعداد نفرات",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("ticketSale", {
      header: "فروش بلیت",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("action", {
      header: "عملیات",
      cell: (info) => (
        <div className="flex items-center justify-center">
          <Eye
            className="cursor-pointer"
            size={20}
            color="#7E65C6"
            onClick={() => {
              showDetailModalHandler(info.row.original.ticketId);
            }}
          />
        </div>
      ),
    }),
  ];
  return <Table columns={columns} data={tickets} />;
}

export default TicketsTable;

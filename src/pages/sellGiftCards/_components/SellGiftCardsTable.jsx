import Table from "@/components/ui/Table";
import SellGiftCardsContext from "@/contexts/sellGiftCardsContext";
import { columnHelper } from "@/utils/utils";
import { Eye } from "iconsax-react";
import { useContext } from "react";

function SellGiftCardsTable({ data }) {
  const { setCardInfo, setInfoModal } = useContext(SellGiftCardsContext);
  const columns = [
    columnHelper.accessor("rowNumber", {
      header: "ردیف",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("nameAndFamily", {
      header: "نام و نام خانوادگی",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("purchaseDate", {
      header: "تاریخ خرید",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("cardId", {
      header: "شناسه کارت",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("cardName", {
      header: "نام کارت",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("amount", {
      header: "مبلغ کارت",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("expDate", {
      header: "تاریخ انقضا",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: "وضعیت",
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
              showDetailModalHandler(info.row.original.cardId);
            }}
          />
        </div>
      ),
    }),
  ];
  const showDetailModalHandler = (id) => {
    const card = data.find((card) => card.cardId === id);
    setCardInfo(card);
    setInfoModal(true);
  };

  return <Table columns={columns} data={data} />;
}

export default SellGiftCardsTable;

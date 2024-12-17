import Switch from "@/components/ui/switch/Switch";
import Table from "@/components/ui/table/Table";
import ManageCardsContext from "@/contexts/manageCardsContext";
import { useCardsStore } from "@/store/cardsStore";
import { createColumnHelper } from "@tanstack/react-table";
import { Eye, Trash } from "iconsax-react";
import { useContext } from "react";

const columnHelper = createColumnHelper();

function CardsTable({ data }) {
  const { setCardInfo, setInfoModal, setCardIdToDelete, setDeleteModal } =
    useContext(ManageCardsContext);
  const toggleCardStatus = useCardsStore((state) => state.toggleCardStatus);
  const columns = [
    columnHelper.accessor("rowNumber", {
      header: "ردیف",
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
    columnHelper.accessor("isActive", {
      header: "وضعیت",
      cell: (info) => (
        <div className="flex items-center justify-center">
          <Switch
            size="small"
            checked={info.getValue()}
            onChange={() => toggleCardStatus(info.row.original.cardId)}
          />
        </div>
      ),
    }),
    columnHelper.accessor("actions", {
      header: "عملیات",
      cell: (info) => (
        <div className="flex items-center justify-center gap-2">
          <div className="cursor-pointer">
            <Trash
              size={20}
              color="#7E65C6"
              onClick={() => {
                deleteCardHandler(info.row.original.cardId);
              }}
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => openUserDetailsHandler(info.row.original.cardId)}
          >
            <Eye size={20} color="#7E65C6" />
          </div>
        </div>
      ),
    }),
  ];

  const deleteCardHandler = (id) => {
    setCardIdToDelete(id);
    setDeleteModal(true);
  };
  const openUserDetailsHandler = (id) => {
    const cardData = data.find((card) => card.cardId === id);
    setCardInfo(cardData);
    setInfoModal(true);
  };
  return <Table columns={columns} data={data} />;
}

export default CardsTable;

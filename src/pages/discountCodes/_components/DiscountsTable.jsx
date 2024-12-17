import Switch from "@/components/ui/switch/Switch";
import Table from "@/components/ui/table/Table";
import DiscountsContext from "@/contexts/discountsContext";
import { useDiscountsStore } from "@/store/discountStore";
import { columnHelper } from "@/utils/utils";
import { Eye, Trash } from "iconsax-react";
import { useContext } from "react";

function DiscountsTable({ data }) {
  const {
    setDeleteModal,
    setDiscountInfo,
    setInfoModal,
    setDiscountIdToDelete,
  } = useContext(DiscountsContext);
  const toggleDiscountStatus = useDiscountsStore(
    (state) => state.toggleDiscountStatus,
  );
  const deleteDiscountHandler = (id) => {
    setDiscountIdToDelete(id);
    setDeleteModal(true);
  };
  const openDiscountDetailsHandler = (id) => {
    const discountData = data.find((discount) => discount.discountId === id);
    setDiscountInfo(discountData);
    setInfoModal(true);
  };
  const columns = [
    columnHelper.accessor("row", {
      header: "ردیف",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("codeName", {
      header: "نام کد تخفیف",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("discountCode", {
      header: "کد تخفیف",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("discountAmount", {
      header: "مقدار تخفیف",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("customerType", {
      header: "تخصیص به مشتری  ",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("creationDate", {
      header: "تاریخ ایجاد کد",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("expirationDate", {
      header: "تاریخ انقضا",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("codeStatus", {
      header: "وضعیت",
      cell: (info) => (
        <div className="flex items-center justify-center">
          <Switch
            size="small"
            checked={info.getValue()}
            onChange={() => toggleDiscountStatus(info.row.original.discountId)}
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
                deleteDiscountHandler(info.row.original.discountId);
              }}
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() =>
              openDiscountDetailsHandler(info.row.original.discountId)
            }
          >
            <Eye size={20} color="#7E65C6" />
          </div>
        </div>
      ),
    }),
  ];
  return <Table columns={columns} data={data}></Table>;
}

export default DiscountsTable;

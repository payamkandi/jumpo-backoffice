import Table from "@/components/ui/Table";
import manageUserContext from "@/contexts/manageUserContext";
import { columnHelper } from "@/utils/utils";
import { Eye, ShoppingCart, Wallet2 } from "iconsax-react";
import { useContext } from "react";
import { useNavigate } from "react-router";

function UsersTable({ data }) {
  const { setUserInfo, setInfoModal } = useContext(manageUserContext);
  const navigate = useNavigate();
  const columns = [
    columnHelper.accessor("actions", {
      header: "عملیات",
      cell: (info) => (
        <div className="flex items-center justify-center gap-2">
          <div className="cursor-pointer">
            <Wallet2
              size={20}
              color="#7E65C6"
              onClick={() => {
                openWalletHistoryHandler(info.row.original.contactNumber);
              }}
            />
          </div>
          <div className="cursor-pointer">
            <ShoppingCart
              size={20}
              color="#7E65C6"
              onClick={() =>
                openUserPurchaseHistoryHandler(info.row.original.contactNumber)
              }
            />
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

  const openUserDetailsHandler = (id) => {
    const userData = data.find((user) => user.contactNumber === id);
    setUserInfo(userData);
    setInfoModal(true);
  };
  const openUserPurchaseHistoryHandler = (id) => {
    navigate(`/manage-users/purchase-history/${id}`);
  };

  const openWalletHistoryHandler = (id) => {
    navigate(`/manage-users/wallet-history/${id}`);
  };

  return <Table columns={columns} data={data} />;
}

export default UsersTable;

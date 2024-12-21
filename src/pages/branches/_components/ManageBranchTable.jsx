import Switch from "@/components/ui/switch/Switch";
import Table from "@/components/ui/table/Table";
import BranchesContext from "@/contexts/branchesContext";
import { columnHelper } from "@/utils/utils";
import { Eye, MoneyArchive } from "iconsax-react";
import { useContext } from "react";

function ManageBranchTable({ data }) {
  const {
    toggleArchiveModal,
    toggleInfoModal,
    setBranchInfo,
    setBranchIdToArchive,
  } = useContext(BranchesContext);

  const hanldeArchiveStatus = (id) => {
    toggleArchiveModal();
    setBranchIdToArchive(id);
  };

  const handleViewDetails = (id) => {
    const branchData = data.find((branch) => branch.branchId === id);
    setBranchInfo(branchData);
    toggleInfoModal();
  };

  const columns = [
    columnHelper.accessor("row", {
      header: "ردیف",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("branchId", {
      header: "شناسه شعبه",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("branchName", {
      header: "نام شعبه",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("representativeName", {
      header: "نام و نام خانوادگی نماینده",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("representativePhone", {
      header: "شماره موبایل نماینده",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("city", {
      header: "شهر",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("province", {
      header: "استان",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("username", {
      header: "نام کاربری نماینده",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: "وضعیت",
      cell: (info) => (
        <div className="flex items-center justify-center">
          <Switch size="small" checked={info.getValue()} disabled />
        </div>
      ),
    }),
    columnHelper.accessor("actions", {
      header: "عملیات",
      cell: (info) => (
        <div className="flex items-center justify-center gap-2">
          <div
            className="cursor-pointer"
            onClick={() => hanldeArchiveStatus(info.row.original.branchId)}
          >
            <MoneyArchive size={20} color="#7E65C6" />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => handleViewDetails(info.row.original.branchId)}
          >
            <Eye size={20} color="#7E65C6" />
          </div>
        </div>
      ),
    }),
  ];

  return <Table columns={columns} data={data} />;
}

export default ManageBranchTable;

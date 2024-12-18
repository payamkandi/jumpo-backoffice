import Table from "@/components/ui/table/Table";
import ScoresContext from "@/contexts/scoresContext";
import { columnHelper } from "@/utils/utils";
import { Eye } from "iconsax-react";
import { useContext } from "react";

function ScoresTable({ data }) {
  const { setScoreInfo, setInfoModal } = useContext(ScoresContext);
  const openDetailsHandler = (id) => {
    const scoreData = data.find((score) => score.id === id);
    setScoreInfo(scoreData);
    setInfoModal(true);
  };
  const columns = [
    columnHelper.accessor("id", {
      header: "ردیف",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: "نام و نام خانوادگی",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("nationalCode", {
      header: "کد ملی",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("mobileNumber", {
      header: "شماره موبایل",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("scoreDate", {
      header: "تاریخ کسب آخرین امتیاز",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("totalScore", {
      header: "مجموع امتیاز",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("latestScore", {
      header: "آخرین امتیاز",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("actions", {
      header: "عملیات",
      cell: (info) => (
        <div className="flex items-center justify-center gap-2">
          <div
            className="cursor-pointer"
            onClick={() => openDetailsHandler(info.row.original.id)}
          >
            <Eye size={20} color="#7E65C6" />
          </div>
        </div>
      ),
    }),
  ];

  return <Table columns={columns} data={data} />;
}

export default ScoresTable;

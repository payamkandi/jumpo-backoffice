import TabsDynamic from "@/components/ui/tabsDaynamic/TabsDaynamic";
import { useUsersStore } from "@/store/usersStore";
import { useState } from "react";
import WalletHistoryTable from "./WalletHistoryTable";

function WalletHistoriesSection({ id }) {
  const users = useUsersStore((state) => state.users);
  const user = users.find((user) => user.contactNumber === id);
  const [tab, setTab] = useState("online");
  const data = {
    inPerson: [
      {
        id: 1,
        date: "۱۴۰۳/۰۷/۱۲ - ۱۴:۰۳:۳۳",
        operation: "افزایش موجودی",
        amount: "۵۰,۰۰۰,۰۰۰ ریال",
        invoiceNumber: "-",
      },
      {
        id: 2,
        date: "۱۴۰۳/۰۷/۱۲ - ۱۴:۰۳:۳۳",
        operation: "افزایش موجودی",
        amount: "۵۰,۰۰۰,۰۰۰ ریال",
        invoiceNumber: "-",
      },
      {
        id: 3,
        date: "۱۴۰۳/۰۷/۱۲ - ۱۴:۰۳:۳۳",
        operation: "افزایش موجودی",
        amount: "۵۰,۰۰۰,۰۰۰ ریال",
        invoiceNumber: "-",
      },
      {
        id: 4,
        date: "۱۴۰۳/۰۷/۱۲ - ۱۴:۰۳:۳۳",
        operation: "افزایش موجودی",
        amount: "۵۰,۰۰۰,۰۰۰ ریال",
        invoiceNumber: "-",
      },
    ],
    online: [
      {
        id: 1,
        date: "۱۴۰۳/۰۷/۱۲ - ۱۴:۰۳:۳۳",
        operation: "افزایش موجودی",
        amount: "۵۰,۰۰۰,۰۰۰ ریال",
        invoiceNumber: "-",
      },
      {
        id: 2,
        date: "۱۴۰۳/۰۷/۱۲ - ۱۴:۰۳:۳۳",
        operation: "افزایش موجودی",
        amount: "۵۰,۰۰۰,۰۰۰ ریال",
        invoiceNumber: "-",
      },
      {
        id: 3,
        date: "۱۴۰۳/۰۷/۱۲ - ۱۴:۰۳:۳۳",
        operation: "افزایش موجودی",
        amount: "۵۰,۰۰۰,۰۰۰ ریال",
        invoiceNumber: "-",
      },
      {
        id: 4,
        date: "۱۴۰۳/۰۷/۱۲ - ۱۴:۰۳:۳۳",
        operation: "افزایش موجودی",
        amount: "۵۰,۰۰۰,۰۰۰ ریال",
        invoiceNumber: "-",
      },
      {
        id: 5,
        date: "۱۴۰۳/۰۷/۱۲ - ۱۴:۰۳:۳۳",
        operation: "کسر شده",
        amount: "۵۰,۰۰۰,۰۰۰ ریال",
        invoiceNumber: "۲۱۲۱۲۳",
      },
      {
        id: 6,
        date: "۱۴۰۳/۰۷/۱۲ - ۱۴:۰۳:۳۳",
        operation: "کسر شده",
        amount: "۵۰,۰۰۰,۰۰۰ ریال",
        invoiceNumber: "۲۱۲۱۲۳",
      },
      {
        id: 7,
        date: "۱۴۰۳/۰۷/۱۲ - ۱۴:۰۳:۳۳",
        operation: "کسر شده",
        amount: "۵۰,۰۰۰,۰۰۰ ریال",
        invoiceNumber: "۲۱۲۱۲۳",
      },
      {
        id: 8,
        date: "۱۴۰۳/۰۷/۱۲ - ۱۴:۰۳:۳۳",
        operation: "کسر شده",
        amount: "۵۰,۰۰۰,۰۰۰ ریال",
        invoiceNumber: "۲۱۲۱۲۳",
      },
    ],
  };

  const tabs = [
    {
      name: "آنلاین",
      id: "1",
      click: () => {
        setTab("online");
      },
    },
    {
      name: "حضوری",
      id: "2",
      click: () => {
        setTab("inPerson");
      },
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
        <div className="w-full">
          <span className="text-sm font-normal text-[#415762]">
            شناسه مشتری :
          </span>
          <span className="font-base text-sm text-[#1D262B]">
            {" " + user.customerId + " "}
          </span>
        </div>
        <div className="w-full">
          <span className="text-sm font-normal text-[#415762]">
            نام و نام خانوادگی مشتری :
          </span>
          <span className="font-base text-sm text-[#1D262B]">
            {" " + user.name + " " + user.familyName + " "}
          </span>
        </div>
        <div className="w-full">
          <span className="text-sm font-normal text-[#415762]">
            شناسه کارت :
          </span>
          <span className="font-base text-sm text-[#1D262B]">
            {" " + user.cardId + " "}
          </span>
        </div>
        <div className="w-full">
          <span className="text-sm font-normal text-[#415762]">
            میزان اعتبار :
          </span>
          <span className="font-base text-sm text-[#1D262B]">
            {" " + user.walletCredit + " "}
          </span>
        </div>
      </div>
      <TabsDynamic data={tabs} />
      <WalletHistoryTable tableData={data[tab]} />
    </>
  );
}

export default WalletHistoriesSection;

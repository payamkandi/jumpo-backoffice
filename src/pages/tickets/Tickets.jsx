import PageWrapper from "@/components/layout/PageWrapper";
import useTicketStore from "@/store/ticketStore";
import { useContext, useEffect } from "react";
import TicketsTable from "./_components/TicketsTable";
import InfoModal from "@/components/ui/infoModal/InfoModal";
import TicketContext, {
  TicketContextProvider,
} from "@/contexts/ticketsContext";
import { ticketInfoMapper } from "@/utils/utils";
const defaultData = [
  {
    row: 1,
    discount: 5,
    amountOfWalletUsage: 10,
    buyDate: "1403/08/08",
    ticketAmount: "54500000ریال",
    paidAmount: "545505000ریال",
    ticketId: "5429725",
    phoneNumber: "09136715736",
    fullName: "آیدین مدرس اول",
    playTime: "30 دقیقه",
    branch: "ایبال",
    dateTime: "1403/10/08 - 10:00-10:30",
    participants: 2,
    ticketSale: "حضوری",
    actions: "مشاهده",
  },
  {
    row: 2,
    discount: 5,
    amountOfWalletUsage: 10,
    buyDate: "1403/08/08",
    ticketAmount: "54500000ریال",
    paidAmount: "545505000ریال",
    ticketId: "5429375",
    phoneNumber: "09136715736",
    fullName: "آیدین مدرس اول",
    playTime: "30 دقیقه",
    branch: "ایبال",
    dateTime: "1403/10/08 - 10:00-10:30",
    participants: 2,
    ticketSale: "حضوری",
    actions: "مشاهده",
  },
  {
    row: 3,
    discount: 5,
    amountOfWalletUsage: 10,
    buyDate: "1403/08/08",
    ticketAmount: "54500000ریال",
    paidAmount: "545505000ریال",
    ticketId: "5442975",
    phoneNumber: "09136715736",
    fullName: "آیدین مدرس اول",
    playTime: "30 دقیقه",
    branch: "ایبال",
    dateTime: "1403/10/08 - 10:00-10:30",
    participants: 2,
    ticketSale: "حضوری",
    actions: "مشاهده",
  },
  {
    row: 4,
    discount: 5,
    amountOfWalletUsage: 10,
    buyDate: "1403/08/08",
    ticketAmount: "54500000ریال",
    paidAmount: "545505000ریال",
    ticketId: "5452975",
    phoneNumber: "09136715736",
    fullName: "آیدین مدرس اول",
    playTime: "30 دقیقه",
    branch: "ایبال",
    dateTime: "1403/10/08 - 10:00-10:30",
    participants: 2,
    ticketSale: "وب سایت",
    actions: "مشاهده",
  },
  {
    row: 5,
    discount: 5,
    amountOfWalletUsage: 10,
    buyDate: "1403/08/08",
    ticketAmount: "54500000ریال",
    paidAmount: "545505000ریال",
    ticketId: "5426975",
    phoneNumber: "09136715736",
    fullName: "آیدین مدرس اول",
    playTime: "30 دقیقه",
    branch: "ساتنا",
    dateTime: "1403/10/08 - 10:00-10:30",
    participants: 2,
    ticketSale: "وب سایت",
    actions: "مشاهده",
  },
  {
    row: 6,
    discount: 5,
    amountOfWalletUsage: 10,
    buyDate: "1403/08/08",
    ticketAmount: "54500000ریال",
    paidAmount: "545505000ریال",
    ticketId: "5472975",
    phoneNumber: "09136715736",
    fullName: "آیدین مدرس اول",
    playTime: "30 دقیقه",
    branch: "ساتنا",
    dateTime: "1403/10/08 - 10:00-10:30",
    participants: 2,
    ticketSale: "وب سایت",
    actions: "مشاهده",
  },
  {
    row: 7,
    discount: 5,
    amountOfWalletUsage: 10,
    buyDate: "1403/08/08",
    ticketAmount: "54500000ریال",
    paidAmount: "545505000ریال",
    ticketId: "5429875",
    phoneNumber: "09136715736",
    fullName: "آیدین مدرس اول",
    playTime: "30 دقیقه",
    branch: "ساتنا",
    dateTime: "1403/10/08 - 10:00-10:30",
    participants: 2,
    ticketSale: "وب سایت",
    actions: "مشاهده",
  },
  {
    row: 8,
    discount: 5,
    amountOfWalletUsage: 10,
    buyDate: "1403/08/08",
    ticketAmount: "54500000ریال",
    paidAmount: "545505000ریال",
    ticketId: "542995",
    phoneNumber: "09136715736",
    fullName: "آیدین مدرس اول",
    playTime: "30 دقیقه",
    branch: "ساتنا",
    dateTime: "1403/10/08 - 10:00-10:30",
    participants: 2,
    ticketSale: "وب سایت",
    actions: "مشاهده",
  },
  {
    row: 9,
    discount: 5,
    amountOfWalletUsage: 10,
    buyDate: "1403/08/08",
    ticketAmount: "54500000ریال",
    paidAmount: "545505000ریال",
    ticketId: "5402975",
    phoneNumber: "09136715736",
    fullName: "آیدین مدرس اول",
    playTime: "30 دقیقه",
    branch: "ساتنا",
    dateTime: "1403/10/08 - 10:00-10:30",
    participants: 2,
    ticketSale: "وب سایت",
    actions: "مشاهده",
  },
  {
    row: 10,
    discount: 5,
    amountOfWalletUsage: 10,
    buyDate: "1403/08/08",
    ticketAmount: "54500000ریال",
    paidAmount: "545505000ریال",
    ticketId: "54221975",
    phoneNumber: "09136715736",
    fullName: "آیدین مدرس اول",
    playTime: "30 دقیقه",
    branch: "ساتنا",
    dateTime: "1403/10/08 - 10:00-10:30",
    participants: 2,
    ticketSale: "وب سایت",
    actions: "مشاهده",
  },
];

function Tickets() {
  const tickets = useTicketStore((state) => state.tickets);

  const setTickets = useTicketStore((state) => state.setTickets);
  const { ticketInfo, infoModal, setInfoModal } = useContext(TicketContext);
  useEffect(() => {
    setTickets(defaultData);
  }, []);
  return (
    <>
      <InfoModal
        title="اطلاعات فروش بلیت"
        isOpen={infoModal}
        toggle={() => setInfoModal((prev) => !prev)}
        data={ticketInfoMapper(ticketInfo)}
      />
      <PageWrapper title="لیست فروش بلیت ها">
        {tickets.length === 0 ? (
          <span>هیچ بلیتی یافت نشد</span>
        ) : (
          <TicketsTable tickets={tickets} />
        )}
      </PageWrapper>
    </>
  );
}

const TicketsWithProvider = () => {
  return (
    <TicketContextProvider>
      <Tickets />
    </TicketContextProvider>
  );
};

export default TicketsWithProvider;

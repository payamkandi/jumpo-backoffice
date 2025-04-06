import PageWrapper from "@/components/layout/PageWrapper";
import InfoModal from "@/components/ui/InfoModal";
import SellGiftCardsContext, {
  SellGiftCardsProvider,
} from "@/contexts/sellGiftCardsContext";
import { cardInfoMapper } from "@/utils/utils";
import { useContext, useEffect } from "react";
import SellGiftCardsTable from "./_components/SellGiftCardsTable";
import { useCardsStore } from "@/store/cardsStore";

const defaultData = [
  {
    rowNumber: 1,
    customerId: "546795",
    purchaseDate: "1403/08/09",
    expDate: "1404/05/05",
    cardCode: "*******",
    nameAndFamily: "آیدین مدرس اول",
    dateOfRegistration: "14038/08/09",
    email: "idean.modarres89@gmail.com",
    status: "استفاده شده",
    isActive: true,
    amount: "50,000,000 ریال",
    cardName: "کارت هدیه",
    cardId: "856421655247",
  },
  {
    rowNumber: 2,
    customerId: "546795",
    purchaseDate: "1403/08/09",
    expDate: "1404/05/05",
    cardCode: "*******",
    nameAndFamily: "آیدین مدرس اول",
    dateOfRegistration: "14038/08/09",
    email: "idean.modarres89@gmail.com",
    status: "منقضی",
    isActive: false,
    amount: "50,000,000 ریال",
    cardName: "کارت هدیه",
    cardId: "854165521247",
  },
  {
    rowNumber: 3,
    customerId: "546795",
    purchaseDate: "1403/08/09",
    expDate: "1404/05/05",
    cardCode: "*******",
    nameAndFamily: "آیدین مدرس اول",
    dateOfRegistration: "14038/08/09",
    email: "idean.modarres89@gmail.com",
    status: "استفاده نشده",
    isActive: true,
    amount: "50,000,000 ریال",
    cardName: "کارت هدیه",
    cardId: "854146554247",
  },
];

function SellGiftCards() {
  const setCards = useCardsStore((state) => state.setCards);
  const cards = useCardsStore((state) => state.cards);
  const { cardInfo, infoModal, setInfoModal } =
    useContext(SellGiftCardsContext);
  const toggleInfoModalHandler = () => {
    setInfoModal((prev) => !prev);
  };
  useEffect(() => {
    setCards(defaultData);
  }, [setCards]);

  return (
    <>
      <InfoModal
        title="جزئیات فروش کارت هدیه"
        data={cardInfoMapper(cardInfo)}
        isOpen={infoModal}
        toggle={toggleInfoModalHandler}
      />
      <PageWrapper title="فروش کارت هدیه">
        {cards.length === 0 ? (
          <span>هیچ کارتی یافت نشد</span>
        ) : (
          <SellGiftCardsTable data={cards} />
        )}
      </PageWrapper>
    </>
  );
}

const ManageGiftCardsWithProviders = () => {
  return (
    <SellGiftCardsProvider>
      <SellGiftCards />
    </SellGiftCardsProvider>
  );
};

export default ManageGiftCardsWithProviders;

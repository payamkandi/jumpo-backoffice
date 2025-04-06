import PageWrapper from "@/components/layout/PageWrapper";
import Button from "@/components/ui/Button";
import { useCardsStore } from "@/store/cardsStore";
import { useEffect } from "react";
import CardsTable from "./_componenets/CardsTable";
import { useNavigate } from "react-router";
import { ManageCardsProvider } from "@/contexts/manageCardsContext";
import InfoModal from "@/components/ui/InfoModal";
import ManageCardsContext from "@/contexts/manageCardsContext";
import { cardInfoMapper } from "@/utils/utils";
import { useContext } from "react";
import DeleteCardModal from "./_componenets/DeleteCardModal";
const defaultData = [
  {
    rowNumber: 1,
    customerId: "546795",
    purchaseDate: "1403/08/09",
    expDate: "1404/05/05",
    cardCode: "*******",
    name: "آیدین",
    familyName: "مدرس اول",
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
    name: "آیدین",
    familyName: "مدرس اول",
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
    name: "آیدین",
    familyName: "مدرس اول",
    dateOfRegistration: "14038/08/09",
    email: "idean.modarres89@gmail.com",
    status: "استفاده نشده",
    isActive: true,
    amount: "50,000,000 ریال",
    cardName: "کارت هدیه",
    cardId: "854146554247",
  },
];

function ManageGiftCards() {
  const setCards = useCardsStore((state) => state.setCards);
  const cards = useCardsStore((state) => state.cards);
  const navigate = useNavigate();
  const { cardInfo, setCardInfo, infoModal, setInfoModal } =
    useContext(ManageCardsContext);
  const headerLeftNodes = (
    <div>
      <Button onClick={() => navigate("create-gift-card")}>
        ایجاد کارت هدیه
      </Button>
    </div>
  );

  const closeInfoModalHandler = () => {
    setInfoModal(false);
    setCardInfo(null);
  };

  useEffect(() => {
    setCards(defaultData);
  }, [setCards]);

  return (
    <>
      <DeleteCardModal />
      <InfoModal
        title="اطلاعات مشتری"
        data={cardInfoMapper(cardInfo)}
        isOpen={infoModal}
        toggle={closeInfoModalHandler}
      />
      <PageWrapper title="کارت هدیه" headerLeftNodes={headerLeftNodes}>
        {cards.length === 0 ? (
          <span>هیچ کارتی یافت نشد</span>
        ) : (
          <CardsTable data={cards} />
        )}
      </PageWrapper>
    </>
  );
}

const ManageGiftCardsWithProviders = () => {
  return (
    <ManageCardsProvider>
      <ManageGiftCards />
    </ManageCardsProvider>
  );
};

export default ManageGiftCardsWithProviders;

import PageWrapper from "@/components/layout/PageWrapper";
import Button from "@/components/ui/button/Button";
import { useDiscountsStore } from "@/store/discountStore";
import DiscountsTable from "./_components/DiscountsTable";
import DiscountsContext, {
  DiscountsProvider,
} from "@/contexts/discountsContext";
import DeleteDiscountModal from "./_components/DeleteDiscountModal";
import InfoModal from "@/components/ui/infoModal/InfoModal";
import { useContext, useEffect } from "react";
import { discountInfoMapper } from "@/utils/utils";

const defaultData = [
  {
    row: 1,
    discountId: "122345",
    codeName: "وفاداری",
    discountCode: "#yalda-jumpino-1400",
    discountAmount: "2%",
    customerType: "عمومی",
    creationDate: "1404/12/07",
    expirationDate: "1405/10/05",
    codeStatus: true,
    phoneNumber: null,
  },
  {
    row: 2,
    discountId: "124345",
    codeName: "وفاداری",
    discountCode: "#yalda-jumpino-1400",
    discountAmount: "10%",
    customerType: "عمومی",
    creationDate: "1404/12/07",
    expirationDate: "1405/10/05",
    codeStatus: false,
    phoneNumber: null,
  },
  {
    row: 3,
    discountId: "125345",
    codeName: "وفاداری",
    discountCode: "#yalda-jumpino-1400",
    discountAmount: "10%",
    customerType: "عمومی",
    creationDate: "1404/12/07",
    expirationDate: "1405/10/05",
    codeStatus: true,
    phoneNumber: null,
  },
  {
    row: 4,
    discountId: "123645",
    codeName: "وفاداری",
    discountCode: "#yalda-jumpino-1400",
    discountAmount: "10%",
    customerType: "عمومی",
    creationDate: "1404/12/07",
    expirationDate: "1405/10/05",
    codeStatus: true,
    phoneNumber: null,
  },
  {
    row: 5,
    discountId: "123745",
    codeName: "وفاداری",
    discountCode: "#yalda-jumpino-1400",
    discountAmount: "10%",
    customerType: "عمومی",
    creationDate: "1404/12/07",
    expirationDate: "1405/10/05",
    codeStatus: true,
    phoneNumber: null,
  },
  {
    row: 6,
    discountId: "128345",
    codeName: "وفاداری",
    discountCode: "#yalda-jumpino-1400",
    discountAmount: "2%",
    customerType: "عمومی",
    creationDate: "1404/12/07",
    expirationDate: "1405/10/05",
    codeStatus: false,
    phoneNumber: null,
  },
  {
    row: 7,
    discountId: "123945",
    codeName: "وفاداری",
    discountCode: "#yalda-jumpino-1400",
    discountAmount: "2%",
    customerType: "عمومی",
    creationDate: "1404/12/07",
    expirationDate: "1405/10/05",
    codeStatus: true,
    phoneNumber: null,
  },
  {
    row: 8,
    discountId: "123405",
    codeName: "وفاداری",
    discountCode: "#yalda-jumpino-1400",
    discountAmount: "2%",
    customerType: "عمومی",
    creationDate: "1404/12/07",
    expirationDate: "1405/10/05",
    codeStatus: true,
    phoneNumber: "09136715736",
  },
  {
    row: 9,
    discountId: "1234545",
    codeName: "وفاداری",
    discountCode: "#yalda-jumpino-1400",
    discountAmount: "2%",
    customerType: "عمومی",
    creationDate: "1404/12/07",
    expirationDate: "1405/10/05",
    codeStatus: true,
    phoneNumber: null,
  },
  {
    row: 10,
    discountId: "1233445",
    codeName: "وفاداری",
    discountCode: "#yalda-jumpino-1400",
    discountAmount: "2%",
    customerType: "عمومی",
    creationDate: "1404/12/07",
    expirationDate: "1405/10/05",
    codeStatus: false,
    phoneNumber: null,
  },
];

function DiscountCodes() {
  const discounts = useDiscountsStore((state) => state.discounts);
  const setDiscounts = useDiscountsStore((state) => state.setDiscounts);
  const { discountInfo, infoModal, setInfoModal } =
    useContext(DiscountsContext);

  const leftNodes = (
    <div className="flex gap-4">
      <Button>ایجاد کد تخفیف برای کاربر</Button>
      <Button>ایجاد کد تخفیف عمومی</Button>
    </div>
  );

  useEffect(() => {
    setDiscounts(defaultData);
  }, []);
  return (
    <>
      <InfoModal
        title="اطلاعات کد تخفیف"
        isOpen={infoModal}
        data={discountInfoMapper(discountInfo)}
        toggle={() => setInfoModal((prev) => !prev)}
      />
      <DeleteDiscountModal />
      <PageWrapper headerLeftNodes={leftNodes} title="کد تخفیف">
        {discounts.length === 0 ? (
          <span>هیچ کد تخفیفی یافت نشد</span>
        ) : (
          <DiscountsTable data={discounts} />
        )}
      </PageWrapper>
    </>
  );
}

function WithProvider() {
  return (
    <DiscountsProvider>
      <DiscountCodes />
    </DiscountsProvider>
  );
}

export default WithProvider;

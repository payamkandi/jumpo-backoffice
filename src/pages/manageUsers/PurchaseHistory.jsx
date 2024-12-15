import { useParams } from "react-router";
import PurchaseHistoriesSection from "./_components/PurchaseHistoriesSection";
import PageWrapper from "@/components/layout/PageWrapper";

function PurcahseHistory() {
  const { id } = useParams();

  return (
    <PageWrapper title="تاریخچه خرید" withBackButton>
      {id && <PurchaseHistoriesSection id={id} />}
    </PageWrapper>
  );
}

export default PurcahseHistory;

import { useParams } from "react-router";
import WalletHistoriesSection from "./_components/WalletHistoriesSection";
import PageWrapper from "@/components/layout/PageWrapper";

function WalletHistory() {
  const { id } = useParams();

  return (
    <PageWrapper title="تاریخچه کیف پول" withBackButton>
      {id && <WalletHistoriesSection id={id} />}
    </PageWrapper>
  );
}

export default WalletHistory;

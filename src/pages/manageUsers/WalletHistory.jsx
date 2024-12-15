import { ArrowRight } from "iconsax-react";
import { useParams } from "react-router";
import WalletHistoriesSection from "./_components/WalletHistoriesSection";

function WalletHistory() {
  const { id } = useParams();

  return (
    <div className="flex max-h-full flex-col gap-6 rounded-2xl border border-[#F2F0F9] bg-white p-6">
      <div className="flex items-center gap-4 pr-6 sm:pr-0">
        <ArrowRight
          size={24}
          onClick={() => history.back()}
          className="cursor-pointer"
        />
        <span className="text-xl text-[#1D262B]">کیف پول</span>
      </div>
      {id && <WalletHistoriesSection id={id} />}
    </div>
  );
}

export default WalletHistory;

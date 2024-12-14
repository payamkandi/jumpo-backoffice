import { ArrowRight } from "iconsax-react";
import { useParams } from "react-router";
import PurchaseHistoriesSection from "./_components/PurchaseHistoriesSection";

function PurcahseHistory() {
  const { id } = useParams();

  return (
    <div className="flex max-h-full flex-col gap-6 rounded-2xl border border-[#F2F0F9] bg-white p-6">
      <div className="flex items-center gap-4">
        <ArrowRight
          size={24}
          onClick={() => history.back()}
          className="cursor-pointer"
        />
        <span className="text-xl text-[#1D262B]">تاریخچه خرید</span>
      </div>
      {id && <PurchaseHistoriesSection id={id} />}
    </div>
  );
}

export default PurcahseHistory;

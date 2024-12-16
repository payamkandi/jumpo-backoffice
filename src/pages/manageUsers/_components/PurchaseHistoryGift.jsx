import TitleValue from "@/components/ui/titleValue/TitleValue";

function PurchaseHistoryGift() {
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-[#F2F0F9] px-3 py-2 sm:gap-4 sm:px-6 sm:py-4">
      <div className="grid grid-cols-1 gap-y-2 px-2 sm:grid-cols-2">
        <TitleValue title="تاریخ خرید" value="1403/06/16" />
        <TitleValue title="شناسه کارت" value="45654522" />
      </div>
      <div className="flex flex-col gap-y-2 rounded-2xl bg-white p-2 text-sm text-[#1D262B] sm:flex-row sm:gap-6 sm:gap-y-3 sm:p-4">
        <div className="flex w-full gap-2">
          <span>نام کارت:</span>
          <span>تولدت مبارک</span>
        </div>
        <div className="flex w-full gap-2">
          <span>مبلغ کارت:</span>
          <span>50,010,000 ریال</span>
        </div>
      </div>
    </div>
  );
}

export default PurchaseHistoryGift;

import TitleValue from "@/components/ui/titleValue/TitleValue";

function PurchaseHistoryGift() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-[#F2F0F9] px-6 py-4">
      <div className="grid grid-cols-2 gap-y-2 px-4">
        <TitleValue title="تاریخ خرید" value="1403/06/16" />
        <TitleValue title="شناسه کارت" value="45654522" />
      </div>
      <div className="flex gap-6 rounded-2xl bg-white p-4 text-sm text-[#1D262B]">
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

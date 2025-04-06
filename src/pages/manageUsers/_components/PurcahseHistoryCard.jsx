import { Calendar, Call, Location, People, Timer1 } from "iconsax-react";
import cx from "classnames";
import TitleValue from "@/components/ui/TitleValue";
function PurcahseHistoryCard() {
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-[#F2F0F9] px-3 py-2 sm:gap-4 sm:px-6 sm:py-4">
      <div className="grid grid-cols-1 gap-y-1 px-2 sm:grid-cols-2 sm:gap-y-2">
        <TitleValue title="تاریخ خرید" value="1404/06/06" />
        <TitleValue title="وضعیت" value="فعال" />
        <TitleValue title="شماره بلیت" value="345532534" />
        <TitleValue title="خرید" value="حضوری" />
      </div>
      <div className="flex flex-col gap-8 rounded-2xl bg-white p-2 sm:p-4">
        <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-y-4">
          <BranchRow
            title="شعبه اپال"
            icon={<Location size={24} color="#735CB4" />}
            className="col-span-1 sm:col-span-2 [&span]:text-base"
          />
          <BranchRow
            title="021-2222"
            icon={<Call size={24} color="#735CB4" />}
            className="text-sm"
          />
          <BranchRow
            title="تعداد نفرات 2 نفر"
            icon={<People size={24} color="#735CB4" />}
            className="text-sm"
          />
          <BranchRow
            title=" جمعه 24 آبان "
            icon={<Calendar size={24} color="#735CB4" />}
            className="text-sm"
          />
          <BranchRow
            title="زمان بازی 30 دقیقه - زمان 10:30-10"
            icon={<Timer1 size={24} color="#735CB4" />}
            className="text-sm"
          />
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-3 border-t border-[#F2F0F9] pt-4 text-sm text-[#1D262B] sm:grid-cols-2">
          <div className="flex flex-col items-center gap-y-3 sm:flex-row sm:gap-6">
            <div className="flex w-full items-center gap-2">
              <span>در صد تخفیف:</span>
              <span>0%</span>
            </div>
            <div className="flex w-full items-center gap-2">
              <span>کد تخفیف:</span>
              <span>-</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>مبلغ بلیت: </span>
            <span>50,010,000 ریال</span>
          </div>
          <div className="flex items-center gap-2">
            <span>استفاده از کیف پول:</span>
            <span>0 ریال</span>
          </div>
          <div className="flex items-center gap-2">
            <span>مبلغ پرداختی:</span>
            <span className="text-[#735CB4]">50,010,000 ریال</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BranchRow({ icon, title, className }) {
  return (
    <div className={cx("flex items-center gap-2", className)}>
      {icon}
      <span className="font-semibold text-neutral-950">{title}</span>
    </div>
  );
}

export default PurcahseHistoryCard;

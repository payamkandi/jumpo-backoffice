import PageWrapper from "@/components/layout/PageWrapper";
import Button from "@/components/ui/Button";
import TextBox from "@/components/ui/textBox/TextBox";

function PrivateDiscountCodes() {
  return (
    <div>
      <PageWrapper title="تخصیص کد تخفیف برای کاربر" withBackButton>
        <div className="p-4">
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
            <TextBox label="نام کد تخفیف" />
            <TextBox label="میزان تخفیف به درصد" />
            <TextBox label="تاریخ ایجاد" />
            <TextBox label="تاریخ انقضا" />
            <TextBox label="شماره موبایل مشتری" />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
            <TextBox label="نام" />
            <TextBox label="نام خانوادگی" />
          </div>
          <p className="my-5 font-semibold text-[#1D262B]">اطلاعات کد</p>
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            <TextBox label="پیشوند کد" />
            <TextBox label="رندوم کد" />
            <TextBox label="پسوند کد" />
          </div>
        </div>
        <Button className="mb-8 ml-0 mt-4">ایجاد کد تخفیف</Button>
      </PageWrapper>
    </div>
  );
}

export default PrivateDiscountCodes;

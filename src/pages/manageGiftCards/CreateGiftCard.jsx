import PageWrapper from "@/components/layout/PageWrapper";
import Button from "@/components/ui/Button";
import TextBox from "@/components/ui/textBox/TextBox";

function CreateGiftCard() {
  return (
    <>
      <PageWrapper title="ایجاد کارت هدیه" withBackButton>
        <div className="rounded-2xl border border-[#F2F0F9] p-6">
          <div className="grid grid-cols-1 gap-x-2 gap-y-1 py-3 sm:gap-x-4 sm:gap-y-2 sm:py-6 md:grid-cols-2">
            <TextBox label="نام کارت" />
            <TextBox label="مبلغ کارت" />
            <TextBox label="شناسه کارت هدیه درباشگاه" />
          </div>
        </div>
        <Button className="ml-0 mt-4 sm:mt-8">ایجاد کارت هدیه</Button>
      </PageWrapper>
    </>
  );
}

export default CreateGiftCard;

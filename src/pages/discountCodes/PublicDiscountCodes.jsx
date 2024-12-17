import PageWrapper from "@/components/layout/PageWrapper";
import Button from "@/components/ui/button/Button";
import Dropdown from "@/components/ui/dropdown/Dropdown";
import TextBox from "@/components/ui/textBox/TextBox";

function GeneralDiscountCodes() {
  return (
    <div>
      <PageWrapper title="تخصیص کد تخفیف عمومی" withBackButton>
        <div className="p-4">
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
            <Dropdown
              className="sm:col-span-2 sm:w-1/2 sm:pl-4"
              label="نام شعبه"
              onChange={(value) => console.log(value)}
            >
              <Dropdown.Option value={""}>هیچکدام</Dropdown.Option>
              <Dropdown.Option value={"اپال"}>اپال</Dropdown.Option>
              <Dropdown.Option value={"سانا"}>سانا</Dropdown.Option>
              <Dropdown.Option value={"کوروش"}>کوروش</Dropdown.Option>
            </Dropdown>
            <TextBox label="نام کد تخفیف" />
            <TextBox label="میزان تخفیف به درصد" />
            <TextBox label="تاریخ ایجاد" />
            <TextBox label="تاریخ انقضا" />
            <Dropdown label="تخصیص به" onChange={(value) => console.log(value)}>
              <Dropdown.Option value={"حضور دو بالای دوبار در مجموعه"}>
                حضور دو بالای دوبار در مجموعه
              </Dropdown.Option>
              <Dropdown.Option value={"حضور بالای سه بار در مجموعه"}>
                حضور بالای سه بار در مجموعه
              </Dropdown.Option>
              <Dropdown.Option value={"همه"}>همه</Dropdown.Option>
            </Dropdown>
          </div>
          <p className="my-5 font-semibold text-[#1D262B]">اطلاعات کد</p>
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            <TextBox className="sm:max-w-96" label="پیشوند کد" />
            <TextBox className="sm:max-w-96" label="رندوم کد" />
            <TextBox className="sm:max-w-96" label="پسوند کد" />
          </div>
        </div>
        <Button className="mb-8 ml-0 mt-4">ایجاد کد تخفیف</Button>
      </PageWrapper>
    </div>
  );
}

export default GeneralDiscountCodes;

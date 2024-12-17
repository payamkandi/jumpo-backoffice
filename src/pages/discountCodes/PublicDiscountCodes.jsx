import PageWrapper from "@/components/layout/PageWrapper";
import Dropdown from "@/components/ui/dropdown/Dropdown";

function GeneralDiscountCodes() {
  return (
    <div>
      <PageWrapper title="تخصیص کد تخفیف عمومی" withBackButton>
        <div className="grid grid-cols-2 p-4">
          <Dropdown label="نام شعبه" onChange={(value) => console.log(value)}>
            <Dropdown.Option value={"اپال"}>اپال</Dropdown.Option>
            <Dropdown.Option value={"سانا"}>سانا</Dropdown.Option>
            <Dropdown.Option value={"کوروش"}>کوروش</Dropdown.Option>
          </Dropdown>
        </div>
      </PageWrapper>
    </div>
  );
}

export default GeneralDiscountCodes;

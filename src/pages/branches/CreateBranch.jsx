import PageWrapper from "@/components/layout/PageWrapper";
import Button from "@/components/ui/button/Button";
import Dropdown from "@/components/ui/dropdown/Dropdown";
import TextBox from "@/components/ui/textBox/TextBox";

function CreateBranch() {
  return (
    <PageWrapper withBackButton title="تعریف شعبه یا نمایندگی">
      <div className="grid grid-cols-6 gap-x-4 gap-y-4 p-4">
        <TextBox
          className="col-span-6 sm:col-span-3 xl:col-span-2"
          label="نام شعبه"
        />
        <TextBox
          className="col-span-6 sm:col-span-3 xl:col-span-2"
          label="نام و نام خانوادگی نماینده"
        />
        <TextBox
          type="tel"
          className="col-span col-span-6 sm:col-span-3 xl:col-span-2"
          label="شماره موبایل"
        />
        <TextBox
          className="col-span col-span-6 sm:col-span-3 xl:col-span-2"
          label="شهر"
        />
        <TextBox
          className="col-span col-span-6 sm:col-span-3 xl:col-span-2"
          label="استان"
        />
        <TextBox
          className="col-span col-span-6 sm:col-span-3 xl:col-span-2"
          label="شماره تماس نمایندگی"
          type="tel"
        />
        <TextBox className="col-span-6" label="آدرس نمایندگی" />
        <TextBox className="col-span-6 md:col-span-3" label="نام کاربری" />
        <TextBox className="col-span-6 md:col-span-3" label="پسورد" />
        <Dropdown className="col-span-6 md:col-span-3" label="وضعیت نمایندگی">
          <Dropdown.Option value={true}>فعال</Dropdown.Option>
          <Dropdown.Option value={false}>غیرفعال</Dropdown.Option>
        </Dropdown>
      </div>
      <div>
        <Button className="mb-8 ml-0 mt-4">ثبت نماینده</Button>
      </div>
    </PageWrapper>
  );
}

export default CreateBranch;

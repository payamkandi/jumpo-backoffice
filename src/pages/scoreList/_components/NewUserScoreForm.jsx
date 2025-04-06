import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import TextBox from "@/components/ui/textBox/TextBox";

function NewUserScoreForm() {
  return (
    <div>
      <div className="-mb-4 grid grid-cols-1 gap-x-6 gap-y-4 p-4 xl:grid-cols-2">
        <TextBox label="شماره همراه" />
        <TextBox label="کد ملی" />
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-4 p-4 sm:grid-cols-2 xl:grid-cols-3">
        <TextBox label="شناسه مشتری" />
        <TextBox label="نام" />
        <TextBox label="نام خانوادگی" />
        <Dropdown label="شعبه">
          <Dropdown.Option value="اپال">اپال</Dropdown.Option>
          <Dropdown.Option value="سانا">سانا</Dropdown.Option>
          <Dropdown.Option value="کوروش">کوروش</Dropdown.Option>
        </Dropdown>
        <TextBox label="تاریخ کسب امتیاز" />
        <TextBox label="میزان امتیاز" />
      </div>
      <Button className={"mb-8 ml-0 mt-4"}>ثبت امتیاز</Button>
    </div>
  );
}

export default NewUserScoreForm;

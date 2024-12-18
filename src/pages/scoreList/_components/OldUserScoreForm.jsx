import Button from "@/components/ui/button/Button";
import Dropdown from "@/components/ui/dropdown/Dropdown";
import TextBox from "@/components/ui/textBox/TextBox";

function OldUserScoreForm() {
  return (
    <>
      <div className="grid grid-cols-1 gap-x-6 gap-y-4 p-4 sm:grid-cols-2 xl:grid-cols-3">
        <TextBox label="شماره همراه" />
        <TextBox label="نام" />
        <TextBox label="نام خانوادگی" />
        <Dropdown label="شعبه">
          <Dropdown.Option value="اپال">اپال</Dropdown.Option>
          <Dropdown.Option value="سانا">سانا</Dropdown.Option>
          <Dropdown.Option value="کوروش">کوروش</Dropdown.Option>
        </Dropdown>
        <TextBox label="تاریخ کسب امتیاز" />
        <TextBox label="میزان امتیاز" />
        <p className="text-sm text-[#415762]">
          جمع کل امتیاز مشتری:
          <span className="font-semibold text-[#1D262B]"> 857,544,445</span>
        </p>
      </div>
      <Button className={"mb-8 ml-0 mt-4"}>ثبت امتیاز</Button>
    </>
  );
}

export default OldUserScoreForm;

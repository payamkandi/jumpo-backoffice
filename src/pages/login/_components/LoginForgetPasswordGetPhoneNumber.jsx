import Button from "@/components/ui/button/Button";
import TextBox from "@/components/ui/textBox/TextBox";
import { useLoginStore } from "@/store/loginStore";

function LoginForgetPasswordGetPhoneNumber({ nextStep }) {
  const phoneNumber = useLoginStore((state) => state.phoneNumber);
  const setPhoneNumber = useLoginStore((state) => state.setPhoneNumber);
  const handleSendOTP = () => {
    nextStep();
  };
  return (
    <div className="max-w-[424px]">
      <p className="mb-6 text-sm">
        در صورتی که میخواهید رمز عبور خود را تغییر دهید، شماره همراه خود را وارد
        نمایید.
      </p>
      <div className="mb-10">
        <TextBox
          type="tel"
          id="phonenumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          label="شماره همراه"
          height={80}
        />
      </div>
      <Button onClick={handleSendOTP} fill={true}>
        دریافت کد یکبار مصرف
      </Button>
    </div>
  );
}

export default LoginForgetPasswordGetPhoneNumber;

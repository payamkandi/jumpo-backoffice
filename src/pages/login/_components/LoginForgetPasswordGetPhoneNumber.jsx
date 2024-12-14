import Button from "@/components/ui/button/Button";

function LoginForgetPasswordGetPhoneNumber({ nextStep }) {
  const handleSendOTP = () => {
    nextStep();
  };
  return (
    <>
      <p className="mb-6">
        در صورتی که میخواهید رمز عبور خود را تغییر دهید، شماره همراه خود را وارد
        نمایید.
      </p>
      <input type="text" className="mb-14" placeholder="شماره همراه" />
      <Button onClick={handleSendOTP} fill={true}>
        دریافت کد یکبار مصرف
      </Button>
    </>
  );
}

export default LoginForgetPasswordGetPhoneNumber;

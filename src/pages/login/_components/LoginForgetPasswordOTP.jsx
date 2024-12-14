import { useState } from "react";
import OTP from "../../../components/ui/otp/OTP";
import Button from "@/components/ui/button/Button";

function LoginForgetPasswordOTP({ nextStep }) {
  const [otp, setOtp] = useState("");
  const userNumber = "09909416143";
  const handleNextStep = () => {
    nextStep();
  };
  return (
    <>
      <div className="flex w-full justify-between gap-2">
        <span>{`کد ارسال شده به ${userNumber} را وارد نمایید.`}</span>
        <span>ویرایش شماره</span>
      </div>
      <OTP value={otp} onChange={setOtp} className="mt-10" />
      <div className="mt-7 flex w-full justify-between gap-2">
        <span>زمان باقیمانده تا ارسال مجدد رمز:</span>
        <span>02:00</span>
      </div>
      <button
        className="mt-14 rounded-full bg-secondary-shade-80 text-white"
        onClick={handleNextStep}
      ></button>
      <Button onClick={handleNextStep} fill>
        ادامه
      </Button>
    </>
  );
}

export default LoginForgetPasswordOTP;

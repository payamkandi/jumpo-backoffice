import OTP from "../../../components/ui/otp/OTP";
import Button from "@/components/ui/button/Button";
import { useLoginStore } from "@/store/loginStore";

function LoginForgetPasswordOTP({ nextStep }) {
  const phoneNumber = useLoginStore((state) => state.phoneNumber);
  const otp = useLoginStore((state) => state.otp);
  const setOtp = useLoginStore((state) => state.setOtp);
  const handleNextStep = () => {
    nextStep();
  };
  return (
    <>
      <div className="flex w-full justify-between gap-2">
        <span className="text-[#415762]">{`کد ارسال شده به ${phoneNumber} را وارد نمایید.`}</span>
        <span className="cursor-pointer text-[#735CB4]">ویرایش شماره</span>
      </div>
      <OTP value={otp} onChange={setOtp} className="mt-10" />
      <div className="mt-7 flex w-full justify-between gap-2">
        <span className="text-xs text-[#668899]">
          زمان باقیمانده تا ارسال مجدد رمز:
        </span>
        <span className="text-sm text-[#415762]">02:00</span>
      </div>
      <Button className="mt-14" onClick={handleNextStep} fill>
        ادامه
      </Button>
    </>
  );
}

export default LoginForgetPasswordOTP;

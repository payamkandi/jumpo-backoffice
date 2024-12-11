import { ArrowRight } from "iconsax-react";
import { useLoginStore } from "../../store/loginStore";
import LoginForgetPasswordGetPhoneNumber from "./LoginForgetPasswordGetPhoneNumber";
import LoginForgetPasswordOTP from "./LoginForgetPasswordOTP";
import { useState } from "react";
import LoginForgetPasswordNewPassword from "./LoginForgetPasswordNewPassword";
function LoginForgetPassword() {
  const [step, setStep] = useState(1);
  const onBack = useLoginStore((state) => state.onBack);
  const handleNextStep = () => {
    setStep(step + 1);
  };
  return (
    <div className="flex flex-col">
      <ArrowRight className="mb-4 hover:cursor-pointer" onClick={onBack} />
      <h1 className="mb-3">فراموشی رمز</h1>
      {step === 1 && (
        <LoginForgetPasswordGetPhoneNumber nextStep={handleNextStep} />
      )}
      {step === 2 && <LoginForgetPasswordOTP nextStep={handleNextStep} />}
      {step === 3 && (
        <LoginForgetPasswordNewPassword nextStep={handleNextStep} />
      )}
    </div>
  );
}

export default LoginForgetPassword;

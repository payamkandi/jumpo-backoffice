import { ArrowRight } from "iconsax-react";
import { useLoginStore } from "../../store/loginStore";
import LoginForgetPasswordGetPhoneNumber from "./LoginForgetPasswordGetPhoneNumber";
import LoginForgetPasswordOTP from "./LoginForgetPasswordOTP";
function LoginForgetPassword() {
  const isOTPCalled = useLoginStore((state) => state.isOTPCalled);
  const onBack = useLoginStore((state) => state.onBack);
  return (
    <div className="flex flex-col">
      <ArrowRight className="mb-4 hover:cursor-pointer" onClick={onBack} />
      <h1 className="mb-3">فراموشی رمز</h1>
      {!isOTPCalled ? (
        <LoginForgetPasswordGetPhoneNumber />
      ) : (
        <LoginForgetPasswordOTP />
      )}
    </div>
  );
}

export default LoginForgetPassword;

import { useLoginStore } from "../../store/loginStore";

function LoginForgetPasswordGetPhoneNumber() {
  const setIsOTPCalled = useLoginStore((state) => state.setIsOTPCalled);
  const handleSendOTP = () => {
    setIsOTPCalled(true);
  };
  return (
    <>
      <p className="mb-6">
        در صورتی که میخواهید رمز عبور خود را تغییر دهید، شماره همراه خود را وارد
        نمایید.
      </p>
      <input type="text" className="mb-14" placeholder="شماره همراه" />
      <button onClick={handleSendOTP}>ورود</button>
    </>
  );
}

export default LoginForgetPasswordGetPhoneNumber;

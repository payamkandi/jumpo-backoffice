import { useLoginStore } from "../../store/loginStore";

function LoginMainForm() {
  const setStep = useLoginStore((state) => state.setStep);
  const handleForgetPassword = () => {
    setStep("forgetPassword");
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <h1>ورود</h1>
        <input type="text" placeholder="نام کاربری خود را وارد نمایید." />
        <input type="text" placeholder="رمز عبور خود را وارد نمایید." />
      </div>
      <span className="hover:cursor-pointer" onClick={handleForgetPassword}>
        فراموشی رمز عبور
      </span>

      <input type="text" placeholder="عبارت امنیتی را وارد نمایید" />
      <button> ورود</button>
    </div>
  );
}

export default LoginMainForm;

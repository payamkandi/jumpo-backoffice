import { useNavigate } from "react-router";
import { useAuthStore } from "../../../store/authStore";
import { useLoginStore } from "../../../store/loginStore";
import { LoginCurve } from "iconsax-react";
import Button from "@/components/ui/button/Button";

function LoginMainForm() {
  const navigate = useNavigate();
  const setStep = useLoginStore((state) => state.setStep);
  const login = useAuthStore((state) => state.login);

  const handleLogin = () => {
    login(navigate);
  };
  const handleForgetPassword = () => {
    setStep("forgetPassword");
  };
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col gap-6">
        <h1>ورود</h1>
        <input type="text" placeholder="نام کاربری خود را وارد نمایید." />
        <input type="text" placeholder="رمز عبور خود را وارد نمایید." />
      </div>
      <span className="hover:cursor-pointer" onClick={handleForgetPassword}>
        فراموشی رمز عبور
      </span>

      <input type="text" placeholder="عبارت امنیتی را وارد نمایید" />
      <Button onClick={handleLogin} icon={<LoginCurve />} fill={true}>
        ورود
      </Button>
    </div>
  );
}

export default LoginMainForm;

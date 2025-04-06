import { useNavigate } from "react-router";
import { useAuthStore } from "../../../store/authStore";
import { useLoginStore } from "../../../store/loginStore";
import { Refresh } from "iconsax-react";
import Button from "@/components/ui/Button";
import TextBox from "@/components/ui/textBox/TextBox";

function LoginMainForm() {
  const navigate = useNavigate();
  const setStep = useLoginStore((state) => state.setStep);
  const login = useAuthStore((state) => state.login);
  const username = useLoginStore((state) => state.username);
  const setUsername = useLoginStore((state) => state.setUsername);
  const password = useLoginStore((state) => state.password);
  const setPassword = useLoginStore((state) => state.setPassword);
  const captcha = useLoginStore((state) => state.captcha);
  const setcaptcha = useLoginStore((state) => state.setCaptcha);
  const handleLogin = () => {
    login(navigate);
  };
  const handleForgetPassword = () => {
    setStep("forgetPassword");
  };
  return (
    <div className="flex w-full max-w-[424px] flex-col p-4">
      <div className="flex flex-col">
        <h1 className="mb-6 text-xl font-semibold">ورود</h1>
        <TextBox
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="نام کاربری خود را وارد نمایید"
          height={80}
        />
        <TextBox
          id="password"
          value={password}
          isPassword={true}
          type="password"
          autoComplete="password"
          onChange={(e) => setPassword(e.target.value)}
          label="رمز عبور خود را وارد نمایید"
          height={80}
        />
      </div>
      <span
        className="mb-6 mt-3 w-fit cursor-pointer text-sm font-normal text-[#735CB4]"
        onClick={handleForgetPassword}
      >
        فراموشی رمز عبور
      </span>

      <TextBox
        id="captcha"
        value={captcha}
        label="عبارت امنیتی را وارد نمایید"
        onChange={(e) => setcaptcha(e.target.value)}
        height={80}
        withLogo={
          <Refresh size={20} color="#54707D" className="cursor-pointer" />
        }
      />

      <Button onClick={handleLogin} fill={true}>
        ورود
      </Button>
    </div>
  );
}

export default LoginMainForm;

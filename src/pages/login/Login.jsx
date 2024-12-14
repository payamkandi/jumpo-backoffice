import { useLoginStore } from "@/store/loginStore";
import LoginMainForm from "./_components/LoginMainForm";
import LoginForgetPassword from "./_components/LoginForgetPassword";

function Login() {
  const step = useLoginStore((state) => state.step);
  return (
    <div className="flex h-full items-center justify-center px-1 py-2">
      <div className="w-1/2">
        <div className="mx-auto flex max-w-[424px] items-center justify-center">
          {step === "login" && <LoginMainForm />}
          {step === "forgetPassword" && <LoginForgetPassword />}
        </div>
      </div>
      <div className="login-gradient h-full w-1/2"></div>
    </div>
  );
}

export default Login;

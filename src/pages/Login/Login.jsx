import { useLoginStore } from "../../store/loginStore";
import LoginForgetPassword from "./LoginForgetPassword";
import LoginMainForm from "./LoginMainForm";

function Login() {
  const step = useLoginStore((state) => state.step);
  return (
    <div className="flex h-full items-center justify-center px-1 py-2">
      <div className="w-1/2">
        <div className="flex items-center justify-center">
          {step === "login" && <LoginMainForm />}
          {step === "forgetPassword" && <LoginForgetPassword />}
        </div>
      </div>
      <div className="login-gradient h-full w-1/2"></div>
    </div>
  );
}

export default Login;

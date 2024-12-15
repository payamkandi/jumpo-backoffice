import { useLoginStore } from "@/store/loginStore";
import LoginMainForm from "./_components/LoginMainForm";
import LoginForgetPassword from "./_components/LoginForgetPassword";

function Login() {
  const step = useLoginStore((state) => state.step);
  return (
    <div className="relative flex h-full items-center justify-center px-1 py-2">
      <div className="w-full sm:w-1/2">
        <div className="absolute left-1/2 top-1/2 z-10 mx-auto flex w-11/12 max-w-[424px] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-xl bg-white bg-opacity-90 sm:static sm:w-full sm:translate-x-[0] sm:translate-y-[0]">
          {step === "login" && <LoginMainForm />}
          {step === "forgetPassword" && <LoginForgetPassword />}
        </div>
      </div>
      <div className="login-gradient absolute h-full w-full !rounded-none sm:static sm:w-1/2 sm:!rounded-lg"></div>
    </div>
  );
}

export default Login;

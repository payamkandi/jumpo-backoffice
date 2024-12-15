import Button from "@/components/ui/button/Button";
import TextBox from "@/components/ui/textBox/TextBox";
import { useLoginStore } from "@/store/loginStore";

function LoginForgetPasswordNewPassword() {
  const newPassword = useLoginStore((state) => state.newPassword);
  const newPasswordAgain = useLoginStore((state) => state.newPasswordAgain);
  const setNewPassword = useLoginStore((state) => state.setNewPassword);
  const setNewPasswordAgain = useLoginStore(
    (state) => state.setNewPasswordAgain,
  );
  return (
    <>
      <div className="mb-10 flex max-w-[424px] flex-col">
        <span className="mb-6 mt-4 text-[#415762]">نام کاربری a.modarres</span>
        <TextBox
          height={80}
          id="newPassword"
          className="mb-2"
          type="password"
          isPassword={true}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          label="انتخاب رمز"
        />
        <TextBox
          className="mb-2"
          height={80}
          id="newPasswordAgain"
          isPassword={true}
          type="password"
          value={newPasswordAgain}
          onChange={(e) => setNewPasswordAgain(e.target.value)}
          label="تکرار رمز"
        />
        <p className="text-sm text-[#668899]">
          کلمه عبور بایستی ترکیبی از حروف انگلیسی یا کاراکتر غیر متنی #$%%& و
          عدد انگلیسی باشد.
        </p>
      </div>

      <Button fill>تغییر رمز</Button>
    </>
  );
}

export default LoginForgetPasswordNewPassword;

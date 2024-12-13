import Button from "@/components/UI/Button/Button";

function LoginForgetPasswordNewPassword() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <span>نام کاربری a.modarres</span>
        <input type="text" placeholder="رمز عبور جدید خود را وارد نمایید." />
        <input
          type="text"
          placeholder="تکرار رمز عبور جدید خود را وارد نمایید."
        />
        <p>
          کلمه عبور بایستی ترکیبی از حروف انگلیسی یا کاراکتر غیر متنی #$%%& و
          عدد انگلیسی باشد.
        </p>
      </div>

      <Button fill>تغییر رمز</Button>
    </>
  );
}

export default LoginForgetPasswordNewPassword;

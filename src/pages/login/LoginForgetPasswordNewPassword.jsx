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
      <button className="mt-14 rounded-full bg-secondary-shade-80 text-white">
        تغییر رمز
      </button>
    </>
  );
}

export default LoginForgetPasswordNewPassword;

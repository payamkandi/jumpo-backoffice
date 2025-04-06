import OTPInput from "react-otp-input";

function OTP({ value, onChange, numInputs = 5, sepratorNode, className }) {
  return (
    <div dir="ltr">
      <OTPInput
        value={value}
        onChange={onChange}
        numInputs={numInputs}
        renderSeparator={sepratorNode}
        containerStyle={`flex justify-between ${className}`}
        inputStyle="rounded-lg border border-[#C2CFD6] h-[56px] min-w-[56px] p-2"
        renderInput={(props) => <input {...props} />}
      />
    </div>
  );
}

export default OTP;

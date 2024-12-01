import OTPInput from "react-otp-input";

function OTP({ value, onChange, numInputs = 5, sepratorNode }) {
  return (
    <OTPInput
      value={value}
      onChange={onChange}
      numInputs={numInputs}
      renderSeparator={sepratorNode}
      containerStyle="flex justify-between"
      inputStyle="rounded-lg border border-gray-300 h-[56px] min-w-[56px] p-2"
      renderInput={(props) => <input {...props} />}
    />
  );
}

export default OTP;

import C from "./Switch.module.scss";

// type SwitchProps = {
//   size?: "small" | "medium", // "size" can only be "small" or "medium"
//   iconType?: 1 | 2 | 3, // "iconType" can only be 1, 2, or 3
//   checked: boolean, // "checked" is a boolean
//   onChange?: (checked: boolean) => void, // "onChange" is a function
//   disabled?: boolean, // "disabled" is a boolean
// };

function Switch({
  size = "medium",
  iconType = 1,
  checked,
  onChange,
  disabled,
}) {
  function handleOnChange() {
    if (disabled) return;
    onChange?.(!checked);
  }

  const containerClass = `
    ${C.container} 
    ${checked ? C.checked : ""} 
    ${disabled ? C.disabled : ""} 
    ${size === "small" ? C.small : ""}
  `.trim();

  return (
    <div className={containerClass} onClick={handleOnChange}>
      <div className={C.inner}>
        <div className={C[`type${iconType}`]} />
      </div>
    </div>
  );
}

export default Switch;

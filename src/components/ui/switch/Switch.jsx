import C from "./Switch.module.scss";

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

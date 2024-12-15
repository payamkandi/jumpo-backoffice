import { forwardRef, useEffect, useRef, useState } from "react";
import Classes from "./TextBox.module.scss";
import {
  CloseCircle,
  Danger,
  Eye,
  EyeSlash,
  InfoCircle,
  TickCircle,
} from "iconsax-react";

// 'onClear' to show X button and it calls a function which is given
// 'withLogo' by default it shows the bank logo but it accepts a new logo src
// 'showCounter' to show counter and it's value would be the max length of the counter
// 'error' to show errors and it's value would be the error message
// 'guideline' to show guide text and it's value would be the guide text
// 'success' to show success message and it's value would be the success message
// 'ltr' to set the inputbox to left to right mode (notice that logos will reversed to ltr)
// 'height = {80}' to set the height to 80px 😁

const TextBox = forwardRef((props, ref) => {
  let invalidRegex =
    /javascript|script|select|\%|\!\=|\#|\\\*|\\\*|\/\*|\*\/|\=|\-\-|\;|\+|\`|\"|\'|\>|\<|\|\|.|/gi;

  const [entered, setEntered] = useState();
  const [counter, setCounter] = useState(props?.value?.toString?.()?.length);
  const [isPassword, setIsPassword] = useState(true);
  const btnboxRef = useRef();
  const leftPadding = props.onClear && props.ltr ? 30 : 10;
  const handleClear = () => {
    props.onClear();
    setEntered("");
  };

  const handleInput = (event) => {
    const newEvent = {
      ...event,
      target: {
        ...event.target,
        // !@$^&* can use for password
        value: props.isPassword
          ? convertPersianToEnglish(event.target.value)
          : convertPersianToEnglish(event.target.value)
              .replace(invalidRegex, "")
              .replace(props?.whiteList, ""),
        name: event.target.name,
      },
    };
    // setEntered(newEvent.target.value);
    setCounter(newEvent.target.value.length);
    props?.onChange?.(newEvent);
  };
  useEffect(() => {
    setEntered(props?.value);
  }, [props?.value]);
  return (
    <div
      style={props.Style}
      className={`${props.className} ${Classes[props.className]} ${props.withLogo && Classes["with-logo"]} ${entered && Classes["entered"]} ${
        Classes["container"]
      } ${props.error && Classes["error-border"]} ${props.ltr && Classes["ltr"]} ${props.height == 80 ? Classes["size80"] : Classes["size64"]} ${
        (props.ltr && props.onClear && props.value) || props.isPassword
          ? Classes["ltr-with-icons"]
          : ""
      }`}
    >
      <div className={Classes["input-container"]}>
        <input
          name={props.id}
          placeholder={props.placeholder || ""}
          value={props.value || entered || ""}
          type={
            props.type !== "password"
              ? props.type
              : isPassword
                ? "password"
                : ""
          }
          maxLength={props.maxLength}
          disabled={props.disabled || false}
          id={props.id}
          tabIndex={props?.tabIndex}
          inputMode={props.inputMode}
          autoComplete={props.autoComplete || "off"}
          defaultValue={props?.defaultValue}
          onFocus={props.onFocus}
          autoFocus={props.autoFocus}
          onBlur={props.onBlur}
          ref={ref}
          style={
            props.btn
              ? {
                  ...props.style,
                  paddingLeft: btnboxRef?.current?.offsetWidth + leftPadding,
                }
              : props.style
          }
          pattern={props.pattern}
          onChange={handleInput}
        ></input>
        {!props.btn ? (
          <>
            <div className={Classes["logo"]}>
              {props.withLogo && props.withLogo}
            </div>
            <div
              className={`${Classes["icons-box"]} ${props.withLogo && !props.ltr && Classes["icons-box--with-logo"]}`}
            >
              {
                props.isPassword &&
                  (isPassword ? (
                    <Eye
                      className="cursor-pointer"
                      color="#54707D"
                      size={24}
                      onClick={() => setIsPassword(!isPassword)}
                    />
                  ) : (
                    <EyeSlash
                      className="cursor-pointer"
                      color="#54707D"
                      size={24}
                      onClick={() => setIsPassword(!isPassword)}
                    />
                  ))
                // <CustomIcon
                //   src={isPassword ? eyeLinear : grayEyeSlash}
                //   onClick={() => setIsPassword(!isPassword)}
                //   size={24}
                // />
              }
              {props.onClear && props.value && (
                // <CustomIcon src={x} size={14} onClick={handleClear} />
                <CloseCircle
                  size={14}
                  onClick={handleClear}
                  className="cursor-pointer"
                />
              )}
            </div>
          </>
        ) : (
          <>
            <div
              className={`${Classes["onClear-box"]}`}
              style={
                props.ltr
                  ? { left: btnboxRef?.current?.offsetWidth + 10 }
                  : { right: "5px" }
              }
            >
              {props.onClear && props.value && (
                // <CustomIcon src={x} size={14} onClick={handleClear} />
                <CloseCircle
                  size={14}
                  onClick={handleClear}
                  className="cursor-pointer"
                />
              )}
            </div>
            {/* <div className={Classes["btn-box"]} ref={btnboxRef}>
              <Button
                variant="primary"
                isLoading={props.isLoading}
                size={props.height === 80 ? "Medium" : "Small"}
                icon={props.btnIcon}
                iconName={props.id}
                direction="ltr"
                disabled={props.disabledButton}
                onClick={props.onClick}
                iconSize={props.height === 80 ? 24 : 20}
                style={{
                  borderRadius: `${props.height === 80 ? "12px" : "8px"}`,
                  width: "unset",
                  fontSize: `${props.height === 80 ? "14px" : "12px"}`,
                  height: `${props.height === 80 ? "40px" : "30px"}`,
                }}
              >
                {props.btn}
              </Button>
            </div> */}
          </>
        )}
        <label htmlFor={props.id}>{props.label}</label>
      </div>

      <div className={Classes["info-box"]}>
        {props.error && (
          <div className={`${Classes["error"]} ${Classes["info"]}`}>
            {/* <CustomIcon cursor="initial" size={16} src={error} /> */}
            <Danger size={16} />
            <p>{props.error}</p>
          </div>
        )}
        {props.success && (
          <div className={`${Classes["success"]} ${Classes["info"]}`}>
            <TickCircle size={16} />
            {/* <CustomIcon cursor="initial" size={16} src={success} /> */}
            <p>{props.success}</p>
          </div>
        )}
        {props.successWithoutLogo && (
          <div className={`${Classes["success"]} ${Classes["info"]}`}>
            <p>{props.successWithoutLogo}</p>
          </div>
        )}
        {props.guideline && (
          <div className={`${Classes["guideline"]} ${Classes["info"]}`}>
            {/* <CustomIcon cursor="initial" size={16} src={guideline} /> */}
            <InfoCircle size={16} />
            <p>{props.guideline}</p>
          </div>
        )}
        {props.showCounter && (
          <div className={Classes["counter"]}>
            {counter || 0}/{props.showCounter}
          </div>
        )}
      </div>
      {props.children}
    </div>
  );
});
TextBox.displayName = "TextBox";
export default TextBox;
function convertPersianToEnglish(str) {
  const persianNumbers = [
      /۰/g,
      /۱/g,
      /۲/g,
      /۳/g,
      /۴/g,
      /۵/g,
      /۶/g,
      /۷/g,
      /۸/g,
      /۹/g,
    ],
    arabicNumbers = [
      /٠/g,
      /١/g,
      /٢/g,
      /٣/g,
      /٤/g,
      /٥/g,
      /٦/g,
      /٧/g,
      /٨/g,
      /٩/g,
    ];
  if (typeof str === "string") {
    for (var i = 0; i < 10; i++) {
      str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }
  }
  return str;
}

import { ArrowDown2 } from "iconsax-react";
import TextBox from "./textBox/TextBox";
import { createContext, useContext, useState, useRef, useEffect } from "react";
import cx from "classnames";

const dropdownContext = createContext();

function Dropdown({ children, label, onChange, className }) {
  const [value, setValue] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropDown = (e) => {
    e.stopPropagation();
    setDropDown(!dropDown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <dropdownContext.Provider
      value={{ value, setValue, setDropDown, onChange }}
    >
      <div className={cx("relative", className)} ref={dropdownRef}>
        <div
          className="t-[10px] absolute z-[1] h-16 w-full cursor-pointer opacity-0"
          onClick={toggleDropDown}
        />
        <TextBox
          withLogo={<ArrowDown2 color="#353535" />}
          value={value}
          label={label}
          dropdown={true}
        />
        {dropDown && (
          <div className="absolute left-0 top-[60px] z-[2] flex w-full flex-col border border-[#F2F0F9] bg-white shadow-sm">
            {children}
          </div>
        )}
      </div>
    </dropdownContext.Provider>
  );
}

function Option({ children, value }) {
  const { setDropDown, setValue, onChange } = useContext(dropdownContext);
  const onClickHandler = () => {
    onChange(value);
    setValue(value);
    setDropDown(false);
  };
  return (
    <div
      className="cursor-pointer border-b border-[#F2F0F9] px-2 py-2 last:border-none"
      onClick={onClickHandler}
    >
      {children}
    </div>
  );
}

Dropdown.Option = Option;

export default Dropdown;

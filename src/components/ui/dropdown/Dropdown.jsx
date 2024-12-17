import { ArrowDown2 } from "iconsax-react";
import TextBox from "../textBox/TextBox";
import { createContext, useContext, useState } from "react";
const dropdownContext = createContext();

function Dropdown({ children, label, onChange }) {
  const [value, setValue] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const toggleDropDown = (e) => {
    e.stopPropagation();
    setDropDown(!dropDown);
  };

  return (
    <dropdownContext.Provider
      value={{ value, setValue, setDropDown, onChange }}
    >
      <div className="relative">
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
          <div className="absolute left-0 top-full flex w-full flex-col border border-[#F2F0F9] bg-white shadow-lg">
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
      className="cursor-pointer border-b border-[#F2F0F9] px-2 py-2 text-center last:border-none"
      onClick={onClickHandler}
    >
      {children}
    </div>
  );
}
Dropdown.Option = Option;

export default Dropdown;

import { useLayoutStore } from "@/store/layoutStore";
import BurgerMenuIcon from "../burgerMenuIcon/BurgerMenuIcon";
import cx from "classnames";
function ToggleSideBar() {
  const { sidebar, toggleSideBar } = useLayoutStore();
  return (
    <label
      className={cx(
        "absolute right-4 top-4 z-[11] flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-[#d7cfed] transition-all duration-500 md:hidden",
        {
          // "right-[180px]": sidebar,
        },
      )}
    >
      <input
        className="h-full w-full"
        type="checkbox"
        checked={sidebar}
        readOnly
        hidden
      />
      <BurgerMenuIcon isOpen={sidebar} toggle={toggleSideBar} />
    </label>
  );
}

export default ToggleSideBar;

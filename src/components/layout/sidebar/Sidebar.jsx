import { Profile } from "iconsax-react";
import Menu from "./menu/Menu";
import Logout from "./Logout";
import { useLayoutStore } from "@/store/layoutStore";
import cx from "classnames";
function Sidebar() {
  const { sidebar, setSidebar } = useLayoutStore();
  return (
    <>
      <div
        className={cx("absolute top-0 z-0 block h-full w-full md:hidden", {
          hidden: !sidebar,
        })}
        onClick={() => setSidebar(false)}
      />
      <div
        className={cx(
          "absolute right-[-300px] z-10 flex h-full shrink-0 flex-col justify-between overflow-y-auto bg-white px-6 pb-6 pt-12 shadow-sidebar transition-all duration-500 md:static",
          {
            "right-[0px]": sidebar,
          },
        )}
      >
        <div className="flex shrink-0 flex-col items-center justify-center">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-full border-2 border-secondary-tint-40 bg-[#F2F0F9]">
            <Profile size={42} color="#7e65c6" />
          </div>
          <span className="mt-4 text-sm font-semibold">سعید سعیدی</span>
          <Menu />
        </div>
        <Logout />
      </div>
    </>
  );
}

export default Sidebar;

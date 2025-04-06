import Menu from "./menu/Menu";
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
          "absolute right-[-300px] z-10 flex h-full w-[288px] shrink-0 flex-col overflow-y-auto rounded-3xl border border-[#E5E7EB] bg-white px-6 pb-6 pt-8 shadow-sidebar transition-all duration-500 md:static md:shadow-none",
          {
            "right-[0px]": sidebar,
          },
        )}
      >
        <Menu />
        {/* <Logout>
          <div className="flex w-fit cursor-pointer items-center gap-2 px-2 py-3 hover:cursor-pointer hover:text-[#735cb4]">
            <LogoutCurve />
            <span className="text-sm font-semibold">خروج از حساب کاربری</span>
          </div>
        </Logout> */}
      </div>
    </>
  );
}

export default Sidebar;

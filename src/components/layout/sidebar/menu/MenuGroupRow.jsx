import cx from "classnames";
import { ArrowDown2 } from "iconsax-react";
import { useState } from "react";
import { NavLink } from "react-router";

function MenuGroupRow({ data }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className="grid transition-all"
      style={{
        gridTemplateRows: isActive ? "max-content 1fr" : "max-content 0fr",
      }}
    >
      <div
        className={cx("flex items-center justify-between rounded-2xl", {
          "bg-[#7143D2] text-white": isActive,
        })}
        onClick={() => setIsActive(!isActive)}
      >
        <div
          className={cx(
            "flex w-fit items-center gap-2 px-2 py-3 hover:cursor-pointer",
            {
              "text-white": isActive,
            },
          )}
        >
          <data.icon />
          <span>{data.title}</span>
        </div>
        <ArrowDown2
          className={cx("transition-all", { "rotate-180": isActive })}
        />
      </div>

      <div className="overflow-hidden rounded-2xl bg-[#F6F5FD] transition-all">
        {data.paths.map((path) => (
          <NavLink
            key={path.title}
            to={path.path}
            replace
            className={({ isActive }) =>
              cx(
                "relative flex w-fit items-center gap-2 py-3 pr-10 text-[#1F2937] after:absolute after:start-0 after:h-[25px] after:w-[2px] after:rounded-full after:bg-[#7143D2] hover:cursor-pointer",
                {
                  "!text-[#7143D2]": isActive,
                },
                {
                  "after:hidden": !isActive,
                },
              )
            }
          >
            <span>{path.title}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default MenuGroupRow;

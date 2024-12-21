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
        className="flex items-center justify-between"
        onClick={() => setIsActive(!isActive)}
      >
        <div
          className={cx(
            "flex w-fit items-center gap-2 px-2 py-3 hover:cursor-pointer",
            {
              "text-[#735cb4]": isActive,
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

      <div className="overflow-hidden rounded-lg bg-[#F2F0F9] transition-all">
        {data.paths.map((path) => (
          <NavLink
            key={path.title}
            to={path.path}
            replace
            className={({ isActive }) =>
              cx(
                "flex w-fit items-center gap-2 px-4 py-3 text-neutral-700 hover:cursor-pointer",
                {
                  "!text-[#735cb4]": isActive,
                },
              )
            }
          >
            {<path.icon />}
            <span>{path.title}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default MenuGroupRow;

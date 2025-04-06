import cx from "classnames";
import { NavLink } from "react-router";

function MenuRow({ icon, title, path }) {
  return (
    <NavLink
      to={path.replace("/", "")}
      replace
      className={({ isActive }) =>
        cx("flex w-fit items-center gap-2 px-2 py-3 hover:cursor-pointer", {
          "text-[#735cb4]": isActive,
        })
      }
    >
      {icon}
      <span>{title}</span>
    </NavLink>
  );
}

export default MenuRow;

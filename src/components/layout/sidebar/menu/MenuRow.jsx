import cx from "classnames";
import { NavLink } from "react-router";

function MenuRow({ icon, title, path }) {
  return (
    <NavLink
      to={path.replace("/", "")}
      replace
      className={({ isActive }) =>
        cx(
          "flex w-full items-center gap-2 rounded-2xl px-2 py-3 hover:cursor-pointer",
          {
            "bg-[#7143D2] text-white": isActive,
          },
          {
            "hover:text-black hover:bg-[#DFDBF9]": !isActive,
          },
        )
      }
    >
      {icon}
      <span>{title}</span>
    </NavLink>
  );
}

export default MenuRow;

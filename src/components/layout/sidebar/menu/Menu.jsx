import { menuItems } from "@/constants/menus";
import MenuRow from "./MenuRow";

function Menu() {
  return (
    <div className="mt-8 text-sm font-semibold">
      {menuItems.map((item) => (
        <MenuRow
          icon={<item.icon />}
          title={item.title}
          path={item.path}
          key={item.title}
        />
      ))}
    </div>
  );
}

export default Menu;

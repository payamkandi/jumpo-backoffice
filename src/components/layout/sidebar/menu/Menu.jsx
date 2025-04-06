import { MENU_ITEMS } from "@/constants/menus";
import MenuRow from "./MenuRow";
import MenuGroupRow from "./MenuGroupRow";

function Menu() {
  return (
    <div className="text-sm font-semibold">
      {MENU_ITEMS.map((item) => {
        if ("paths" in item) {
          return <MenuGroupRow key={item.title} data={item} />;
        } else {
          return (
            <MenuRow
              icon={<item.icon />}
              title={item.title}
              path={item.path}
              key={item.title}
            />
          );
        }
      })}
    </div>
  );
}

export default Menu;

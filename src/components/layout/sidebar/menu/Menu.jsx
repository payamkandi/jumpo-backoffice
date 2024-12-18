import { menuItems } from "@/constants/menus";
import MenuRow from "./MenuRow";
import MenuGroupRow from "./MenuGroupRow";

function Menu() {
  return (
    <div className="mt-8 text-sm font-semibold">
      {menuItems.map((item) => {
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

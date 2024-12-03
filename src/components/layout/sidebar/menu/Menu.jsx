import { Home, Profile2User } from "iconsax-react";
import MenuRow from "./MenuRow";

function Menu() {
  return (
    <div className="mt-8">
      <MenuRow icon={<Home />} title="صفحه اصلی" onClick={() => {}} />
      <MenuRow
        icon={<Profile2User />}
        title="مدیریت مشتریان"
        onClick={() => {}}
      />
      <MenuRow icon={<Home />} title="صفحه اصلی" onClick={() => {}} />
      <MenuRow icon={<Home />} title="صفحه اصلی" onClick={() => {}} />
    </div>
  );
}

export default Menu;

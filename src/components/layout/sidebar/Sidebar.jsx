import { Profile } from "iconsax-react";
import Logout from "./Logout";
import Menu from "./menu/Menu";

function Sidebar() {
  return (
    <div className="flex h-screen flex-col justify-between px-6 pb-6 pt-12 shadow-sidebar">
      <div className="flex flex-col items-center justify-center">
        <div className="flex size-16 items-center justify-center rounded-full border-2 border-secondary-tint-40 bg-[#F2F0F9]">
          <Profile size={42} color="#7e65c6" />
        </div>
        <span className="mt-4 text-base">آیدین مدرس اول (مدیر)</span>
        <Menu />
      </div>
      <Logout />
    </div>
  );
}

export default Sidebar;

import { LogoutCurve, User } from "iconsax-react";
import Logout from "../layout/sidebar/Logout";

const HeaderProfile = () => {
  return (
    <div className="flex items-center justify-center gap-[10px]">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F1ECFA]">
        <User size={24} />
      </div>
      <span className="text-sm font-semibold">سعید سعیدی</span>
      <Logout>
        <div className="flex items-center justify-center rounded-full bg-[#F1ECFA] p-3 hover:cursor-pointer">
          <LogoutCurve size={24} className="text-[#525252]" />
        </div>
      </Logout>
    </div>
  );
};

export default HeaderProfile;

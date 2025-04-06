import HeaderProfile from "../ui/HeaderProfile";
import Logo from "../ui/Logo";

const Header = () => {
  return (
    <div className="px-6 py-2">
      <div className="flex shrink-0 items-center justify-between rounded-3xl border border-[#E5E7EB] bg-white px-6 py-3">
        <Logo />
        <HeaderProfile />
      </div>
    </div>
  );
};

export default Header;

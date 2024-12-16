import ToggleSideBar from "../ui/toggleSideBar/ToggleSideBar";
import Sidebar from "./sidebar/Sidebar";

function Layout({ children }) {
  return (
    <div className="relative flex h-full w-full">
      <ToggleSideBar />
      <Sidebar />
      <div className="flex w-full flex-col overflow-x-hidden bg-[#F9FAFA]">
        <div className="h-20 shrink-0 border-b border-[#F2F0F9] bg-white"></div>
        <div className="overflow-y-auto p-3 sm:p-6">{children}</div>
      </div>
    </div>
  );
}

export default Layout;

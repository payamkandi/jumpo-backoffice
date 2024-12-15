import ToggleSideBar from "../ui/toggleSideBar/ToggleSideBar";
import Sidebar from "./sidebar/Sidebar";

function Layout({ children }) {
  return (
    <div className="relative flex h-full w-full">
      <ToggleSideBar />
      <Sidebar />
      <div className="w-full overflow-x-hidden bg-[#F9FAFA] p-3 sm:p-6">
        {children}
      </div>
    </div>
  );
}

export default Layout;

import ToggleSideBar from "../ui/ToggleSideBar";
import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";

function Layout({ children }) {
  return (
    <main className="relative h-full w-full bg-[#F3F4F6]">
      <ToggleSideBar />
      <Header />
      <div className="flex h-[calc(100%-90px)] pb-[55px] w-full gap-2 px-6">
        <Sidebar />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </main>
  );
}

export default Layout;

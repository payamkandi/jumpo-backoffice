import Sidebar from "./sidebar/Sidebar";

function Layout({ children }) {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <div className="w-full overflow-x-hidden bg-[#F9FAFA] p-6">
        {children}
      </div>
    </div>
  );
}

export default Layout;

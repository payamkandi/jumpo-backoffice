import Sidebar from "./sidebar/Sidebar";

function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}

export default Layout;

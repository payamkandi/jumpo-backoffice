import Layout from "@/components/layout/Layout";
import { menuItems } from "@/constants/menus";
import Login from "@/pages/login/Login";
import { useAuthStore } from "@/store/authStore";
import { Navigate, Outlet, Route, Routes } from "react-router";

const ProtectedRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/" />
  );
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route element={<ProtectedRoute />}>
      {menuItems.map((item) => (
        <Route key={item.path} path={"/" + item.path} element={<item.page />} />
      ))}
    </Route>
  </Routes>
);

export default AppRoutes;

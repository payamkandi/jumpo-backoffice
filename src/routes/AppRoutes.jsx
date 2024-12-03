import Layout from "../components/layout/Layout";
import Login from "../pages/Login/Login";
import { Navigate, Outlet, Route, Routes } from "react-router";
import { useAuthStore } from "../store/authStore";
import Home from "../pages/Home";

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
      <Route path="/home" element={<Home />} />
    </Route>
  </Routes>
);

export default AppRoutes;

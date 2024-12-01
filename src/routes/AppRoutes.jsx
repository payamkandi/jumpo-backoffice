import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import { Navigate, Route, Routes } from "react-router";
import Login from "../pages/Login/Login";
import { useAuthStore } from "../store/authStore";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? (
    <Layout>{children}</Layout>
  ) : (
    <Navigate to="/login" />
  );
};

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default AppRoutes;

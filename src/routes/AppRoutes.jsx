import { lazy, Suspense } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router";
import { useAuthStore } from "@/store/authStore";

const Layout = lazy(() => import("@/components/layout/Layout"));
const Branches = lazy(() => import("@/pages/branches/Branches"));
const DiscountCodes = lazy(() => import("@/pages/discountCodes/DiscountCodes"));
const GiftCardList = lazy(() => import("@/pages/giftCardList/GiftCardList"));
const GiftCards = lazy(() => import("@/pages/giftCards/GiftCards"));
const Login = lazy(() => import("@/pages/login/Login"));
const ManageUsersWithProvider = lazy(
  () => import("@/pages/manageUsers/ManageUsers"),
);
const PurchaseHistory = lazy(
  () => import("@/pages/manageUsers/PurchaseHistory"),
);
const ScoreList = lazy(() => import("@/pages/scoreList/ScoreList"));
const Tickets = lazy(() => import("@/pages/tickets/Tickets"));

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
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/manage-users">
          <Route index element={<ManageUsersWithProvider />} />
          <Route path="purchase-history/:id" element={<PurchaseHistory />} />
        </Route>
        <Route path="/gift-cards" element={<GiftCards />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/gift-card-list" element={<GiftCardList />} />
        <Route path="/discount-codes" element={<DiscountCodes />} />
        <Route path="/scores-list" element={<ScoreList />} />
        <Route path="/branches" element={<Branches />} />
      </Route>
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  </Suspense>
);

export default AppRoutes;

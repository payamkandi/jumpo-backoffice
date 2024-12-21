import { lazy, Suspense } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router";
import { useAuthStore } from "@/store/authStore";
const AddScore = lazy(() => import("@/pages/scoreList/AddScore"));
const SellGiftCards = lazy(() => import("@/pages/sellGiftCards/SellGiftCards"));
const PublicDiscountCodes = lazy(
  () => import("@/pages/discountCodes/PublicDiscountCodes"),
);
const PrivateDiscountCodes = lazy(
  () => import("@/pages/discountCodes/PrivateDiscountCodes"),
);
const WalletHistory = lazy(() => import("@/pages/manageUsers/WalletHistory"));
const Layout = lazy(() => import("@/components/layout/Layout"));
const ManageBranches = lazy(() => import("@/pages/branches/ManageBranches"));
const CreateBranch = lazy(() => import("@/pages/branches/CreateBranch"));
const ArchivedBranches = lazy(
  () => import("@/pages/branches/ArchivedBranches"),
);
const DiscountCodes = lazy(() => import("@/pages/discountCodes/DiscountCodes"));
const GiftCardList = lazy(() => import("@/pages/giftCardList/GiftCardList"));
const CreateGiftCard = lazy(
  () => import("@/pages/manageGiftCards/CreateGiftCard"),
);
const ManageGiftCards = lazy(
  () => import("@/pages/manageGiftCards/ManageGiftCards"),
);
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
          <Route path="wallet-history/:id" element={<WalletHistory />} />
        </Route>
        <Route path="/manage-gift-cards">
          <Route index element={<ManageGiftCards />} />
          <Route path="create-gift-card" element={<CreateGiftCard />} />
        </Route>
        <Route path="/sell-gift-cards">
          <Route index element={<SellGiftCards />} />
        </Route>
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/gift-card-list" element={<GiftCardList />} />
        <Route path="/discount-codes">
          <Route index element={<DiscountCodes />} />
          <Route
            path="create-public-discount-code"
            element={<PublicDiscountCodes />}
          />
          <Route
            path="create-private-discount-code"
            element={<PrivateDiscountCodes />}
          />
        </Route>
        <Route path="/scores-list">
          <Route index element={<ScoreList />} />
          <Route path="add-score" element={<AddScore />} />
        </Route>
        <Route path="/manage-branches" element={<ManageBranches />} />
        <Route path="/create-branch" element={<CreateBranch />} />
        <Route path="/archived-branches" element={<ArchivedBranches />} />
      </Route>
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  </Suspense>
);

export default AppRoutes;

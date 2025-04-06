import { lazy, Suspense } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router";
import { useAuthStore } from "@/store/authStore";
import {
  ADD_SCORE,
  ARCHIVED_BRANCHES,
  BRANCH_REQUESTS,
  CREATE_BRANCH,
  CREATE_GIFT_CARD,
  CREATE_PRIVATE_DISCOUNT_CODE,
  CREATE_PUBLIC_DISCOUNT_CODE,
  DISCOUNT_CODES,
  GIFT_CARD_LIST,
  HOME,
  LOGIN,
  MANAGE_BRANCHES,
  MANAGE_GIFT_CARDS,
  MANAGE_USERS,
  PURCHASE_HISTORY,
  SCORES_LIST,
  SELL_GIFT_CARDS,
  TICKETS,
  WALLET_HISTORY,
} from "@/constants/routes";
import Home from "@/pages/home/Home";
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
const BranchRequests = lazy(
  () => import("@/pages/branchRequests/BranchRequests"),
);

const ProtectedRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to={LOGIN} />
  );
};

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path={LOGIN} element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path={HOME} element={<Home />} />
        <Route path={MANAGE_USERS}>
          <Route index element={<ManageUsersWithProvider />} />
          <Route
            path={PURCHASE_HISTORY + "/:id"}
            element={<PurchaseHistory />}
          />
          <Route path={WALLET_HISTORY + "/:id"} element={<WalletHistory />} />
        </Route>
        <Route path={MANAGE_GIFT_CARDS}>
          <Route index element={<ManageGiftCards />} />
          <Route path={CREATE_GIFT_CARD} element={<CreateGiftCard />} />
        </Route>
        <Route path={SELL_GIFT_CARDS}>
          <Route index element={<SellGiftCards />} />
        </Route>
        <Route path={TICKETS} element={<Tickets />} />
        <Route path={GIFT_CARD_LIST} element={<GiftCardList />} />
        <Route path={DISCOUNT_CODES}>
          <Route index element={<DiscountCodes />} />
          <Route
            path={DISCOUNT_CODES + CREATE_PUBLIC_DISCOUNT_CODE}
            element={<PublicDiscountCodes />}
          />
          <Route
            path={DISCOUNT_CODES + CREATE_PRIVATE_DISCOUNT_CODE}
            element={<PrivateDiscountCodes />}
          />
        </Route>
        <Route path={SCORES_LIST}>
          <Route index element={<ScoreList />} />
          <Route path={ADD_SCORE} element={<AddScore />} />
        </Route>
        <Route path={MANAGE_BRANCHES} element={<ManageBranches />} />
        <Route path={CREATE_BRANCH} element={<CreateBranch />} />
        <Route path={ARCHIVED_BRANCHES} element={<ArchivedBranches />} />
        <Route path={BRANCH_REQUESTS} element={<BranchRequests />} />
      </Route>
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  </Suspense>
);

export default AppRoutes;

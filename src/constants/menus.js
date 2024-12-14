import Branches from "@/pages/branches/Branches";
import DiscountCodes from "@/pages/discountCodes/DiscountCodes";
import GiftCardList from "@/pages/giftCardList/GiftCardList";
import GiftCards from "@/pages/giftCards/GiftCards";
import ManageUsers from "@/pages/manageUsers/ManageUsers";
import ScoreList from "@/pages/scoreList/ScoreList";
import Tickets from "@/pages/tickets/Tickets";
import {
  Chart,
  ElementPlus,
  I3Square,
  LinkSquare,
  Money,
  Profile2User,
} from "iconsax-react";

export const menuItems = [
  {
    icon: Profile2User,
    title: "مدیریت مشتریان",
    path: "manage-users",
    page: ManageUsers,
  },
  {
    icon: Money,
    title: "فروش کارت هدیه",
    path: "gift-cards",
    page: GiftCards,
  },
  { icon: Chart, title: "لیست فروش بلیت", path: "tickets", page: Tickets },
  {
    icon: I3Square,
    title: "لیست فروش کارت هدیه",
    path: "gift-card-list",
    page: GiftCardList,
  },
  {
    icon: I3Square,
    title: "کد تخفیف",
    path: "discount-codes",
    page: DiscountCodes,
  },
  {
    icon: ElementPlus,
    title: "لیست امتیازات",
    path: "scores-list",
    page: ScoreList,
  },
  {
    icon: LinkSquare,
    title: "مدیریت شعب",
    path: "branches",
    page: Branches,
  },
];

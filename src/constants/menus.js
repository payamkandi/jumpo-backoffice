import Branches from "@/pages/branches/Branches";
import DiscountCodes from "@/pages/discountCodes/DiscountCodes";
import GiftCardList from "@/pages/giftCardList/GiftCardList";
import GiftCards from "@/pages/manageGiftCards/ManageGiftCards";
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
  Rank,
} from "iconsax-react";

export const menuItems = [
  {
    icon: Profile2User,
    title: "مدیریت مشتریان",
    path: "manage-users",
  },
  {
    icon: Rank,
    title: "مدیریت کارت هدیه",
    path: "manage-gift-cards",
  },
  {
    icon: Money,
    title: "فروش کارت هدیه",
    path: "sell-gift-cards",
  },
  { icon: Chart, title: "لیست فروش بلیت", path: "tickets" },
  {
    icon: I3Square,
    title: "لیست فروش کارت هدیه",
    path: "gift-card-list",
  },
  {
    icon: I3Square,
    title: "کد تخفیف",
    path: "discount-codes",
  },
  {
    icon: ElementPlus,
    title: "لیست امتیازات",
    path: "scores-list",
  },
  {
    icon: LinkSquare,
    title: "مدیریت شعب",
    path: "branches",
  },
];

import {
  Chart,
  Element3,
  ElementPlus,
  I3Square,
  LinkSquare,
  Money,
  Profile2User,
  Rank,
} from "iconsax-react";

import {
  MANAGE_USERS,
  MANAGE_GIFT_CARDS,
  SELL_GIFT_CARDS,
  TICKETS,
  GIFT_CARD_LIST,
  DISCOUNT_CODES,
  SCORES_LIST,
  MANAGE_BRANCHES,
  CREATE_BRANCH,
  ARCHIVED_BRANCHES,
  BRANCH_REQUESTS,
} from "./routes";
export const MENU_ITEMS = [
  {
    icon: Profile2User,
    title: "مدیریت مشتریان",
    path: MANAGE_USERS,
  },
  {
    icon: Rank,
    title: "مدیریت کارت هدیه",
    path: MANAGE_GIFT_CARDS,
  },
  {
    icon: Money,
    title: "فروش کارت هدیه",
    path: SELL_GIFT_CARDS,
  },
  {
    icon: Chart,
    title: "لیست فروش بلیت",
    path: TICKETS,
  },
  {
    icon: I3Square,
    title: "لیست فروش کارت هدیه",
    path: GIFT_CARD_LIST,
  },
  {
    icon: I3Square,
    title: "کد تخفیف",
    path: DISCOUNT_CODES,
  },
  {
    icon: ElementPlus,
    title: "لیست امتیازات",
    path: SCORES_LIST,
  },
  {
    icon: LinkSquare,
    title: "شعب",
    paths: [
      {
        icon: LinkSquare,
        title: "مدیریت شعب",
        path: MANAGE_BRANCHES,
      },
      {
        icon: LinkSquare,
        title: "تعریف شعب",
        path: CREATE_BRANCH,
      },
      {
        icon: LinkSquare,
        title: "شعب آرشیو شده",
        path: ARCHIVED_BRANCHES,
      },
    ],
  },
  {
    icon: Element3,
    title: "درخواست نمایندگی",
    path: BRANCH_REQUESTS,
  },
];

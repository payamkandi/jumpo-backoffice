import { createColumnHelper } from "@tanstack/react-table";

export const userInfoMapper = (user) => {
  return {
    کدشناسه: user?.customerId,
    "نام و نام خانوادگی":
      user?.nameAndFamily || user?.name + " " + user?.familyName,
    جنسیت: user?.gender,
    ایمیل: user?.email,
    "شماره تماس": user?.contactNumber,
    "کد ملی": user?.nationalId,
    "تاریخ تولد": user?.birthDate,
    "اعتبار کیف پول": user?.walletCredit,
    "شناسه کارت": user?.cardId,
  };
};

export const cardInfoMapper = (card) => {
  return {
    "کد شناسه مشتری": card?.customerId,
    "تاریخ خرید": card?.purchaseDate,
    "نام کارت": card?.cardName,
    "تاریخ انقضا": card?.expDate,
    "کد کارت": card?.cardCode,
    "آدرس ایمیل ارسالی": card?.email,
    "نام و نام خانوادگی":
      card?.nameAndFamily || card?.name + " " + card?.familyName,
    "شناسه کارت": card?.cardId,
    "مبلغ کارت": card?.amount,
    "تاریخ ثبت کد": card?.dateOfRegistration,
    وضعیت: card?.status,
  };
};

export const ticketInfoMapper = (ticket) => {
  return {
    "شناسه بلیت": ticket?.ticketId,
    "نام و نام خانوادگی": ticket?.fullName,
    "نام شعبه": ticket?.branch,
    "تاریخ خرید": ticket?.buyDate,
    "درصد تخفیف": ticket?.discount + "%",
    "استفاده از کیف پول": ticket?.amountOfWalletUsage,
    "شماره موبایل": ticket?.phoneNumber,
    "زمان بازی": ticket?.playTime,
    "تاریخ و زمان بازی": ticket?.dateTime,
    "تعداد نفرات": ticket?.participants,
    "مبلغ بلیت": ticket?.ticketAmount,
    "مبلغ پرداختی": ticket?.paidAmount,
  };
};

export const discountInfoMapper = (discount) => {
  return {
    ردیف: discount?.row,
    "شناسه تخفیف": discount?.discountId,
    "نام کد": discount?.codeName,
    "کد تخفیف": discount?.discountCode,
    "مقدار تخفیف": discount?.discountAmount,
    "تخصیص به مشتری": discount?.customerType,
    "تاریخ ایجاد کد": discount?.creationDate,
    "تاریخ انقضا کد": discount?.expirationDate,
    "وضعیت کد تخفیف": discount?.codeStatus ? "فعال" : "غیرفعال",
    "شماره موبایل": discount?.phoneNumber || "ندارد",
  };
};

export const columnHelper = createColumnHelper();

export const userInfoMapper = (user) => {
  return {
    کدشناسه: user?.customerId,
    "نام و نام خانوادگی": user?.name + " " + user?.familyName,
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
    "نام و نام خانوادگی": card?.name + " " + card?.familyName,
    "شناسه کارت": card?.cardId,
    "مبلغ کارت": card?.amount,
    "تاریخ ثبت کد": card?.dateOfRegistration,
    وضعیت: card?.status,
  };
};

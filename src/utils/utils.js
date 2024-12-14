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

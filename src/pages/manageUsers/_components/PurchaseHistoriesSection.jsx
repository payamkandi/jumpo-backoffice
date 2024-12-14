import { useUsersStore } from "@/store/usersStore";
import PurcahseHistoryCard from "./PurcahseHistoryCard";
import PurchaseHistoryGift from "./PurchaseHistoryGift";

function PurchaseHistoriesSection({ id }) {
  const users = useUsersStore((state) => state.users);
  const user = users.find((user) => user.contactNumber === id);
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:gap-8">
        <div className="w-full">
          <span className="text-sm font-normal text-[#415762]">
            شناسه مشتری :
          </span>
          <span className="font-base text-sm text-[#1D262B]">
            {" " + user.customerId + " "}
          </span>
        </div>
        <div className="w-full">
          <span className="text-sm font-normal text-[#415762]">
            نام و نام خانوادگی مشتری :
          </span>
          <span className="font-base text-sm text-[#1D262B]">
            {" " + user.name + " " + user.familyName + " "}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 overflow-y-auto">
        <PurcahseHistoryCard />
        <PurcahseHistoryCard />
        <PurchaseHistoryGift />
        <PurcahseHistoryCard />
        <PurchaseHistoryGift />
        <PurcahseHistoryCard />
        <PurcahseHistoryCard />
        <PurchaseHistoryGift />
        <PurcahseHistoryCard />
      </div>
    </>
  );
}

export default PurchaseHistoriesSection;

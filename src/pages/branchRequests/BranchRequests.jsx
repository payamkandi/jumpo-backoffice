import PageWrapper from "@/components/layout/PageWrapper";
import BranchRequestsTable from "./_components/BranchRequestsTable";
import { useBranchRequestsStore } from "@/store/branchRequestStore";
import { useEffect } from "react";

const defaultData = [
  {
    row: 1,
    name: "آیدین مدرس اول",
    mobile: "09136715736",
    city: "تهران",
    province: "تهران",
  },
  {
    row: 2,
    name: "آیدین مدرس اول",
    mobile: "09136715736",
    city: "تهران",
    province: "تهران",
  },
  {
    row: 3,
    name: "آیدین مدرس اول",
    mobile: "09136715736",
    city: "تهران",
    province: "تهران",
  },
  {
    row: 4,
    name: "آیدین مدرس اول",
    mobile: "09136715736",
    city: "تهران",
    province: "تهران",
  },
  {
    row: 5,
    name: "آیدین مدرس اول",
    mobile: "09136715736",
    city: "تهران",
    province: "تهران",
  },
  {
    row: 6,
    name: "آیدین مدرس اول",
    mobile: "09136715736",
    city: "تهران",
    province: "تهران",
  },
  {
    row: 7,
    name: "آیدین مدرس اول",
    mobile: "09136715736",
    city: "تهران",
    province: "تهران",
  },
  {
    row: 8,
    name: "آیدین مدرس اول",
    mobile: "09136715736",
    city: "تهران",
    province: "تهران",
  },
  {
    row: 9,
    name: "آیدین مدرس اول",
    mobile: "09136715736",
    city: "تهران",
    province: "تهران",
  },
  {
    row: 10,
    name: "آیدین مدرس اول",
    mobile: "09136715736",
    city: "تهران",
    province: "تهران",
  },
];

function BranchRequests() {
  const branchRequestsData = useBranchRequestsStore((state) => state.requests);
  const setBranchRequestsData = useBranchRequestsStore(
    (state) => state.setRequests,
  );
  useEffect(() => {
    setBranchRequestsData(defaultData);
  }, []);
  return (
    <PageWrapper title="درخواست نمایندگی">
      {branchRequestsData.length === 0 ? (
        <span>هیچ درخواستی یافت نشد</span>
      ) : (
        <BranchRequestsTable data={branchRequestsData} />
      )}
    </PageWrapper>
  );
}

export default BranchRequests;

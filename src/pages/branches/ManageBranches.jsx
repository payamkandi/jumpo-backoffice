import PageWrapper from "@/components/layout/PageWrapper";
import Button from "@/components/ui/button/Button";
import { useBranchesStore } from "@/store/branchStore";
import { useContext, useEffect } from "react";
import ManageBranchTable from "./_components/ManageBranchTable";
import BranchesContext, { BranchesProvider } from "@/contexts/branchesContext";
import InfoModal from "@/components/ui/infoModal/InfoModal";
import ArchiveModal from "./_components/ArchiveModal";
import { branchInfoMapper } from "@/utils/utils";
import { useNavigate } from "react-router";

const defaultData = [
  {
    row: 1,
    archived: false,
    branchId: "23455",
    branchName: "ایران",
    representativeName: "آیدین مدرس اول",
    representativePhone: "09167891536",
    city: "تهران",
    province: "تهران",
    username: "a.modarres",
    status: true,
    actions: ["A", "P"],
  },
  {
    row: 2,
    archived: false,
    branchId: "23456",
    branchName: "ایران",
    representativeName: "مریم حسینی",
    representativePhone: "09167891537",
    city: "مشهد",
    province: "خراسان رضوی",
    username: "m.hosseini",
    status: false,
    actions: ["A", "P"],
  },
  {
    row: 3,
    archived: false,
    branchId: "23457",
    branchName: "ایران",
    representativeName: "علی احمدی",
    representativePhone: "09167891538",
    city: "شیراز",
    province: "فارس",
    username: "a.ahmadi",
    status: true,
    actions: ["A", "P"],
  },
  {
    row: 4,
    archived: false,
    branchId: "23458",
    branchName: "ایران",
    representativeName: "زهرا رضایی",
    representativePhone: "09167891539",
    city: "اصفهان",
    province: "اصفهان",
    username: "z.rezaei",
    status: true,
    actions: ["A", "P"],
  },
  {
    row: 5,
    archived: false,
    branchId: "23459",
    branchName: "ایران",
    representativeName: "حسن کریمی",
    representativePhone: "09167891540",
    city: "تبریز",
    province: "آذربایجان شرقی",
    username: "h.karimi",
    status: false,
    actions: ["A", "P"],
  },
  {
    row: 6,
    archived: false,
    branchId: "23460",
    branchName: "ایران",
    representativeName: "نرگس بهرامی",
    representativePhone: "09167891541",
    city: "کرمان",
    province: "کرمان",
    username: "n.bahrami",
    status: true,
    actions: ["A", "P"],
  },
  {
    row: 7,
    archived: false,
    branchId: "23461",
    branchName: "ایران",
    representativeName: "محمد نوری",
    representativePhone: "09167891542",
    city: "یزد",
    province: "یزد",
    username: "m.noori",
    status: true,
    actions: ["A", "P"],
  },
  {
    row: 8,
    archived: false,
    branchId: "23462",
    branchName: "ایران",
    representativeName: "فرزانه امیری",
    representativePhone: "09167891543",
    city: "قم",
    province: "قم",
    username: "f.amiri",
    status: false,
    actions: ["A", "P"],
  },
  {
    row: 9,
    archived: false,
    branchId: "23463",
    branchName: "ایران",
    representativeName: "سینا عباسی",
    representativePhone: "09167891544",
    city: "اراک",
    province: "مرکزی",
    username: "s.abbasi",
    status: true,
    actions: ["A", "P"],
  },
  {
    row: 10,
    archived: false,
    branchId: "23464",
    branchName: "ایران",
    representativeName: "مهتاب شریفی",
    representativePhone: "09167891545",
    city: "زاهدان",
    province: "سیستان و بلوچستان",
    username: "m.sharifi",
    status: true,
    actions: ["A", "P"],
  },
];

function ManageBranches() {
  const branches = useBranchesStore((store) => store.branches);
  const setBranches = useBranchesStore((store) => store.setBranches);
  const navigate = useNavigate();
  const { branchInfo, infoModal, toggleInfoModal } =
    useContext(BranchesContext);

  const leftNode = (
    <div>
      <Button onClick={() => navigate("/create-branch")}>
        تعریف شعبه جدید
      </Button>
    </div>
  );
  useEffect(() => {
    setBranches(defaultData);
  }, []);
  return (
    <>
      <ArchiveModal />
      <InfoModal
        title="اطلاعات نمایندگی"
        data={branchInfoMapper(branchInfo)}
        isOpen={infoModal}
        toggle={toggleInfoModal}
      />
      <PageWrapper headerLeftNodes={leftNode} title="مدیریت شعب و نمایندگی">
        {branches.length === 0 ? (
          <span>هیچ شعبه ای یافت نشد</span>
        ) : (
          <ManageBranchTable data={branches} />
        )}
      </PageWrapper>
    </>
  );
}

function WithBranchesProvider() {
  return (
    <BranchesProvider>
      <ManageBranches />
    </BranchesProvider>
  );
}

export default WithBranchesProvider;

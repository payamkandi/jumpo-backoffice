import InfoModal from "@/components/ui/infoModal/InfoModal";
import Table from "../scoreList/_components/Table";
import { useContext } from "react";
import ManageUserContext, {
  ManageUserProvider,
} from "@/contexts/manageUserContext";
import { userInfoMapper } from "@/utils/utils";

function ManageUsers() {
  const { userInfo, infoModal, setInfoModal } = useContext(ManageUserContext);
  return (
    <>
      <InfoModal
        title="اطلاعات مشتری"
        data={userInfoMapper(userInfo)}
        isOpen={infoModal}
        toggle={() => setInfoModal(!infoModal)}
      />
      <div className="rounded-2xl border border-[#F2F0F9] bg-white p-6">
        <div className="mb-6">
          <span>مدیریت مشتریان</span>
        </div>
        <Table />
      </div>
    </>
  );
}

const ManageUsersWithProvider = () => {
  return (
    <ManageUserProvider>
      <ManageUsers />
    </ManageUserProvider>
  );
};

export default ManageUsersWithProvider;

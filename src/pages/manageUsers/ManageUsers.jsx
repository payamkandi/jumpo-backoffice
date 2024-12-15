import InfoModal from "@/components/ui/infoModal/InfoModal";
import { useContext, useEffect } from "react";
import ManageUserContext, {
  ManageUserProvider,
} from "@/contexts/manageUserContext";
import { userInfoMapper } from "@/utils/utils";
import { useUsersStore } from "@/store/usersStore";
import UsersTable from "../scoreList/_components/Table";
import PageWrapper from "@/components/layout/PageWrapper";

const defaultData = [
  {
    rowNumber: 1,
    customerId: "546795",
    contactNumber: "09909416143",
    name: null,
    nationalId: "4271028585",
    birthDate: "1370/02/02",
    familyName: null,
    gender: "مرد",
    registrationType: "حضوری",
    walletCredit: "۵,۰۰۰,۰۰۰ ریال",
    email: "idean.modarres89@gmail.com",
    cardId: "1234654697",
  },
  {
    rowNumber: 2,
    customerId: "546795",
    contactNumber: "09330760206",
    nationalId: "4271028585",
    name: "آیدین",
    familyName: "مدرس اول",
    birthDate: "1370/02/02",
    gender: "مرد",
    registrationType: "وب سایت",
    walletCredit: "۵,۰۰۰,۰۰۰ ریال",
    email: "idean.modarres89@gmail.com",
    cardId: "1234654697",
  },
];

function ManageUsers() {
  const { userInfo, setUserInfo, infoModal, setInfoModal } =
    useContext(ManageUserContext);
  const setUsers = useUsersStore((state) => state.setUsers);
  const users = useUsersStore((state) => state.users);

  const closeInfoModalHandler = () => {
    setInfoModal(false);
    setUserInfo(null);
  };

  useEffect(() => {
    setUsers(defaultData);
  }, [setUsers]);

  return (
    <>
      <InfoModal
        title="اطلاعات مشتری"
        data={userInfoMapper(userInfo)}
        isOpen={infoModal}
        toggle={closeInfoModalHandler}
      />
      <PageWrapper title="مدیریت مشتریان">
        {users.length === 0 ? (
          <span>هیچ مشتری یافت نشد</span>
        ) : (
          <UsersTable data={users} />
        )}
      </PageWrapper>
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

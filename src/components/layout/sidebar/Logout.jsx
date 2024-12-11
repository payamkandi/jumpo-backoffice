import { LogoutCurve } from "iconsax-react";
import Modal from "../../ui/modal/Modal";
import { useState } from "react";
import { useAuthStore } from "../../../store/authStore";

function Logout() {
  const logout = useAuthStore((state) => state.logout);
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const handleLogOut = () => logout();
  return (
    <>
      <Modal modal={modal} toggle={toggleModal}>
        <div className="flex flex-col px-16 pb-8 pt-6 text-center">
          <span className="mt-6 font-bold">خروج</span>
          <p className="mt-2">آیا از خروج اطمینان دارید؟</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={toggleModal}>لغو</button>
            <button onClick={handleLogOut}>خروج</button>
          </div>
        </div>
      </Modal>
      <div
        className="flex w-fit cursor-pointer items-center gap-2 hover:cursor-pointer hover:text-[#735cb4]"
        onClick={() => setModal(true)}
      >
        <LogoutCurve />
        <span>خروج</span>
      </div>
    </>
  );
}

export default Logout;

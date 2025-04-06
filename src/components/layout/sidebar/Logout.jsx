import Modal from "../../ui/modal/Modal";
import { useState } from "react";
import { useAuthStore } from "../../../store/authStore";
import Button from "@/components/ui/Button";

function Logout({ children }) {
  const logout = useAuthStore((state) => state.logout);
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const handleLogOut = () => logout();
  return (
    <>
      <Modal modal={modal} toggle={toggleModal}>
        <div className="flex w-auto flex-col px-16 pb-8 pt-6 text-center sm:w-96">
          <span className="mt-6 font-bold">خروج</span>
          <p className="mt-2">آیا از خروج اطمینان دارید؟</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button fill onClick={toggleModal}>
              لغو
            </Button>
            <Button fill onClick={handleLogOut}>
              خروج
            </Button>
          </div>
        </div>
      </Modal>
      <div onClick={() => setModal(true)}>{children}</div>
    </>
  );
}

export default Logout;

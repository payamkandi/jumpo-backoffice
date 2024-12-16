import Button from "@/components/ui/button/Button";
import Modal from "@/components/ui/modal/Modal";
import ManageCardsContext from "@/contexts/manageCardsContext";
import { CloseSquare } from "iconsax-react";
import { useContext } from "react";

function DeleteCardModal() {
  const { cardIdToDelete, deleteModal, setDeleteModal } =
    useContext(ManageCardsContext);

  const toggleModal = () => setDeleteModal((prev) => !prev);
  const handleDelete = () => {};
  return (
    <Modal modal={deleteModal} toggle={toggleModal}>
      <div className="flex flex-col justify-center px-4 pb-8 pt-6 text-center sm:w-[550px]">
        <CloseSquare
          size={24}
          className="cursor-pointer self-end"
          onClick={toggleModal}
        />
        <span className="mb-2 text-lg font-semibold">حذف</span>
        <p className="text-sm">
          آیا از حذف کارت{" "}
          <span className="text-[#735CB4]"> {cardIdToDelete} </span>
          اطمینان دارید؟
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button fill onClick={toggleModal}>
            لغو
          </Button>
          <Button fill onClick={handleDelete}>
            حذف
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteCardModal;
